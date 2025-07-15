import React, { useState } from "react";

export default function ReadingSection({ setScore, answers, setAnswers, next, prev }) {
  const [currentScore, setCurrentScore] = useState(0);

  const questions = [
    {
      passage: "Passage 1: The city of Atlantis was once thought to be fictional...",
      question: "Where was Atlantis believed to be located?",
      options: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
      answer: "Atlantic Ocean"
    },
    {
      passage: "Passage 2: Renewable energy sources such as wind and solar...",
      question: "Which energy source is NOT mentioned?",
      options: ["Wind", "Solar", "Hydroelectric", "Geothermal"],
      answer: "Geothermal"
    },
  ];

  const [current, setCurrent] = useState(0);

  const handleAnswer = (opt) => {
    if (opt === questions[current].answer) {
      setCurrentScore(currentScore + 1);
    }
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setAnswers({ ...answers, reading: currentScore + 1 });
      next();
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Reading Section</h2>
      <p className="mb-4 bg-gray-100 p-4 rounded">{questions[current].passage}</p>
      <p className="mb-2">{questions[current].question}</p>
      {questions[current].options.map((opt, i) => (
        <button
          key={i}
          onClick={() => handleAnswer(opt)}
          className="block w-full mb-2 py-2 px-4 bg-green-600 text-white rounded"
        >
          {opt}
        </button>
      ))}
      <button onClick={prev} className="mt-4 px-4 py-2 bg-gray-400 text-white rounded">
        Back
      </button>
    </div>
  );
}
