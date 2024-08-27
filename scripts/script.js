const textBox = document.querySelector(".text-box");
const animatedText = "Emily Scott";
const animatedTextArray = animatedText.split("");
let displayText = "";
let index = 0;
let intervalId;
const stopTextAction = () => {
  clearInterval(intervalId);
};

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
  }, 200);
});

// const the_animation = document.querySelectorAll(".animation");
// console.log(the_animation);

// const observer = new IntersectionObserver(
//   (entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         console.log("isIntersectiong");
//         entry.target.classList.add("scroll-animation");
//       } else {
//         entry.target.classList.remove("scroll-animation");
//       }
//     });
//   },
//   { threshold: 0.5 }
// );
// //
// for (let i = 0; i < the_animation.length; i++) {
//   const elements = the_animation[i];

//   observer.observe(elements);
// }
