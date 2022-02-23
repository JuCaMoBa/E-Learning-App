import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/mathxx.scss";
import { questions } from "../utils/questiosns";

export default function Maths() {
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
    return navigate("/choosecategory");
  }
  return (
    <div className="container_app">
      <div className="container__principal">
        {showScore ? (
          <div className="container__score">
            You answered {score} correct question out of {questions.length}
            <h3 onClick={handleClick} className="header_3">
              Click me to select a new Category Quiz
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
