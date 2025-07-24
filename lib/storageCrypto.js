// utils/storageCrypto.js

export async function encryptStorage(data) {
    const keyString = process.env.NEXT_PUBLIC_ENCRYPTION_KEY;
    const enc = new TextEncoder();

    const keyMaterial = await window.crypto.subtle.importKey(
        "raw",
        enc.encode(keyString),
        { name: "PBKDF2" },
        false,
        ["deriveKey"]
    );

    const salt = crypto.getRandomValues(new Uint8Array(16));

    const derivedKey = await window.crypto.subtle.deriveKey(
        {
            name: "PBKDF2",
            salt: salt,
            iterations: 100000,
            hash: "SHA-256",
        },
        keyMaterial,
        { name: "AES-GCM", length: 256 },
        false,
        ["encrypt"]
    );

    const iv = crypto.getRandomValues(new Uint8Array(12));

    const encryptedContent = await window.crypto.subtle.encrypt(
        {
            name: "AES-GCM",
            iv: iv,
        },
        derivedKey,
        enc.encode(JSON.stringify(data))
    );

    const encryptedBuffer = new Uint8Array([
        ...salt,
        ...iv,
        ...new Uint8Array(encryptedContent),
    ]);

    return btoa(String.fromCharCode(...encryptedBuffer));
}

export async function decryptStorage(data) {
    const keyString = process.env.NEXT_PUBLIC_ENCRYPTION_KEY;
    const enc = new TextEncoder();
    const dec = new TextDecoder();

    const buffer = Uint8Array.from(atob(data), c => c.charCodeAt(0));
    const salt = buffer.slice(0, 16);
    const iv = buffer.slice(16, 28);
    const encryptedContent = buffer.slice(28);

    const keyMaterial = await window.crypto.subtle.importKey(
        "raw",
        enc.encode(keyString),
        { name: "PBKDF2" },
        false,
        ["deriveKey"]
    );

    const derivedKey = await window.crypto.subtle.deriveKey(
        {
            name: "PBKDF2",
            salt: salt,
            iterations: 100000,
            hash: "SHA-256",
        },
        keyMaterial,
        { name: "AES-GCM", length: 256 },
        false,
        ["decrypt"]
    );

    const decrypted = await window.crypto.subtle.decrypt(
        {
            name: "AES-GCM",
            iv: iv,
        },
        derivedKey,
        encryptedContent
    );

    return JSON.parse(dec.decode(decrypted));
}
