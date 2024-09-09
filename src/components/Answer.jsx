import { useState, useEffect } from "react";
import "../app/globals.css";

const Answer = ({ correctAnswers }) => {
  // State zum Speichern, welche Antworten aufgedeckt wurden
  const [revealedAnswers, setRevealedAnswers] = useState(
    Array(correctAnswers.length).fill(false)
  );

  useEffect(() => {
    // Reset revealedAnswers, wenn sich die correctAnswers ändern (d.h. eine neue Frage geladen wird)
    setRevealedAnswers(Array(correctAnswers.length).fill(false));
  }, [correctAnswers]);

  const revealAnswer = (index) => {
    const newRevealedAnswers = [...revealedAnswers];
    newRevealedAnswers[index] = true;
    setRevealedAnswers(newRevealedAnswers);
  };

  return (
    <div className="answers-container flex center">
      {correctAnswers.map((answer, index) => (
        <div
          key={index}
          className="answer-box"
          onClick={() => revealAnswer(index)}
        >
          {revealedAnswers[index] ? <p>{answer}</p> : <p>Click to reveal</p>}
        </div>
      ))}
    </div>
  );
};

export default Answer;
