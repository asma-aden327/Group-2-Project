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
let but4 = document.getElementById("but4");
let but5 = document.getElementById("but5");
let but6 = document.getElementById("but6");
let but7 = document.getElementById("but7");
let but8 = document.getElementById("but8");
let but9 = document.getElementById("but9");
let but10 = document.getElementById("but10");
let form = document.getElementById("form");
console.log(form);
// Add an event listener to the button
but1.addEventListener("click", (e) => {
  e.preventDefault();
   document.body.style.backgroundColor = "green"; // Change background color on click
  let sum = parseFloat(num1.value) + parseFloat(num2.value);
  console.log(sum);
  let result = document.getElementById("result");
  result.innerText = `the sum of the two numbers is \n \n ${sum}`;
  result.className = "result";
});