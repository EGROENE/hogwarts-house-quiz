import { bgImages as e, housesInfo as n, allQuestions as t } from "./constants.js";
var btn,
  _a,
  setRandBG = function () {
    var n = Math.floor(Math.random() * e.length);
    document.body.style.backgroundImage = "url(" + e[n] + ")";
  };
setRandBG();
for (
  var shuffleArray = function (e) {
      for (var n, t = 1; t < e.length; t++) {
        var r = Math.floor(Math.random() * (t + 1));
        (n = [e[r], e[t]]), (e[t] = n[0]), (e[r] = n[1]);
      }
      return e;
    },
    currentIndex = -1,
    app = document.querySelector("#app"),
    greeting = document.querySelector("#greeting"),
    questionArea = document.querySelector("#question-area"),
    resultsArea = document.querySelector("#results-area"),
    housesAndTheirTotals =
      (((_a = {})["".concat(n[0].houseName.toLowerCase())] = 0),
      (_a["".concat(n[1].houseName.toLowerCase())] = 0),
      (_a["".concat(n[2].houseName.toLowerCase())] = 0),
      (_a["".concat(n[3].houseName.toLowerCase())] = 0),
      _a),
    allocatePoints = function (e, n) {
      housesAndTheirTotals["".concat(e)] += n;
    },
    quizLength = 30,
    handleLengthSelection = function (e) {
      "short" === e && (quizLength = 15);
    },
    proceed = function () {
      if ((currentIndex++, setRandBG(), questionsArray[currentIndex])) {
        0 === currentIndex &&
          (app.removeChild(greeting), (questionArea.style.display = "flex"));
        for (
          var e = "",
            t = shuffleArray(Object.entries(questionsArray[currentIndex].answers)),
            r = 0,
            o = t;
          r < o.length;
          r++
        ) {
          var a = o[r];
          e += '<button class="option-btn" id="'
            .concat(a[0], '">')
            .concat(a[1], "</button>");
        }
        currentIndex > 0 &&
          currentIndex !== questionsArray.length &&
          (questionArea.innerHTML = ""),
          (questionArea.innerHTML += '\n        <div class="question">\n        <header>'
            .concat(questionsArray.indexOf(questionsArray[currentIndex]) + 1, " / ")
            .concat(
              questionsArray.length,
              "\n        </header>\n        <header>\n        "
            )
            .concat(
              questionsArray[currentIndex].question,
              '\n        </header>\n        <div id="options-area">\n        '
            )
            .concat(e, "\n        </div>\n        </div>\n      "));
        for (
          var s = document.querySelectorAll(".option-btn"),
            i = function (e) {
              e.addEventListener("click", function () {
                allocatePoints(e.id, questionsArray[currentIndex].weight), proceed();
              });
            },
            c = 0,
            u = s;
          c < u.length;
          c++
        )
          i(u[c]);
      }
      if (currentIndex === questionsArray.length) {
        var d = function () {
          var e = Object.values(housesAndTheirTotals).map(function (e) {
              return e;
            }),
            t = Math.max.apply(Math, e);
          return n[e.indexOf(t)];
        };
        app.removeChild(questionArea),
          (document.body.style.backgroundImage =
            "url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimgix.bustle.com%2Frehost%2F2016%2F9%2F13%2F6fe7362a-78fa-4484-933e-5cd0a3215d2f.jpg%3Fw%3D800%26fit%3Dcrop%26crop%3Dfaces%26auto%3Dformat%252Ccompress%26q%3D50%26dpr%3D2&f=1&nofb=1&ipt=f77da5db48dd5f226a9485ba4901b3463f2413a421a4008c3d856a5caf9fd653&ipo=images)"),
          window.innerWidth <= 1024 &&
            window.innerWidth > 900 &&
            (document.body.style.backgroundPositionX = "-33rem"),
          window.innerWidth <= 900 &&
            window.innerWidth > 615 &&
            (document.body.style.backgroundPositionX = "-54rem"),
          window.innerWidth <= 615 &&
            (document.body.style.backgroundPositionX = "-27rem"),
          (resultsArea.style.display = "flex"),
          (resultsArea.innerHTML +=
            '\n      <header>After much deliberation, the sorting hat has decided to place you in...</header>\n      <div id="results-info-container">\n        <img src="'
              .concat(d().houseCrest, '">\n        <p>')
              .concat(
                d().houseName,
                '</p>\n        </div>\n        <button id="retake-quiz-btn" onclick="window.location.reload()">Retake Quiz!</button>\n      '
              ));
        var l = document.querySelector("#results-area header");
        l.classList.add("animate__animated"), l.classList.add("animate__fadeInLeft");
        var h = document.getElementById("results-info-container");
        h.classList.add("animate__animated"), h.classList.add("animate__jackInTheBox");
        var f = document.getElementById("retake-quiz-btn");
        setTimeout(function () {
          (f.style.display = "block"),
            f.classList.add("animate__animated"),
            f.classList.add("animate__jackInTheBox");
        }, 3e3),
          setTimeout(function () {
            f.classList.remove("animate__animated"),
              f.classList.remove("animate__jackInTheBox");
          }, 7e3);
      }
    },
    questionsArray = [],
    questionOnHousePreference = t.filter(function (e) {
      return "Which house do you hope to be in?" === e.question;
    })[0],
    questionsNotOnHousePreference = shuffleArray(
      t.filter(function (e) {
        return questionOnHousePreference !== e;
      })
    ),
    getQuestionArray = function () {
      for (var e = 0; e < quizLength - 1; e++)
        questionsArray.push(questionsNotOnHousePreference[e]);
      questionsArray.push(questionOnHousePreference);
    },
    lengthSelectorBtns = document.querySelectorAll(".length-selector-btn"),
    _loop_1 = function (e) {
      e.addEventListener("click", function () {
        handleLengthSelection(e.id), getQuestionArray(), proceed();
      });
    },
    _i = 0,
    lengthSelectorBtns_1 = lengthSelectorBtns;
  _i < lengthSelectorBtns_1.length;
  _i++
)
  _loop_1(lengthSelectorBtns_1[_i]);
