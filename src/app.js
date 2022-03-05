/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};
const number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, "A", "Q", "K", "J"];
const suits = ["&spades;", "&clubs;", "&hearts;", "&diams;"];

const getRan = (min, max) => {
  const randomNumber = Math.random();
  const float = randomNumber * (max - min) + min;
  return Math.floor(float);
};

let suitIndex = getRan(0, suits.length - 1);
let numberIndex = getRan(0, number.length - 1);
