import "./style.css";
import { bgImages, housesInfo, allQuestions } from "./constants";

// Functionality to change bg image
const setRandBG = (): void => {
  let randNum = Math.floor(Math.random() * bgImages.length);
  document.body.style.backgroundImage = "url(" + bgImages[randNum] + ")";
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundAttachment = "fixed";
};
setRandBG();

let currentIndex: number = -1;

// DOM Elements:
const app = document.querySelector<HTMLElement>("#app");
const greeting: HTMLElement = document.querySelector<HTMLElement>("#greeting")!;
const startBtn: HTMLElement = document.querySelector("#start-btn")!;

const questionArea = document.querySelector<HTMLElement>("#question-area");

const resultsArea = document.querySelector<HTMLElement>("#results-area");

const shuffleArray = (array: [string, string][]) => {
  for (let i = 1; i < array.length; i++) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

// Functionality to calculate points upon user answering question:
const housesAndTheirTotals: { [key: string]: number } = {
  [`${housesInfo[0].houseName.toLowerCase()}`]: 0,
  [`${housesInfo[1].houseName.toLowerCase()}`]: 0,
  [`${housesInfo[2].houseName.toLowerCase()}`]: 0,
  [`${housesInfo[3].houseName.toLowerCase()}`]: 0,
};

const allocatePoints = (house: string, weight: number): void => {
  housesAndTheirTotals[`${house}`] += weight;
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

  // If current question exists:
  if (allQuestions[currentIndex]) {
    // Create button for every answer option of current question:
    // Must be added to innerHTML as a string
    let answerOptions: string = "";
    const randomizedOptions = shuffleArray(
      Object.entries(allQuestions[currentIndex].answers)
    );
    for (const option of randomizedOptions) {
      answerOptions += `<button class="option-btn" id="${option[0]}">${option[1]}</button>`;
    }

    // Clear info from previous question:
    if (currentIndex > 0 && currentIndex !== allQuestions.length) {
      questionArea!.innerHTML = "";
    }

    // Populate questionArea with info from current question:
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

    // Upon click of any answer button, calculate house point totals, proceed to next question or results:
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
    const selectedHouse = (): {
      houseName: string;
      houseCrest: string;
    } => {
      const houseTotals = Object.values(housesAndTheirTotals).map(
        (score) => score
      );
      const highestScore = Math.max(...houseTotals);
      return housesInfo[houseTotals.indexOf(highestScore)];
    };

    // Remove question area from DOM, as all questions have been answered:
    app!.removeChild(questionArea!);

    // Set background image to sorting hat:
    document.body.style.backgroundImage =
      "url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimgix.bustle.com%2Frehost%2F2016%2F9%2F13%2F6fe7362a-78fa-4484-933e-5cd0a3215d2f.jpg%3Fw%3D800%26fit%3Dcrop%26crop%3Dfaces%26auto%3Dformat%252Ccompress%26q%3D50%26dpr%3D2&f=1&nofb=1&ipt=f77da5db48dd5f226a9485ba4901b3463f2413a421a4008c3d856a5caf9fd653&ipo=images)";

    // Unhide results area:
    resultsArea!.style.display = "flex";

    // Populate results area:
    resultsArea!.innerHTML += `
      <header>After much deliberation, the sorting hat has decided to place you in...</header>
      <div id="results-info-container">
        <div id="house-logo-container">
        <img src="${selectedHouse().houseCrest}">
        </div>
        <p>${selectedHouse().houseName}</p>
      </div>
      `;
  }
};

startBtn.addEventListener("click", proceed);
