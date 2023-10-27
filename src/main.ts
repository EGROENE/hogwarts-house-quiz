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

// Call this on start button on init page & on next btn of each question
// Maybe divide this into toNextQuestion & toResults functions or something to make it more concise, like making separate func to populate innerHTML
const proceed = (): void => {
  currentIndex++;
  setRandBG();

  // Upon starting quiz:
  if (currentIndex === 0) {
    app!.removeChild(greeting);
    //app!.appendChild(questionArea);
    questionArea!.style.display = "flex";
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
      <button class="option-btn slytherin-option">
      ${allQuestions[currentIndex].slytherinOption}
      </button>
      <button class="option-btn gryffindor-option">
      ${allQuestions[currentIndex].gryffindorOption}
      </button>
      <button class="option-btn ravenclaw-option">
      ${allQuestions[currentIndex].ravenclawOption}
      </button>
      <button class="option-btn hufflepuff-option">
      ${allQuestions[currentIndex].hufflepuffOption}
      </button>
      </div>
      </div>
    `;
  }

  // Upon moving from one question to another:
  if (currentIndex > 0 && currentIndex < allQuestions.length - 1) {
    // clear inner HTML of questionArea, then add info for currentIndex of allQuestions to it
    questionArea!.innerHTML = "";
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
      ${allQuestions[currentIndex].slytherinOption}
      ${allQuestions[currentIndex].gryffindorOption}
      ${allQuestions[currentIndex].hufflepuffOption}
      ${allQuestions[currentIndex].ravenclawOption}
      </div>
      </div>
    `;
  }

  // Upon answering last question:
  if (currentIndex === allQuestions.length - 1) {
    app!.removeChild(questionArea!);
    app!.appendChild(resultsArea!);
  }
};

startBtn.addEventListener("click", proceed);
