const random = document.querySelector(".random--color");
const bodyColor = document.querySelector(".body--color");

const randomColor = (max, min) => Math.floor(Math.random() * (max - min) + min);
const randomInt = () =>
  `rgb(${randomColor(0, 255)},${randomColor(0, 255)},${randomColor(0, 255)})`;

document
  .querySelector(".random--color")
  .addEventListener("click", function (e) {
    console.log(e.target);
    this.style.backgroundColor = randomInt();
    this.textContent = randomInt().toUpperCase();
    document.body.style.backgroundColor = randomInt();
    bodyColor.textContent = randomInt().toUpperCase();
  });

//   Made With Love :)
