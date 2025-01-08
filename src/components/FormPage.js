import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ViewTemplate() {

    const navigate = useNavigate();
  
  // State variables for the input fields
  const [title, setTitle] = useState("Interactive Learning");
  const [description, setDescription] = useState("Learn through interactive exercises");
  const [content, setContent] = useState("");

  // Function to handle saving changes
  const handleSaveChanges = () => {
    // You can send the updated data to your API or backend here
    console.log("Saved data:", { title, description, content });
    alert("Changes saved successfully!");
  };

  return (
    <div className="container">
      <div>
        <button onClick={() => navigate(-1)}
          style={{ border: "none", background: "none", cursor: "pointer", fontSize: "18px" }}
        >
          ← Back
        </button>
        <h1 style={{ marginLeft: "10px", fontSize: "24px", color: "#4A4A8B" }}>View Template</h1>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <label htmlFor="title" style={{ fontWeight: "bold", display: "block", marginBottom: "5px" }}>
          Title
        </label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            fontSize: "16px",
          }}
        />
      </div>

      <div style={{ marginBottom: "20px" }}>
        <label htmlFor="description" style={{ fontWeight: "bold", display: "block", marginBottom: "5px" }}>
          Description
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            fontSize: "16px",
            height: "80px",
            resize: "none",
          }}
        ></textarea>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <label htmlFor="content" style={{ fontWeight: "bold", display: "block", marginBottom: "5px" }}>
          Content
        </label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            fontSize: "16px",
            height: "150px",
            resize: "none",
          }}
        ></textarea>
      </div>

      <button
        onClick={handleSaveChanges}
        style={{
          backgroundColor: "#6C63FF",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        Save Changes
      </button>
    </div>
  );
}
