import "./style.css";
import { bgImages, housesInfo, allQuestions } from "./constants";

// Functionality to change bg image:
const setRandBG = (): void => {
  let randNum = Math.floor(Math.random() * bgImages.length);
  document.body.style.backgroundImage = "url(" + bgImages[randNum] + ")";
};
// Call as page initially loads:
setRandBG();
//////////////////////////////////////////////////////////////////

/* 
  INFO ON shuffleArray():
  @param: Any kind of array 
  @returns: Shuffled version of passed-in array. Can be any type of array.
*/
const shuffleArray = (array: any[]): any[] => {
  for (let i = 1; i < array.length; i++) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

// Define initial value of index:
let currentIndex: number = -1;

// DOM Elements:
const app = document.querySelector<HTMLElement>("#app");

const greeting: HTMLElement = document.querySelector<HTMLElement>("#greeting")!;

const questionArea = document.querySelector<HTMLElement>("#question-area");

const resultsArea = document.querySelector<HTMLElement>("#results-area");

// FUNTIONALITY TO CALCULATE PONITS UPON USER ANSWERING QUESTION:
const housesAndTheirTotals: { [key: string]: number } = {
  [`${housesInfo[0].houseName.toLowerCase()}`]: 0,
  [`${housesInfo[1].houseName.toLowerCase()}`]: 0,
  [`${housesInfo[2].houseName.toLowerCase()}`]: 0,
  [`${housesInfo[3].houseName.toLowerCase()}`]: 0,
};
// Function to increment a certain house total by the weight of a given question:
const allocatePoints = (house: string, weight: number): void => {
  housesAndTheirTotals[`${house}`] += weight;
};
//////////////////////////////////////////////////////////////////

// HANDLE USER'S SELECTION FOR LENGTH OF QUIZ:
// Initialize quizLength variable:
let quizLength: number = 30;
// If user selects short version, change quizLength accordingly:
const handleLengthSelection = (version: string): void => {
  if (version === "short") {
    quizLength = 15;
  }
};
//////////////////////////////////////////////////////////////////

/* 
  INFO ON proceed():
  @duty1: Increment currentIndex by 1
  @duty2: Set a random background image.
  @duty3: Handle proceeding to first & subsequent questions, and to results page.
  @returns nothing
*/
// Call this onClick of "long" & "short" version buttons on init page & on "next" btn of each question.
// Maybe divide this into toNextQuestion & toResults functions or something to make it more concise, like making separate func to populate innerHTML
const proceed = (): void => {
  currentIndex++;

  setRandBG();

  // If current question exists:
  if (questionsArray[currentIndex]) {
    // Upon moving to first question, remove greeting from DOM, display question area:
    if (currentIndex === 0) {
      app!.removeChild(greeting);
      questionArea!.style.display = "flex";
    }

    // Create button for every answer option of current question:
    // These must be added to innerHTML as a string
    let answerOptions: string = "";
    const randomizedOptions = shuffleArray(
      Object.entries(questionsArray[currentIndex].answers)
    );
    for (const option of randomizedOptions) {
      answerOptions += `<button class="option-btn" id="${option[0]}">${option[1]}</button>`;
    }

    // Clear info from previous question:
    if (currentIndex > 0 && currentIndex !== questionsArray.length) {
      questionArea!.innerHTML = "";
    }

    // Populate questionArea with info from current question:
    questionArea!.innerHTML += `
        <div class="question">
        <header>${questionsArray.indexOf(questionsArray[currentIndex]) + 1} / ${
      questionsArray.length
    }
        </header>
        <header>
        ${questionsArray[currentIndex].question}
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
        allocatePoints(button.id, questionsArray[currentIndex].weight);
        proceed();
      });
    }
  }

  // Upon answering last question:
  if (currentIndex === questionsArray.length) {
    // Return house object of house with highest tally, from housesInfo
    const selectedHouse = (): {
      houseName: string;
      houseCrest: string;
    } => {
      const houseTotals = Object.values(housesAndTheirTotals).map((score) => score);
      const highestScore = Math.max(...houseTotals);
      return housesInfo[houseTotals.indexOf(highestScore)];
    };

    // Remove question area from DOM, as all questions have been answered:
    app!.removeChild(questionArea!);

    // Set background image to sorting hat:
    document.body.style.backgroundImage =
      "url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimgix.bustle.com%2Frehost%2F2016%2F9%2F13%2F6fe7362a-78fa-4484-933e-5cd0a3215d2f.jpg%3Fw%3D800%26fit%3Dcrop%26crop%3Dfaces%26auto%3Dformat%252Ccompress%26q%3D50%26dpr%3D2&f=1&nofb=1&ipt=f77da5db48dd5f226a9485ba4901b3463f2413a421a4008c3d856a5caf9fd653&ipo=images)";

    if (window.innerWidth <= 1024 && window.innerWidth > 900) {
      document.body.style.backgroundPositionX = "-33rem";
    }

    if (window.innerWidth <= 900 && window.innerWidth > 615) {
      document.body.style.backgroundPositionX = "-54rem";
    }

    if (window.innerWidth <= 615) {
      document.body.style.backgroundPositionX = "-27rem";
    }

    // Unhide results area:
    resultsArea!.style.display = "flex";

    // Populate results area:
    resultsArea!.innerHTML += `
      <header>After much deliberation, the sorting hat has decided to place you in...</header>
      <div id="results-info-container">
        <img src="${selectedHouse().houseCrest}">
        <p>${selectedHouse().houseName}</p>
        </div>
        <button id="retake-quiz-btn" onclick="window.location.reload()">Retake Quiz!</button>
      `;

    // Animate results header:
    const resultHeader = document.querySelector<HTMLElement>("#results-area header");
    resultHeader!.classList.add("animate__animated");
    resultHeader!.classList.add("animate__fadeInLeft");

    // Animate house crest:
    const resultingHouse = document.getElementById("results-info-container");
    resultingHouse!.classList.add("animate__animated");
    resultingHouse!.classList.add("animate__jackInTheBox");

    // Animate "retake quiz" btn:
    const retakeQuizBtn = document.getElementById("retake-quiz-btn");
    setTimeout(() => {
      retakeQuizBtn!.style.display = "block";
      retakeQuizBtn!.classList.add("animate__animated");
      retakeQuizBtn!.classList.add("animate__jackInTheBox");
    }, 3000);
    setTimeout(() => {
      retakeQuizBtn!.classList.remove("animate__animated");
      retakeQuizBtn!.classList.remove("animate__jackInTheBox");
    }, 7000);
  }
};

// FUNCTIONALITY TO GET ARRAY OF QUESTIONS USED IN GAME
// Initiate empty questionsArray:
let questionsArray: {
  question: string;
  answers: {
    slytherin: string;
    gryffindor: string;
    ravenclaw: string;
    hufflepuff: string;
  };
  weight: number;
}[] = [];

// Define question to go at end of quiz (what house the user prefers to be in):
const questionOnHousePreference: {
  question: string;
  answers: {
    slytherin: string;
    gryffindor: string;
    ravenclaw: string;
    hufflepuff: string;
  };
  weight: number;
} = allQuestions.filter(
  (question) => question.question === "Which house do you hope to be in?"
)[0];

// Define array of questions not including the question on user's preference:
let questionsNotOnHousePreference = shuffleArray(
  allQuestions.filter((question) => question !== questionOnHousePreference)
);

// Populate questionArray:
const getQuestionArray = (): void => {
  // Depending on length that the user selects, push questions that are not about user preference to questionsArray:
  for (let i = 0; i < quizLength - 1; i++) {
    questionsArray.push(questionsNotOnHousePreference[i]);
  }

  // Append question on house preference to end of questionsArray:
  questionsArray.push(questionOnHousePreference);
};
//////////////////////////////////////////////////////////////////

// Add handleLengthSelection(), getQuestionArray(), & proceed() in EL onClick of length-selector btns:
const lengthSelectorBtns = document.querySelectorAll<HTMLElement>(".length-selector-btn");
for (const btn of lengthSelectorBtns) {
  btn.addEventListener("click", () => {
    handleLengthSelection(btn.id);
    getQuestionArray();
    proceed();
  });
}
