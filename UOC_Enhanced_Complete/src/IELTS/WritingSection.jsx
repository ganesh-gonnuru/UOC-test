import React, { useState } from "react";

export default function WritingSection({ answers, setAnswers, prev }) {
  const [text, setText] = useState("");

  const handleSubmit = () => {
    setAnswers({ ...answers, writing: text });
    alert("Your essay is saved! ✅ You can copy it or download it for review.");
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Writing Section</h2>
      <p className="mb-2">
        Write about the following topic:  
        <br />
        <strong>“Some people think studying abroad is better than studying in one’s own country. Discuss both views and give your opinion.”</strong>
      </p>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows="10"
        className="w-full p-4 border rounded mb-4"
        placeholder="Write your essay here..."
      ></textarea>
      <button
        onClick={handleSubmit}
        className="px-4 py-2 bg-purple-600 text-white rounded mr-4"
      >
        Submit Essay
      </button>
      <button onClick={prev} className="px-4 py-2 bg-gray-400 text-white rounded">
        Back
      </button>
    </div>
  );
}
