"use client"
import { useState } from "react";
import Question from "../components/Question";
import Answer from "../components/Answer";
import Strike from "../components/Strike";
import NextButton from "../components/NextButton";
import { questions } from "../data/questions";
import "./globals.css"

export default function Home() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [strikeCount, setStrikeCount] = useState(0);

  const handleKeyPress = (event) => {
    if (event.key === "1") setStrikeCount(1);
    if (event.key === "2") setStrikeCount(2);
    if (event.key === "3") setStrikeCount(3);
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => (prevIndex + 1) % questions.length);
    setStrikeCount(0);  // Zurücksetzen der Strikes
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="container flex flex-column center gap" onKeyDown={handleKeyPress} tabIndex="0">
      <Question question={currentQuestion.question} />
      <Answer correctAnswers={currentQuestion.answers} />
      <Strike strikeCount={strikeCount} />
      <NextButton onNext={handleNextQuestion} />
    </div>
  );
}
