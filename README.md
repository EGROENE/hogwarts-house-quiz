# hogwarts-house-quiz
As the name suggests, this web app, which I built using HTML, CSS, & vanilla JavaScript, gives users the chance to see which Hogwarts house they would likely be sorted into. Here's how it works:

* A random image displays as the page background. I stored several image URLs from Unsplash in an array & looped through it, selecting a random one when the page loads & when a new question displays. I set a particular background on the results page.
* Upon loading of the page, the user is greeted & prompted to click a button to start the quiz. 
* Upon starting the quiz, the greeting is hidden & the first question displays. For each question, I display the question tally out of total questions, which I store as objects inside of an array, so it displays as: index of the question / length of questions array. 
* Then, the question itself, which is a property of the given question's object inside the array containing all the questions, displays under the tally. 
* Then, potential answers, each of which correspond to one of the four houses, display in random order. Inside each question's object, I also added a 'weight' property, which indicates the importance of the question in determining the user's House. When the user selects an option, this 'weight' property is added to the point total for the corresponding House. These point totals are stored in an array. 
* Upon moving to the next question (which happens immediately when the user selects a question option, the previous question is removed from the DOM & the next one displays.
* At the end of the quiz, the House with the highest point total (max value in array) is selected. I also added a couple of cool animations when the result displays.

If you are curious to try it out for yourself, go here: https://whats-my-hogwarts-house.netlify.app/
