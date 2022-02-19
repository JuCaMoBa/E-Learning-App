import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/mathxx.scss";
import Derivada from "../img/Derivada.png";
import Integral from "../img/Integral.png";

export default function App() {
  const questions = [
    {
      questionText: "Calculate the derivative of:  ",
      image: Derivada,
      answerOptions: [
        { answerText: "10x¹⁰  ₋ 21x⁷", isCorrect: false },
        { answerText: "10x⁹ - 21x⁶", isCorrect: true },
        { answerText: "10x⁹ ₋  21x⁶ ₊ 1", isCorrect: false },
        { answerText: "10x  ₋ 21x", isCorrect: false },
      ],
    },
    {
      questionText: "What is the result of the following integral ",
      image: Integral,
      answerOptions: [
        { answerText: "x² + C", isCorrect: true },
        { answerText: "2x² + C", isCorrect: false },
        { answerText: "4x + C", isCorrect: false },
        { answerText: "2x + C", isCorrect: false },
      ],
    },
    {
      questionText:
        "German mathematician who, together with Newton, is credited with the construction of the Calculus...",
      answerOptions: [
        { answerText: "Euler", isCorrect: false },
        { answerText: "Gauss", isCorrect: false },
        { answerText: "Galios", isCorrect: false },
        { answerText: "Liebniz", isCorrect: true },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const navigate = useNavigate();

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  function handleClick() {
    return navigate("/mathslevel");
  }
  return (
    <div className="container_app">
      <div className="container__principal">
        {showScore ? (
          <div className="container__score">
            You answered {score} correct question out of {questions.length}
            <h3 onClick={handleClick} className="header_3">
              Click me to select a new level Quiz
            </h3>
          </div>
        ) : (
          <>
            <div className="container__question">
              <div className="container__count">
                <span>Question {currentQuestion + 1}</span>/{questions.length}
              </div>
              <div className="container__text">
                {questions[currentQuestion].questionText}
                {questions[currentQuestion].image ? (
                  <img src={questions[currentQuestion].image} alt="" />
                ) : (
                  <div></div>
                )}
              </div>
            </div>
            <div className="container__answer">
              {questions[currentQuestion].answerOptions.map((answerOption) => (
                <button
                  onClick={() =>
                    handleAnswerOptionClick(answerOption.isCorrect)
                  }
                >
                  {answerOption.answerText}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
