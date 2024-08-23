const textBox = document.querySelector(".text-box");
const animatedText = "Emily Scott";
const animatedTextArray = animatedText.split("");
let displayText = "";
let index = 0;
let intervalId;
const stopTextAction = () => {
  clearInterval(intervalId);
}

window.addEventListener("load", () => {
  intervalId = setInterval(() => {
    if (index < animatedTextArray.length) {
      const character = animatedTextArray[index];
      displayText += character;
      textBox.textContent = displayText;
      let targetKey = document.getElementById(`key-${character.toLowerCase()}`);
      if (targetKey) {
        targetKey.style.fill = "#B5C8AE";
      }
      index++;
    } else {
      stopTextAction();
    }
  }, 200)
})
