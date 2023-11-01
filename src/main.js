"use strict";
var _a;
import { bgImages, housesInfo, allQuestions } from "./constants";
// Functionality to change bg image:
var setRandBG = function () {
  var randNum = Math.floor(Math.random() * bgImages.length);
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
var shuffleArray = function (array) {
  var _a;
  for (var i = 1; i < array.length; i++) {
    var j = Math.floor(Math.random() * (i + 1));
    (_a = [array[j], array[i]]), (array[i] = _a[0]), (array[j] = _a[1]);
  }
  return array;
};
// Define initial value of index:
var currentIndex = -1;
// DOM Elements:
var app = document.querySelector("#app");
var greeting = document.querySelector("#greeting");
var questionArea = document.querySelector("#question-area");
var resultsArea = document.querySelector("#results-area");
// FUNTIONALITY TO CALCULATE PONITS UPON USER ANSWERING QUESTION:
var housesAndTheirTotals =
  ((_a = {}),
  (_a["".concat(housesInfo[0].houseName.toLowerCase())] = 0),
  (_a["".concat(housesInfo[1].houseName.toLowerCase())] = 0),
  (_a["".concat(housesInfo[2].houseName.toLowerCase())] = 0),
  (_a["".concat(housesInfo[3].houseName.toLowerCase())] = 0),
  _a);
// Function to increment a certain house total by the weight of a given question:
var allocatePoints = function (house, weight) {
  housesAndTheirTotals["".concat(house)] += weight;
};
//////////////////////////////////////////////////////////////////
// HANDLE USER'S SELECTION FOR LENGTH OF QUIZ:
// Initialize quizLength variable:
var quizLength = 30;
// If user selects short version, change quizLength accordingly:
var handleLengthSelection = function (version) {
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
var proceed = function () {
  currentIndex++;
  setRandBG();
  // If current question exists:
  if (questionsArray[currentIndex]) {
    // Upon moving to first question, remove greeting from DOM, display question area:
    if (currentIndex === 0) {
      app.removeChild(greeting);
      questionArea.style.display = "flex";
    }
    // Create button for every answer option of current question:
    // These must be added to innerHTML as a string
    var answerOptions = "";
    var randomizedOptions = shuffleArray(
      Object.entries(questionsArray[currentIndex].answers)
    );
    for (
      var _i = 0, randomizedOptions_1 = randomizedOptions;
      _i < randomizedOptions_1.length;
      _i++
    ) {
      var option = randomizedOptions_1[_i];
      answerOptions += '<button class="option-btn" id="'
        .concat(option[0], '">')
        .concat(option[1], "</button>");
    }
    // Clear info from previous question:
    if (currentIndex > 0 && currentIndex !== questionsArray.length) {
      questionArea.innerHTML = "";
    }
    // Populate questionArea with info from current question:
    questionArea.innerHTML +=
      '\n        <div class="question">\n        <header>'
        .concat(questionsArray.indexOf(questionsArray[currentIndex]) + 1, " / ")
        .concat(
          questionsArray.length,
          "\n        </header>\n        <header>\n        "
        )
        .concat(
          questionsArray[currentIndex].question,
          '\n        </header>\n        <div id="options-area">\n        '
        )
        .concat(answerOptions, "\n        </div>\n        </div>\n      ");
    // Upon click of any answer button, calculate house point totals, proceed to next question or results:
    var answerButtons = document.querySelectorAll(".option-btn");
    var _loop_2 = function (button) {
      button.addEventListener("click", function () {
        allocatePoints(button.id, questionsArray[currentIndex].weight);
        proceed();
      });
    };
    for (
      var _a = 0, answerButtons_1 = answerButtons;
      _a < answerButtons_1.length;
      _a++
    ) {
      var button = answerButtons_1[_a];
      _loop_2(button);
    }
  }
  // Upon answering last question:
  if (currentIndex === questionsArray.length) {
    // Return house object of house with highest tally, from housesInfo
    var selectedHouse = function () {
      var houseTotals = Object.values(housesAndTheirTotals).map(function (
        score
      ) {
        return score;
      });
      var highestScore = Math.max.apply(Math, houseTotals);
      return housesInfo[houseTotals.indexOf(highestScore)];
    };
    // Remove question area from DOM, as all questions have been answered:
    app.removeChild(questionArea);
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
    resultsArea.style.display = "flex";
    // Populate results area:
    resultsArea.innerHTML +=
      '\n      <header>After much deliberation, the sorting hat has decided to place you in...</header>\n      <div id="results-info-container">\n        <img src="'
        .concat(selectedHouse().houseCrest, '">\n        <p>')
        .concat(
          selectedHouse().houseName,
          '</p>\n        </div>\n        <button id="retake-quiz-btn" onclick="window.location.reload()">Retake Quiz!</button>\n      '
        );
    // Animate results header:
    var resultHeader = document.querySelector("#results-area header");
    resultHeader.classList.add("animate__animated");
    resultHeader.classList.add("animate__fadeInLeft");
    // Animate house crest:
    var resultingHouse = document.getElementById("results-info-container");
    resultingHouse.classList.add("animate__animated");
    resultingHouse.classList.add("animate__jackInTheBox");
    // Animate "retake quiz" btn:
    var retakeQuizBtn_1 = document.getElementById("retake-quiz-btn");
    setTimeout(function () {
      retakeQuizBtn_1.style.display = "block";
      retakeQuizBtn_1.classList.add("animate__animated");
      retakeQuizBtn_1.classList.add("animate__jackInTheBox");
    }, 3000);
    setTimeout(function () {
      retakeQuizBtn_1.classList.remove("animate__animated");
      retakeQuizBtn_1.classList.remove("animate__jackInTheBox");
    }, 7000);
  }
};
// FUNCTIONALITY TO GET ARRAY OF QUESTIONS USED IN GAME
// Initiate empty questionsArray:
var questionsArray = [];
// Define question to go at end of quiz (what house the user prefers to be in):
var questionOnHousePreference = allQuestions.filter(function (question) {
  return question.question === "Which house do you hope to be in?";
})[0];
// Define array of questions not including the question on user's preference:
var questionsNotOnHousePreference = shuffleArray(
  allQuestions.filter(function (question) {
    return question.question !== "Which house do you hope to be in?";
  })
);
// Populate questionArray:
var getQuestionArray = function () {
  // Depending on length that the user selects, push questions that are not about user preference to questionsArray:
  for (var i = 0; i < quizLength - 1; i++) {
    questionsArray.push(questionsNotOnHousePreference[i]);
  }
  // Append question on house preference to end of questionsArray:
  questionsArray.push(questionOnHousePreference);
};
//////////////////////////////////////////////////////////////////
// Add handleLengthSelection(), getQuestionArray(), & proceed() in EL onClick of length-selector btns:
var lengthSelectorBtns = document.querySelectorAll(".length-selector-btn");
var _loop_1 = function (btn) {
  btn.addEventListener("click", function () {
    handleLengthSelection(btn.id);
    getQuestionArray();
    proceed();
  });
};
for (
  var _i = 0, lengthSelectorBtns_1 = lengthSelectorBtns;
  _i < lengthSelectorBtns_1.length;
  _i++
) {
  var btn = lengthSelectorBtns_1[_i];
  _loop_1(btn);
}
