# hogwarts-house-quiz

NOTE: This was one of the first projects I built in JavaScript, in 2022. Though I converted it to TypeScript from vanilla JavaScript in 2023 in order to familiarize myself with TS. I have not made significant improvements to the code, so please don't judge my current abilities on the code you see here. The main thing was that I got the project to work how I had envisioned it.
 
As the name suggests, this web app, which I built using HTML, CSS, & vanilla TypeScript, gives users the chance to see which Hogwarts House they would likely be sorted into. Below, I describe how it works. For more details, please see my code and the comments within.

* A random image displays as the page background. I stored several image URLs from Unsplash in an array & looped through it, selecting a random one when the page loads & when a new question displays. I set a particular background on the results page.

* Upon loading of the page, the user is greeted & prompted to click a button to start the quiz, whether they want to play the shorter (15 questions) or the longer version (30 questions). 

* Upon starting the quiz, the greeting is hidden & the first question displays. For each question, I display the question tally out of total questions, which I store as objects inside of an array, so it displays as: index of the question / length of questions array, which is also randomized, except for the last question of the quiz, which asks the user for their house preference. When the user plays the shorter version, a random 14 questions not about their house preference are selected and added to the questions array. Whether the short or the long version is played, the question about their preference is appended to the questions array.

* The question itself, which is a property of the given question's object inside the array containing all the questions, displays under the tally. Answer options are randomly ordered.

* Inside each question's object, I also added a 'weight' property, which is a number indicating the importance of the question in determining the user's house. When the user selects an option, this 'weight' property is added to the point total for the corresponding house, which are stored in an array. 

* Upon moving to the next question (which happens immediately when the user selects a question option, the info for that question is cleared from the DOM, and, if there is a sequential question, the info for that question populates the DOM; if there is no question to follow, the questions area is removed from the DOM & the results area displays.

* At the end of the quiz, the house with the highest point total is selected & its corresponding crest & heading appears. For this, I added a couple of cool animations.

If you are curious to try it out for yourself, go here: https://whats-my-hogwarts-house.netlify.app/

I am happy to hear any feedback, whether it's on the experience of using this app, or on my code. Thanks for reading!
