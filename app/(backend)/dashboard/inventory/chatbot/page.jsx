"use client";
import { makeApiRequest } from "@/lib/apiRequest";
import { modelSchemas } from "@/lib/modelSchema";
import { useState, useEffect, useRef } from "react";

const ACTIONS = ["ADD", "UPDATE", "DELETE", "ASK"];

// Singular to plural model names mapping for API endpoint routing
const modelApiPaths = {
  category: "categories",
  supplier: "suppliers",
  unit: "units",
  item: "items",
  brand: "brands",
  warehouse: "warehouses",
  purchase: "purchases",
  sale: "sales",
};

export default function ProfessionalChatbot() {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi 👋 I am SmartStock AI! What would you like to do?" },
  ]);
  const [action, setAction] = useState(null);
  const [model, setModel] = useState(null);
  const [fieldIndex, setFieldIndex] = useState(0);
  const [formData, setFormData] = useState({});
  const [awaiting, setAwaiting] = useState("action");
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  function addMessage(sender, text) {
    setMessages((prev) => [...prev, { sender, text }]);
  }

  function resetConversation() {
    setAction(null);
    setModel(null);
    setFieldIndex(0);
    setFormData({});
    setAwaiting("action");
    addMessage("bot", "What would you like to do?");
  }

  function parseAction(text) {
    const upper = text.trim().toUpperCase();
    return ACTIONS.includes(upper) ? upper : null;
  }

  function parseModel(text) {
    const key = Object.keys(modelSchemas).find(
      (k) => k.toLowerCase() === text.trim().toLowerCase()
    );
    return key || null;
  }

  async function handleUserInput(userText) {
    addMessage("user", userText);

    if (awaiting === "action") {
      const chosenAction = parseAction(userText);
      if (chosenAction) {
        setAction(chosenAction);
        setAwaiting("model");
        addMessage("bot", `You chose "${chosenAction}". Which entity?`);
      } else {
        addMessage("bot", "Please choose one of: Add, Update, Delete, Ask");
      }
      setInput("");
      return;
    }

    if (awaiting === "model") {
      const chosenModel = parseModel(userText);
      if (chosenModel) {
        setModel(chosenModel);
        setFieldIndex(0);
        setFormData({});
        setAwaiting("fields");
        const firstField = modelSchemas[chosenModel][0];
        addMessage(
          "bot",
          `Please enter ${firstField.name}${firstField.required ? " (required)" : " (optional - type 'skip')"}`
        );
      } else {
        addMessage("bot", `Please choose from: ${Object.keys(modelSchemas).join(", ")}`);
      }
      setInput("");
      return;
    }

    if (awaiting === "fields") {
      const currentField = modelSchemas[model][fieldIndex];

      if (currentField.required && !userText.trim()) {
        addMessage("bot", `${currentField.name} is required.`);
        setInput("");
        return;
      }

      const fieldValue =
        !currentField.required &&
        (userText.trim() === "" || userText.trim().toLowerCase() === "skip")
          ? ""
          : userText;

      const updatedFormData = {
        ...formData,
        [currentField.name]: fieldValue,
      };

      // Check duplicate for "title" during ADD
      if (action === "ADD" && currentField.name === "title") {
        try {
          const res = await fetch("/api/check-exists", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ entity: model, title: fieldValue }),
          });

          const data = await res.json();
          if (data.exists) {
            addMessage("bot", `⚠️ A ${model} with the title "${fieldValue}" already exists. Please enter a different ${currentField.name}.`);
            setInput("");
            return;
          }
        } catch (err) {
          addMessage("bot", "❌ Error checking duplicates. Try again.");
          console.error("Check API error:", err);
          setInput("");
          return;
        }
      }

      const nextIndex = fieldIndex + 1;

      if (nextIndex < modelSchemas[model].length) {
        setFormData(updatedFormData);
        setFieldIndex(nextIndex);
        const nextField = modelSchemas[model][nextIndex];
        addMessage(
          "bot",
          `Please enter ${nextField.name}${nextField.required ? " (required)" : " (optional - type 'skip')"}`
        );
      } else {
        setFormData(updatedFormData);
        setAwaiting("confirm");
        const summary = Object.entries(updatedFormData)
          .map(([key, val]) => `${key}: ${val || "(blank)"}`)
          .join("\n");
        addMessage("bot", `Here's what you entered for ${model}:\n${summary}\nConfirm?`);
      }

      setInput("");
      return;
    }

    if (awaiting === "confirm") {
      const confirm = userText.trim().toLowerCase();

      if (["yes", "y"].includes(confirm)) {
        if (action === "ADD") {
          const endpoint = `/api/${modelApiPaths[model.toLowerCase()] || model.toLowerCase()}`;
          makeApiRequest(
            setLoading,
            endpoint,
            "POST",
            formData,
            `✅ ${model} created successfully!`,
            () => {
              addMessage("bot", `✅ ${model} added successfully.`);
              resetConversation();
            }
          );
        } else {
          addMessage("bot", `✅ ${action} on ${model} completed.`);
          resetConversation();
        }
      } else if (["no", "n"].includes(confirm)) {
        addMessage("bot", "Operation cancelled.");
        resetConversation();
      } else {
        addMessage("bot", 'Please reply with "Yes" or "No".');
      }

      setInput("");
      return;
    }

    if (awaiting === "ask") {
      addMessage("bot", "Thanks for your question! We'll get back to you.");
      resetConversation();
      setInput("");
      return;
    }
  }

  function onSend() {
    if (input.trim()) handleUserInput(input.trim());
  }

  function handleSkip() {
    handleUserInput("skip");
  }

  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-lg flex flex-col h-[600px]">
      <div className="text-xl font-bold mb-4 text-center text-gray-800">
        SmartStock AI Assistant 🤖
      </div>

      <div className="flex-1 overflow-y-auto border rounded-md p-4 space-y-3 bg-gray-50 flex flex-col">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.sender === "bot" ? "justify-start" : "justify-end"}`}>
            <div
              className={`px-4 py-2 rounded-lg text-sm max-w-[75%] whitespace-pre-wrap ${
                msg.sender === "bot"
                  ? "bg-blue-100 text-blue-900"
                  : "bg-green-100 text-green-900"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}

        {awaiting === "action" && (
          <div className="flex justify-center gap-4 mt-2 flex-wrap">
            {ACTIONS.map((act) => (
              <button
                key={act}
                onClick={() => handleUserInput(act)}
                className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition"
              >
                {act}
              </button>
            ))}
          </div>
        )}

        {awaiting === "model" && (
          <div className="flex flex-wrap justify-center gap-3 mt-2">
            {Object.keys(modelSchemas).map((m) => (
              <button
                key={m}
                onClick={() => handleUserInput(m)}
                className="bg-green-600 text-white px-3 py-1.5 rounded-full hover:bg-green-700 transition"
              >
                {m.charAt(0).toUpperCase() + m.slice(1)}
              </button>
            ))}
          </div>
        )}

        {awaiting === "confirm" && (
          <div className="flex justify-center gap-6 mt-2">
            {["Yes", "No"].map((option) => (
              <button
                key={option}
                onClick={() => handleUserInput(option)}
                className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition"
              >
                {option}
              </button>
            ))}
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      <div className="flex flex-col mt-4 gap-2">
        <div className="flex gap-2">
          <input
            type="text"
            className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && onSend()}
            disabled={["action", "model", "confirm"].includes(awaiting)}
          />
          <button
            onClick={onSend}
            className={`px-4 py-2 rounded-md text-white ${
              ["action", "model", "confirm"].includes(awaiting)
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
            disabled={["action", "model", "confirm"].includes(awaiting)}
          >
            Send
          </button>
        </div>

        {awaiting === "fields" && model && !modelSchemas[model][fieldIndex].required && (
          <button
            className="self-start bg-yellow-500 text-white px-3 py-1 rounded-full hover:bg-yellow-600 transition"
            onClick={handleSkip}
          >
            Skip
          </button>
        )}
      </div>
    </div>
  );
}
