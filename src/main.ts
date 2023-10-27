import "./style.css";
import { bgImages, housesInfo, allQuestions } from "./constants";

/* document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
<div id="greeting">
<h1>Ever wonder which Hogwarts House you belong in?</h1>
<h2>Take the quiz to find out!</h2>
<button id="start-btn">Start Quiz!</button>
</div>
<div id="question-area"></div>
<div id="results-area"></div>
`; */

/* Functionality to change bg image (applied to body, maybe. if you don't want to break that unwritten rule, apply to #app) */
const setRandBG = (): void => {
  let randNum = Math.floor(Math.random() * bgImages.length);
  document.body.style.backgroundImage = "url(" + bgImages[randNum] + ")";
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundAttachment = "fixed";
};
setRandBG();

// "next" functionality:
// DOM = "app" element
// Remove from DOM the greeting when going to first question
// Add to DOM the question area when going to first question
// Remove from DOM the question area when going to results:
let currentIndex: number = -1;

// DOM Elements:
const app = document.querySelector<HTMLElement>("#app");
const greeting: HTMLElement = document.querySelector<HTMLElement>("#greeting")!;
const startBtn: HTMLElement = document.querySelector("#start-btn")!;

// If using commented-out declarations below, comment out #question-area & #results-area in index.html
// Will see errors, but maybe try to work through them. The point of creating these elems here is to add them as needed to the DOM.
/* const questionArea: HTMLElement = document
  .createElement("div")
  .setAttribute("id", "question-area")!; */

/* const resultsArea: HTMLElement = document
  .createElement("div")
  .setAttribute("id", "results-area")!; */

const questionArea = document.querySelector<HTMLElement>("#question-area");

const resultsArea = document.querySelector<HTMLElement>("#results-area");

// Call on array of html elems corresponding to answer options
/* const shuffleArray = (array) => {
  for (let i = 1; i < array.length; i++) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}; */

// Function to calculate points upon user answering question:
const houseTotals: number[] = housesInfo.map((house) => house.count);
const allocatePoints = (house: string, weight: number): void => {
  if (house === "slytherin") {
    houseTotals[0] += weight;
  }
  if (house === "gryffindor") {
    houseTotals[1] += weight;
  }
  if (house === "ravenclaw") {
    houseTotals[2] += weight;
  }
  if (house === "hufflepuff") {
    houseTotals[3] += weight;
  }
  console.log(houseTotals);
};

// Call this on start button on init page & on next btn of each question
// Maybe divide this into toNextQuestion & toResults functions or something to make it more concise, like making separate func to populate innerHTML
const proceed = (): void => {
  currentIndex++;

  setRandBG();

  if (currentIndex === 0) {
    app!.removeChild(greeting);
    questionArea!.style.display = "flex";
  }

  if (allQuestions[currentIndex]) {
    // Create button for every answer option of current question:
    let answerOptions: string = "";
    for (const option of Object.entries(allQuestions[currentIndex].answers)) {
      answerOptions += `<button class="option-btn" id="${option[0]}">${option[1]}</button>`;
    }

    /* if (currentIndex === 0) {
      app!.removeChild(greeting);
      //app!.appendChild(questionArea);
      questionArea!.style.display = "flex";
    } */

    if (currentIndex > 0 && currentIndex !== allQuestions.length) {
      questionArea!.innerHTML = "";
    }
    // populate questionArea w/ info from first question:
    questionArea!.innerHTML += `
        <div class="question">
        <header>${allQuestions.indexOf(allQuestions[currentIndex]) + 1} / ${
      allQuestions.length
    }
        </header>
        <header>
        ${allQuestions[currentIndex].question}
        </header>
        <div id="options-area">
        ${answerOptions}
        </div>
        </div>
      `;

    const answerButtons = document.querySelectorAll(".option-btn");
    for (const button of answerButtons) {
      button.addEventListener("click", () => {
        allocatePoints(button.id, allQuestions[currentIndex].weight);
        proceed();
      });
    }
  }

  // Upon answering last question:
  if (currentIndex === allQuestions.length) {
    const selectedHouse = (): string => {
      const highestScore = Math.max(...houseTotals);
      if (houseTotals.indexOf(highestScore) === 0) {
        return "Slytherin";
      }
      if (houseTotals.indexOf(highestScore) === 1) {
        return "Gryffindor";
      }
      if (houseTotals.indexOf(highestScore) === 2) {
        return "Ravenclaw";
      }
      return "Hufflepuff";
    };
    // Call function to handle points after answer:

    app!.removeChild(questionArea!);
    resultsArea!.innerHTML += `
      <header>After much deliberation, the sorting hat has decided to place you in...</header>
      ${selectedHouse()}
    `;
  }
};

startBtn.addEventListener("click", proceed);
