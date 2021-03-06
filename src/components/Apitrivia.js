import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { API_TRIVIA_URL } from "../api/consts";
import UserContext from "../store/context";
import { createUserScore } from "../api/userprofile";

export default function Apitrivia() {
  const [trivia, setTrivia] = useState(null);
  const {
    state: { category },
  } = useContext(UserContext);

  useEffect(() => {
    fetch(`${API_TRIVIA_URL}?categories=${category.category}&limit=10`)
      .then((response) => response.json())
      .then((data) =>
        setTrivia(data.map((trivia) => questionTransformation(trivia)))
      );
  }, [category.category]);

  const questionTransformation = (trivia) => ({
    questionText: trivia.question,
    answerOptions: [
      { answerText: trivia.incorrectAnswers[0], isCorrect: false },
      { answerText: trivia.incorrectAnswers[1], isCorrect: false },
      { answerText: trivia.incorrectAnswers[2], isCorrect: false },
      { answerText: trivia.correctAnswer, isCorrect: true },
    ],
  });

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const navigate = useNavigate();

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < trivia.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  function handleClick() {
    if (showScore === true) {
      if (category.category === "history") {
        createUserScore({ history: score });
        return navigate("/choosecategory");
      }
      if (category.category === "geography") {
        createUserScore({ geography: score });
        return navigate("/choosecategory");
      } else {
        createUserScore({ science: score });
        return navigate("/choosecategory");
      }
    }
  }
  return (
    trivia && (
      <div className="container_app">
        <div className="container__principal">
          {showScore ? (
            <div className="container__score">
              You answered {score} correct question out of {trivia.length}
              <h3 onClick={handleClick} className="header_3">
                Click me to select a new Category Quiz
              </h3>
            </div>
          ) : (
            <>
              <div className="container__question">
                <div className="container__count">
                  <span>Question {currentQuestion + 1}</span>/{trivia.length}
                </div>
                <div className="container__text">
                  {trivia[currentQuestion].questionText}
                  {trivia[currentQuestion].image ? (
                    <img src={trivia[currentQuestion].image} alt="" />
                  ) : (
                    <div></div>
                  )}
                </div>
              </div>
              <div className="container__answer">
                {trivia[currentQuestion].answerOptions &&
                  trivia[currentQuestion].answerOptions.map((answerOption) => (
                    <button
                      key={uuidv4()}
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
    )
  );
}
