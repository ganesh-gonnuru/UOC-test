import React, { useState } from "react";

export default function ListeningSection({ setScore, answers, setAnswers, next }) {
  const [currentScore, setCurrentScore] = useState(0);

  const questions = [
    {
      audio: "/ielts/listening/audio1.mp3",
      question: "What is the speaker talking about?",
      options: ["Weather", "Travel", "Shopping", "Education"],
      answer: "Travel"
    },
    {
      audio: "/ielts/listening/audio2.mp3",
      question: "Where is the speaker going?",
      options: ["School", "Airport", "Mall", "Office"],
      answer: "Airport"
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
      setAnswers({ ...answers, listening: currentScore + 1 });
      next();
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Listening Section</h2>
      <audio controls src={questions[current].audio} className="mb-4"></audio>
      <p className="mb-2">{questions[current].question}</p>
      {questions[current].options.map((opt, i) => (
        <button
          key={i}
          onClick={() => handleAnswer(opt)}
          className="block w-full mb-2 py-2 px-4 bg-blue-600 text-white rounded"
        >
          {opt}
        </button>
      ))}
    </div>
  );
}
