"use client";
import { useState, useEffect, useRef } from "react";
import { makeApiRequest } from "@/lib/apiRequest";
import { modelSchemas } from "@/lib/modelSchema";

const ACTIONS = ["ADD", "UPDATE", "DELETE", "ASK"];
const modelApiPaths = {
  category: "categories",
  supplier: "suppliers",
  unit: "units",
  item: "items",
  brand: "brands",
  warehouse: "warehouse",
  purchase: "purchases",
  sale: "sales",
};
const itemDependencies = ["category", "supplier", "warehouse", "brand"];

export default function SmartStockChatbot() {
    
  const [messages, setMessages] = useState([
    { sender: "bot", text: "👋 Hi! I'm SmartStock AI. What would you like to do today?" },
  ]);
  const [conversation, setConversation] = useState(initialConversationState());
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  function initialConversationState() {
    return {
      action: null,
      model: null,
      fieldIndex: 0,
      formData: {},
      awaiting: "action",
      fieldOptions: null,
      fieldName: null,
    };
  }

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const addMessage = (sender, text) => {
    setMessages((prev) => [...prev, { sender, text }]);
  };

  const resetConversation = () => {
    setConversation(initialConversationState());
    addMessage("bot", "What would you like to do next?");
  };

  const parseAction = (text) => ACTIONS.includes(text.toUpperCase()) ? text.toUpperCase() : null;

  const parseModel = (text) =>
    Object.keys(modelSchemas).find((k) => k.toLowerCase() === text.trim().toLowerCase()) || null;

  const handleUserInput = async (userText) => {
    if (!userText.trim()) return;
    addMessage("user", userText);

    const { action, model, fieldIndex, formData, awaiting, fieldOptions, fieldName } = conversation;

    switch (awaiting) {
      case "action": {
        const chosen = parseAction(userText);
        if (chosen) {
          setConversation((c) => ({ ...c, action: chosen, awaiting: "model" }));
          addMessage("bot", `You chose "${chosen}". Now, select a model/entity to ${chosen.toLowerCase()}.`);
        } else {
          addMessage("bot", `❌ Please choose one of: ${ACTIONS.join(", ")}`);
        }
        break;
      }

      case "model": {
        const chosenModel = parseModel(userText);
        if (chosenModel) {
          if (action === "ADD" && chosenModel === "item") {
            const ready = await checkItemDependencies();
            if (!ready) return;
          }

          const firstField = modelSchemas[chosenModel][0];
          setConversation({
            action,
            model: chosenModel,
            fieldIndex: 0,
            formData: {},
            awaiting: "fields",
            fieldOptions: null,
            fieldName: null,
          });
          addFieldPrompt(firstField);
        } else {
          addMessage("bot", `❌ Invalid model. Please choose from: ${Object.keys(modelSchemas).join(", ")}`);
        }
        break;
      }

      case "fields": {
        const field = modelSchemas[model][fieldIndex];

        if (field.ref) {
          try {
            const refKey = field.ref.toLowerCase();
            const res = await fetch(`/api/${modelApiPaths[refKey] || refKey}`);
            const data = await res.json();

            if (!data.length) {
              addMessage("bot", `⚠️ No ${field.ref}s found. Please add one before continuing.`);
              return resetConversation();
            }

            setConversation((c) => ({
              ...c,
              awaiting: "ref-select",
              fieldOptions: data,
              fieldName: field.name,
            }));

            addMessage("bot", `Please select a ${field.ref}:`);
            data.forEach((item, idx) =>
              addMessage("bot", `${idx + 1}. ${item.title || item.name}`)
            );

            return; // ✅ Prevent further execution
          } catch {
            addMessage("bot", `❌ Failed to fetch ${field.ref}s.`);
            return resetConversation();
          }
        }

        const value =
          !field.required && ["", "skip"].includes(userText.toLowerCase()) ? "" : userText.trim();

        if (field.required && !value) {
          addMessage("bot", `❌ ${field.name} is required.`);
          return;
        }

        if (action === "ADD" && field.name === "title") {
          const exists = await checkDuplicate(model, value);
          if (exists) {
            addMessage("bot", `⚠️ ${model} with "${value}" already exists. Enter a different title.`);
            return;
          }
        }

        const updatedForm = { ...formData, [field.name]: value };

        if (fieldIndex + 1 < modelSchemas[model].length) {
          const nextField = modelSchemas[model][fieldIndex + 1];
          setConversation({
            ...conversation,
            fieldIndex: fieldIndex + 1,
            formData: updatedForm,
          });
          addFieldPrompt(nextField);
        } else {
          const summary = formatSummary(model, updatedForm);
          setConversation({ ...conversation, formData: updatedForm, awaiting: "confirm" });
          addMessage("bot", `✅ Summary for ${model}:\n${summary}\nConfirm? (yes/no)`);
        }
        break;
      }

      case "ref-select": {
        const idx = parseInt(userText, 10);
        if (isNaN(idx) || idx < 1 || idx > fieldOptions.length) {
          addMessage("bot", "❌ Invalid choice. Enter a valid number.");
          return;
        }

        const selected = fieldOptions[idx - 1];
        const updatedForm = { ...formData, [fieldName]: selected._id };

        if (fieldIndex + 1 < modelSchemas[model].length) {
          const nextField = modelSchemas[model][fieldIndex + 1];
          setConversation({
            ...conversation,
            fieldIndex: fieldIndex + 1,
            formData: updatedForm,
            awaiting: "fields",
            fieldOptions: null,
            fieldName: null,
          });
          addFieldPrompt(nextField);
        } else {
          const summary = formatSummary(model, updatedForm);
          setConversation({ ...conversation, formData: updatedForm, awaiting: "confirm" });
          addMessage("bot", `✅ Summary for ${model}:\n${summary}\nConfirm? (yes/no)`);
        }
        break;
      }

      case "confirm": {
        const confirm = userText.trim().toLowerCase();
        if (confirm === "yes") {
          setLoading(true);
          try {
            await makeApiRequest({ entity: model, method: action.toLowerCase(), data: formData ,setLoading});
            addMessage("bot", `🎉 ${action} ${model} succeeded.`);
            resetConversation();
          } 
         catch (err) {
            addMessage("bot", `❌ Failed to ${action} ${model}: ${err.message}`);
          } finally {
            setLoading(false);
          }
        } else if (confirm === "no") {
          addMessage("bot", "Operation cancelled. Starting over.");
          resetConversation();
        } else {
          addMessage("bot", "Please type 'yes' to confirm or 'no' to cancel.");
        }
        break;
      }

      default:
        addMessage("bot", "🤔 I didn’t understand that. Let’s start again.");
        resetConversation();
    }

    setInput("");
  };

  const addFieldPrompt = (field) => {
    addMessage(
      "bot",
      `Please enter ${field.name}${field.required ? " (required)" : " (optional - type 'skip')"}`
    );
  };

  const checkItemDependencies = async () => {
    for (const dep of itemDependencies) {
      try {
        const res = await fetch(`/api/${modelApiPaths[dep]}`);
        const data = await res.json();
        if (!data.length) {
          addMessage("bot", `⚠️ Please add at least one ${dep} before adding an item.`);
          setConversation({
            action: "ADD",
            model: dep,
            fieldIndex: 0,
            formData: {},
            awaiting: "fields",
            fieldOptions: null,
            fieldName: null,
          });
          addFieldPrompt(modelSchemas[dep][0]);
          return false;
        }
      } catch {
        addMessage("bot", `❌ Error fetching ${dep}s.`);
        return false;
      }
    }
    return true;
  };

  const checkDuplicate = async (model, title) => {
    try {
      const res = await fetch("/api/check-exists", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ entity: model, title }),
      });
      const { exists } = await res.json();
      return exists;
    } catch {
      addMessage("bot", "❌ Failed to check duplicates.");
      return false;
    }
  };

  const formatSummary = (model, data) => {
    return Object.entries(data)
      .map(([k, v]) => `${capitalize(k)}: ${v || "(blank)"}`)
      .join("\n");
  };

  const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);

  const handleButtonClick = (text) => {
    if (!loading) handleUserInput(text);
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4 bg-white rounded-lg shadow">
      <div className="h-[500px] overflow-y-auto space-y-2 border p-4 bg-gray-50 rounded">
        {messages.map((msg, idx) => (
          <div key={idx} className={`text-sm ${msg.sender === "bot" ? "text-left" : "text-right"}`}>
            <span
              className={`inline-block px-3 py-2 rounded ${
                msg.sender === "bot" ? "bg-blue-100 text-blue-900" : "bg-green-100 text-green-900"
              }`}
            >
              {msg.text}
            </span>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="mt-4 space-y-2">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleUserInput(input);
          }}
        >
          <input
            type="text"
            className="w-full border px-4 py-2 rounded"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            disabled={loading}
          />
        </form>

        {["action", "model"].includes(conversation.awaiting) && (
          <div className="flex flex-wrap gap-2 mt-2">
            {conversation.awaiting === "action" &&
              ACTIONS.map((act) => (
                <button
                  key={act}
                  onClick={() => handleButtonClick(act)}
                  className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 text-white"
                >
                  {act}
                </button>
              ))}
            {conversation.awaiting === "model" &&
              Object.keys(modelSchemas).map((model) => (
                <button
                  key={model}
                  onClick={() => handleButtonClick(model)}
                  className="px-4 py-2 rounded bg-indigo-600 hover:bg-indigo-700 text-white"
                >
                  {model}
                </button>
              ))}
          </div>
        )}

        {loading && <p className="text-sm text-gray-500">⏳ Processing...</p>}
      </div>
    </div>
  );
}
