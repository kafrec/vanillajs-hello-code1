/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["the dog", "my granma", "his turtle", "my bird"];
  let what = ["eat", "pissed", "crushed", "broked"];
  let when = [
    "before the class",
    "right in time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let nuevoWho = Math.floor(Math.random() * who.length);
  let whoFinal = who[nuevoWho];

  let nuevoWhat = Math.floor(Math.random() * what.length);
  let whatFinal = what[nuevoWhat];

  let nuevoWhen = Math.floor(Math.random() * when.length);
  let whenFinal = when[nuevoWhen];

  let variable_excuse = whoFinal + " " + whatFinal + " " + whenFinal;

  document.getElementById("excuse").innerHTML = variable_excuse;

  console.log("Hello Rigo from the console!");
};
