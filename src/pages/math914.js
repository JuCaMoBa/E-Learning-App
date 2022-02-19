import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/mathxx.scss";
import AngleRecta from "../img/Angulo Rectangulo.png";
import Cube from "../img/Cube.png";
import Pentagono from "../img/Pentagono.jpg";
import Ruboid from "../img/Ruboid.jpg";
import Pitagoras from "../img/Pitagoras.png";

export default function App() {
  const questions = [
    {
      questionText: "What type of angle is it? ",
      image: AngleRecta,
      answerOptions: [
        { answerText: "Straight angle", isCorrect: false },
        { answerText: "acute angle", isCorrect: false },
        { answerText: "right angle", isCorrect: true },
        { answerText: "obtuse angle", isCorrect: false },
      ],
    },
    {
      questionText: "cos θ is equal to:",
      answerOptions: [
        { answerText: "1/sen θ", isCorrect: false },
        { answerText: "1/sec θ", isCorrect: true },
        { answerText: "1/tan θ", isCorrect: false },
        { answerText: "1/csc θ", isCorrect: false },
      ],
    },
    {
      questionText:
        "Which is the surface area of this cube if all of its sides measure 11cm?",
      image: Cube,
      answerOptions: [
        { answerText: "726", isCorrect: true },
        { answerText: "621", isCorrect: false },
        { answerText: "460", isCorrect: false },
        { answerText: "121", isCorrect: false },
      ],
    },
    {
      questionText: "Which is the perimeter of the pentagon in the image?",
      image: Pentagono,
      answerOptions: [
        { answerText: "10", isCorrect: false },
        { answerText: "12", isCorrect: false },
        { answerText: "20", isCorrect: false },
        { answerText: "30", isCorrect: true },
      ],
    },
    {
      questionText:
        "Which is the area of a Ruboid if the h is 2 m and the b is 6m?",
      image: Ruboid,
      answerOptions: [
        { answerText: "24m²", isCorrect: false },
        { answerText: "64m²", isCorrect: false },
        { answerText: "6m²", isCorrect: false },
        { answerText: "12m²", isCorrect: true },
      ],
    },
    {
      questionText:
        "Find the value of the hypotenuse if its cathetus are 6 and 8.",
      image: Pitagoras,
      answerOptions: [
        { answerText: "10", isCorrect: true },
        { answerText: "6", isCorrect: false },
        { answerText: "5", isCorrect: false },
        { answerText: "8", isCorrect: false },
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
