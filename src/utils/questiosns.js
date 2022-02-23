import Derivada from "../img/Derivada.png";
import Integral from "../img/Integral.png";
import Limite from "../img/Limite.png";
import AngleRecta from "../img/Angulo Rectangulo.png";
import Cube from "../img/Cube.png";
import Pentagono from "../img/Pentagono.jpg";
import Ruboid from "../img/Ruboid.jpg";

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
  {
    questionText: "the imaginary number i is equal to",
    answerOptions: [
      { answerText: "√-1", isCorrect: true },
      { answerText: "√1", isCorrect: false },
      { answerText: "√-2", isCorrect: false },
      { answerText: "√2", isCorrect: false },
    ],
  },
  {
    questionText: "Calculate the indicated limit.",
    image: Limite,
    answerOptions: [
      { answerText: "No existe", isCorrect: false },
      { answerText: "1", isCorrect: true },
      { answerText: "Infinito", isCorrect: false },
      { answerText: "0", isCorrect: false },
    ],
  },
];

export { questions };
