import React, { useState } from "react";
import ListeningSection from "../components/ListeningSection";
import listeningQuestions from "../data/listeningQuestions.json";

export default function SampleExam() {
  const [step, setStep] = useState(1);
  const [score, setScore] = useState(0);

  const handleListeningSubmit = (answers) => {
    let correct = 0;
    listeningQuestions.forEach(q => {
      if (answers[q.id] === q.answer) {
        correct++;
      }
    });
    setScore(correct);
    setStep(2);
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      {step === 1 && (
        <ListeningSection
          questions={listeningQuestions}
          onSubmit={handleListeningSubmit}
        />
      )}
      {step === 2 && (
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Your Listening Score</h2>
          <p className="text-2xl">{score} / {listeningQuestions.length}</p>
        </div>
      )}
    </div>
  );
}
