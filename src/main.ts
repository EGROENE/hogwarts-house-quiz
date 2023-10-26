import "./style.css";
import { bgImages } from "./constants";

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
const app = document.querySelector<HTMLElement>("#app");
const setRandBG = (): void => {
  let randNum = Math.floor(Math.random() * bgImages.length);
  app!.style.background = "url(" + bgImages[randNum] + ")";
  app!.style.backgroundSize = "cover";
  app!.style.backgroundAttachment = "fixed";
};
setRandBG();
