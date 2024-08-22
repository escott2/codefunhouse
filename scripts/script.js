const keyE = document.getElementById("key-e");
const keyM = document.getElementById("key-m");
const keyI = document.getElementById("key-i");
const keyL = document.getElementById("key-l");
const keyY = document.getElementById("key-y");

const textBox = document.querySelector(".text-box");
let innerText = "";

window.addEventListener("load", () => {
  setTimeout(() => {
    keyE.style.fill = "#B5C8AE";
    textBox.textContent = innerText += "E";
  }, 1000);
  setTimeout(() => {
    keyM.style.fill = "#B5C8AE";
    textBox.textContent = innerText += "M";
  }, 1500);
  setTimeout(() => {
    keyI.style.fill = "#B5C8AE";
    textBox.textContent = innerText += "I";
  }, 2000);
  setTimeout(() => {
    keyL.style.fill = "#B5C8AE";
    textBox.textContent = innerText += "L";
  }, 2500);
  setTimeout(() => {
    keyY.style.fill = "#B5C8AE";
    textBox.textContent = innerText += "Y";
  }, 3000);
})