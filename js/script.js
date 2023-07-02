let btnEL = document.querySelector(".btn");
let buttonEL = document.querySelector(".button");
let containerEL = document.querySelector(".container");
let videoEL = document.querySelector("video");
btnEL.addEventListener("click", () => {
  videoEL.style.display = "block";
  buttonEL.style.display = "block";
  containerEL.style.display = "none";
});
buttonEL.addEventListener("click", () => {
  videoEL.style.display = "none";
  containerEL.style.display = "block";
  buttonEL.style.display = "none";
});
