alert(
  "this is simple calculater to calculate sum, difference, product, division, power, roots, factorial, remainder and to indicate the type of your input. \nhappy calculation time!!! 😊👍"
);
// Select elements
setInterval(() => {
  let now = new Date();
  document.getElementById(
    "now"
  ).innerText = `TIME is ${now.toLocaleTimeString()}`;
}, 1000);
let num1 = document.getElementById("num1");
console.log(num1);
let num2 = document.getElementById("num2");
console.log(num2);
let date = document.getElementById("date");
let time = document.getElementById("time");
let but1 = document.getElementById("but1");
let but2 = document.getElementById("but2");
let but3 = document.getElementById("but3");
