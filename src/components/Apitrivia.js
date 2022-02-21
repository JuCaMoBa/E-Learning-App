import React, { useState, useEffect, useContext } from "react";
import { API_TRIVIA_URL } from "../api/consts";
import UserContext from "../store/context";

export default function Apitrivia() {
  const [trivia, setTrivia] = useState([]);
  const {
    state: { category },
  } = useContext(UserContext);

  useEffect(() => {
    fetch(`${API_TRIVIA_URL}?categories=${category.category}&limit=10`)
      .then((response) => response.json())
      .then((data) => setTrivia(data));
  }, [category.category]);
  console.log(trivia);
  console.log(category);
  return <div> Trivia</div>;
}
