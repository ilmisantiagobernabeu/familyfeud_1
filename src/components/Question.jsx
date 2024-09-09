import { useState } from "react";

const Question = ({ question }) => {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="question-container" onClick={() => setRevealed(true)}>
      {revealed ? <h2>{question}</h2> : <h2>Click to reveal the question</h2>}
    </div>
  );
};

export default Question;

