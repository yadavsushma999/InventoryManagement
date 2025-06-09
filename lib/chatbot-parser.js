

function parseInput(text) {
    const lower = text.toLowerCase();

    // Detect action
    let detectedAction = null;
    if (lower.includes('add')) detectedAction = 'add';
    else if (lower.includes('update')) detectedAction = 'update';
    else if (lower.includes('delete')) detectedAction = 'delete';
    else if (lower.includes('ask')) detectedAction = 'ask';

    // Detect entity
    let detectedEntity = null;
    if (lower.includes('category')) detectedEntity = 'category';
    else if (lower.includes('unit')) detectedEntity = 'unit';
    else if (lower.includes('brand')) detectedEntity = 'brand';

    return { detectedAction, detectedEntity };
}
