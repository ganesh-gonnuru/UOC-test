import React, { useState } from "react";
import ListeningSection from "./ListeningSection";
import ReadingSection from "./ReadingSection";
import WritingSection from "./WritingSection";

export default function IELTSMockTest() {
  const [step, setStep] = useState(1);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState({
    listening: 0,
    reading: 0,
    writing: ""
  });

  const next = () => setStep(step + 1);
  const prev = () => setStep(step - 1);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Free IELTS Mock Test</h1>
      {step === 1 && (
        <ListeningSection
          setScore={setScore}
          answers={answers}
          setAnswers={setAnswers}
          next={next}
        />
      )}
      {step === 2 && (
        <ReadingSection
          setScore={setScore}
          answers={answers}
          setAnswers={setAnswers}
          next={next}
          prev={prev}
        />
      )}
      {step === 3 && (
        <WritingSection
          answers={answers}
          setAnswers={setAnswers}
          prev={prev}
        />
      )}
      {step > 3 && (
        <div>
          <h2 className="text-2xl mb-4">Your Results</h2>
          <p>Listening Score: {answers.listening} / 2</p>
          <p>Reading Score: {answers.reading} / 2</p>
          <p className="mt-4">
            <strong>Your Essay:</strong>
            <br />
            {answers.writing}
          </p>
        </div>
      )}
    </div>
  );
}
