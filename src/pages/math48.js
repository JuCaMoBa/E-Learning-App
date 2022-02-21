import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/mathxx.scss";

export default function Math48() {
  const questions = [
    {
      questionText:
        "I have 2 apples and my mom gives me 4. How many apples do I have in total?",
      answerOptions: [
        { answerText: "2 apples", isCorrect: false },
        { answerText: "4 apples", isCorrect: false },
        { answerText: "6 apples", isCorrect: true },
        { answerText: "8 apples", isCorrect: false },
      ],
    },
    {
      questionText: "Start counting from number 12",
      answerOptions: [
        { answerText: "15 - 14 - 12 - 16 - 17", isCorrect: false },
        { answerText: "13 - 14 - 15 - 16 - 17", isCorrect: true },
        { answerText: "16 - 17 - 13 - 12 - 14", isCorrect: false },
        { answerText: "17 - 16 - 15 - 14 - 13", isCorrect: false },
      ],
    },
    {
      questionText:
        "I have 9 bananas and I eat 3, how many bananas do I have left?",
      answerOptions: [
        { answerText: "6", isCorrect: true },
        { answerText: "5", isCorrect: false },
        { answerText: "4", isCorrect: false },
        { answerText: "3", isCorrect: false },
      ],
    },
    {
      questionText: "How do you get a 9?",
      answerOptions: [
        { answerText: "Subtracting 9 - 1", isCorrect: false },
        { answerText: "Subtracting 10 - 9", isCorrect: false },
        { answerText: "Subtracting 7 - 2", isCorrect: false },
        { answerText: "Subtracting 10 - 1", isCorrect: true },
      ],
    },
    {
      questionText: "x + 5 = 12. Find the value of x to get 12",
      answerOptions: [
        { answerText: "x = 6", isCorrect: false },
        { answerText: "x = 4", isCorrect: false },
        { answerText: "x = 10", isCorrect: false },
        { answerText: "x = 7", isCorrect: true },
      ],
    },
    {
      questionText: "What number is missing in this series? 5, 10, 15, __, 25",
      answerOptions: [
        { answerText: "21", isCorrect: false },
        { answerText: "20", isCorrect: true },
        { answerText: "17", isCorrect: false },
        { answerText: "10", isCorrect: false },
      ],
    },
    {
      questionText: " x groups of 4 are equal to 12. Find the value of x",
      answerOptions: [
        { answerText: "x = 4", isCorrect: false },
        { answerText: "x = 2", isCorrect: false },
        { answerText: "x = 3", isCorrect: true },
        { answerText: "x = 10", isCorrect: false },
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
