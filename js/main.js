const bgImages = [
    'https://images.unsplash.com/photo-1598153346810-860daa814c4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGFycnklMjBwb3R0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1547756536-cde3673fa2e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGFycnklMjBwb3R0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60', 'https://images.unsplash.com/photo-1583997052301-0042b33fc598?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aGFycnklMjBwb3R0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1548630826-2ec01a41f48f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aGFycnklMjBwb3R0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1618944847828-82e943c3bdb7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aGFycnklMjBwb3R0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1618944913480-b67ee16d7b77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aGFycnklMjBwb3R0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1571936804022-90d128047136?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGhhcnJ5JTIwcG90dGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1533462506003-13c20d204b58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGhvZ3dhcnRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1626914535205-8e4e3bf36793?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjN8fGhvZ3dhcnRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1619622338668-484d0f2e1c3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njd8fGhvZ3dhcnRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1539103377911-4909a1eae382?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGhhcnJ5JTIwcG90dGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1610466024868-910c6e7e8929?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGhhcnJ5JTIwcG90dGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1632266484284-a11d9e3a460a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGhhcnJ5JTIwcG90dGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1575887339850-1acc9d8daf3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGhhcnJ5JTIwcG90dGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1618945034861-7e61e0326e74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njl8fGhhcnJ5JTIwcG90dGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1498676077434-7540603d2dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODh8fGhhcnJ5JTIwcG90dGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
]

// Function to set random img from bgImages as new bg when moving to next question:
const setRandBG = () => {
    let randNum = Math.floor(Math.random() * bgImages.length);
    document.body.style.background = 'url(' + bgImages[randNum] + ')';
    document.body.style.backgroundSize = 'cover';
}
setRandBG();

const houses = ['slytherin', 'gryffindor', 'ravenclaw', 'hufflepuff'];
const houseInfo = [
    {houseName: 'slytherin', houseCrest: './assets/crest-slytherin.png'},
    {houseName: 'gryffindor', houseCrest: './assets/crest-gryffindor.png'},
    {houseName: 'ravenclaw', houseCrest: './assets/crest-ravenclaw.png'},
    {houseName: 'hufflepuff', houseCrest: './assets/crest-hufflepuff.png'}
]

const greeting = document.getElementById('greeting');
const questionArea = document.getElementById('question-area');
const resultsArea = document.getElementById('results-area');
const startBtn = document.getElementById('start-btn');

// Initialize point tallies for each house:
let slytherinTotal = 0;
let gryffindorTotal = 0;
let ravenclawTotal = 0;
let hufflepuffTotal = 0;

const allQuestions = [
    { question: 'Which word below describes you best?', slytherinOption: 'cunning', gryffindorOption: 'brave', ravenclawOption: 'clever', hufflepuffOption: 'friendly', weight: 3},
    { question: 'What\'s your favorite animal?', slytherinOption: 'snake', gryffindorOption: 'lion', ravenclawOption: 'raven', hufflepuffOption: 'badger', weight: 2},
    { question: 'What\s your favorite color?', slytherinOption: 'green', gryffindorOption: 'scarlet', ravenclawOption: 'blue', hufflepuffOption: 'yellow', weight: 1},
    { question: 'What do you find the most interesting?', slytherinOption: 'hexes', gryffindorOption: 'broom flying', ravenclawOption: 'transfiguration', hufflepuffOption: 'care of magical creatures', weight: 2},
    { question: 'Which famous Hogwarts alumnus/alumna would you like to meet?', slytherinOption: 'Tom Riddle', gryffindorOption: 'Albus Dumbledore', ravenclawOption: 'Garrick Olivander', hufflepuffOption: 'Cedric Diggory', weight: 1},
    { question: 'What\'s your favorite movie genre?', slytherinOption: 'crime', gryffindorOption: 'action', ravenclawOption: 'documentary', hufflepuffOption: 'comedy', weight: 2},
    { question: 'What do you see yourself in the Mirror of Erised?', slytherinOption: 'with riches', gryffindorOption: 'on an adventure', ravenclawOption: 'with a book', hufflepuffOption: 'with friends & family', weight: 3},
    { question: 'Of these four, which muggle profession would you choose?', slytherinOption: 'salesperson', gryffindorOption: 'firefighter', ravenclawOption: 'researcher', hufflepuffOption: 'caregiver', weight: 3},
    { question: 'What is at the core of your wand?', slytherinOption: 'dragon heartstring', gryffindorOption: 'phoenix feather', ravenclawOption: 'veela hair', hufflepuffOption: 'unicorn hair', weight: 2},
    { question: 'What part of Hogwarts are you most eager to explore?', slytherinOption: 'the forbidden forest', gryffindorOption: 'the room of requirement', ravenclawOption: 'the library', hufflepuffOption: 'the kitchen', weight: 2},
    { question: 'Which is your favorite Dumbledore quote?', slytherinOption: '"It matters not what someone is born, but what they grow to be."', gryffindorOption: '"It does not do to dwell on dreams and forget to live."', ravenclawOption: '"Words are, in my not-so-humble opinion, our most inexhaustible source of magic."', hufflepuffOption: '"Pity the living. And above all those who live without love."', weight: 3},
    { question: 'What type of Zodiac sign do you have?', slytherinOption: 'fire', gryffindorOption: 'earth', ravenclawOption: 'air', hufflepuffOption: 'water', weight: 1},
    { question: 'How would others describe you?', slytherinOption: 'ambitious', gryffindorOption: 'honorable', ravenclawOption: 'curious', hufflepuffOption: 'humble', weight: 2},
    { question: 'What would you rather be?', slytherinOption: 'praised', gryffindorOption: 'respected', ravenclawOption: 'admired', hufflepuffOption: 'trusted', weight: 3},
    { question: 'You encounter a troll on a bridge you want to cross; how do you deal with it?', slytherinOption: 'kill it', gryffindorOption: 'fight it fairly', ravenclawOption: 'trick it', hufflepuffOption: 'negotiate with it to let you pass', weight: 2},
    { question: 'Which leisure activity is most appealing to you?', slytherinOption: 'improving myself', gryffindorOption: 'trying something new', ravenclawOption: 'reading', hufflepuffOption: 'volunteering', weight: 2},
    { question: 'Which animal would you rather have as a pet?', slytherinOption: 'lizard', gryffindorOption: 'dog', ravenclawOption: 'cat', hufflepuffOption: 'bunny', weight: 1},
    { question: 'If you could make a potion that would guarantee you one thing, what would it be?', slytherinOption: 'fame', gryffindorOption: 'respect', ravenclawOption: 'wisdom', hufflepuffOption: 'love', weight: 1},
    { question: 'You find a bag with 10,000 galleons in it; what do you do with it?', slytherinOption: 'Keep it & tell no one', gryffindorOption: 'Go to the police with it', ravenclawOption: 'Keep it & make a strategic investment', hufflepuffOption: 'Try to find the owner', weight: 3},
    { question: 'Which house do you hope to be in?', slytherinOption: 'slytherin', gryffindorOption: 'gryffindor', ravenclawOption: 'ravenclaw', hufflepuffOption: 'hufflepuff', weight: 8}
]

// Initialize variable to tally questions displayed:
let questionIndex = 0;

// Function to hide #question-area on page load:
const hideQA = () => {
    questionArea.style.display = 'none'
}
hideQA();

// Function to style #question-area:
const styleQA = () => {
    questionArea.style.display = 'flex';
    questionArea.style.flexDirection = 'column';
    questionArea.style.textAlign = 'center';
    questionArea.style.alignItems = 'center';
    questionArea.style.margin = '8% auto 8% auto';
    questionArea.style.background = 'rgba(0, 0, 0, 0.7)';
    questionArea.style.color = 'var(--hp-gold)';
    questionArea.style.fontSize = 'var(--size-24)';
    questionArea.style.width = '75%';
    questionArea.style.letterSpacing = 'var(--size-4)';
    questionArea.style.borderRadius = '24px';
    questionArea.style.padding = 'var(--size-40)';
}

// Function to style #results-area:
const styleResultsArea = () => {
    resultsArea.style.display = 'flex';
    resultsArea.style.flexDirection = 'column';
    resultsArea.style.background = 'rgba(0, 0, 0, 0.7)';
    resultsArea.style.alignItems = 'center';
    resultsArea.style.width = '40%';
    resultsArea.style.color = 'white';
    resultsArea.style.textAlign = 'center';
    resultsArea.style.padding = 'var(--size-16)';
    resultsArea.style.borderRadius = 'var(--size-16)';
}

const toNext = () => {  
    // Set random BG:
    setRandBG();
    
    if (questionIndex === 0) {
        greeting.style.display = 'none';
        styleQA();
    } else {
        questionArea.removeChild(questionArea.firstChild);
    }
    for (let i = questionIndex; i < (questionIndex + 1); i++) {
        if (allQuestions[i]) {
            // Randomize order of answer options:
            let optionsArray = [];
            const randOptions = () => {
                optionsArray = [
                    ("<button class='option-btn slytherin-option'>" + allQuestions[i].slytherinOption + "</button>"),
                    ("<button class='option-btn gryffindor-option'>" + allQuestions[i].gryffindorOption + "</button>"),
                    ("<button class='option-btn ravenclaw-option'>" + allQuestions[i].ravenclawOption + "</button>"),
                    ("<button class='option-btn hufflepuff-option'>" + allQuestions[i].hufflepuffOption + "</button>")
                ];

                // Loop to randomly order items in optionsArray:
                for (let i = 1; i < optionsArray.length; i++) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [optionsArray[i], optionsArray[j]] = [optionsArray[j], optionsArray[i]];
                }
            }
            randOptions();

            // Display question & its options:
            questionArea.innerHTML += 
                "<div class='question'>"
                + "<header>" + allQuestions[i].question + "</header>"
                + "<div id='options-area'>"
                + optionsArray[0]
                + optionsArray[1]
                + optionsArray[2]
                + optionsArray[3]
                + "</div>"
                + "</div>"

        for (let house of houses) {
            const houseOption = document.querySelector(`.option-btn.${house}-option`);
            houseOption.addEventListener('click', function() {
                if (house === 'slytherin') {
                    slytherinTotal += allQuestions[i].weight;
                } else if (house === 'gryffindor') {
                    gryffindorTotal += allQuestions[i].weight;
                } else if (house === 'ravenclaw') {
                    ravenclawTotal+= allQuestions[i].weight;
                } else {
                    hufflepuffTotal += allQuestions[i].weight;
                }
            })
        }
        totalsArray = [slytherinTotal, gryffindorTotal, ravenclawTotal, hufflepuffTotal];
        } else {
            questionArea.style.display = 'none';
            document.body.style.background = 'url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimgix.bustle.com%2Frehost%2F2016%2F9%2F13%2F6fe7362a-78fa-4484-933e-5cd0a3215d2f.jpg%3Fw%3D800%26fit%3Dcrop%26crop%3Dfaces%26auto%3Dformat%252Ccompress%26q%3D50%26dpr%3D2&f=1&nofb=1&ipt=f77da5db48dd5f226a9485ba4901b3463f2413a421a4008c3d856a5caf9fd653&ipo=images)';
            document.body.style.backgroundSize = 'cover';
            let max = Math.max(...totalsArray);
            let userHouse = '';
            switch(totalsArray.indexOf(max)) {
                case 0:
                    userHouse = 'slytherin';
                    break;
                case 1:
                    userHouse = 'gryffindor';
                    break;
                case 2:
                    userHouse = 'ravenclaw';
                    break;
                case 3:
                    userHouse = 'hufflepuff';
                    break;
            }
            const displayResult = () => {
                // Make #results-area visible, style it:
                styleResultsArea();
                
                // Add header to #results-area:
                resultsArea.innerHTML += "<header>After much deliberation, the sorting hat has placed you in...</header>"
                
                // Animate above header:
                const resultHeader = document.querySelector('#results-area header');
                resultHeader.classList.add('animate__animated');
                resultHeader.classList.add('animate__fadeInLeft');

                // Logic that displays appropriate house:
                const resultHouse = () => {
                    for (let house of houseInfo) {
                        if (userHouse === house.houseName) {
                            resultsArea.innerHTML += "<div id='results-info-container'>"
                            +"<div id='house-logo-container'>"
                            + "<img src='" + house.houseCrest + "'>"
                            + "</div>"
                            + "<p>" + house.houseName + "</p>"
                            + "</div>"
                        }
                    }
                }
                resultHouse();
                
                // Animate house info:
                const resultingHouse = document.getElementById('results-info-container');
                resultingHouse.classList.add('animate__animated');
                resultingHouse.classList.add('animate__jackInTheBox')
            }
            displayResult();
        }
    }

    // Now that option-btns exist, put them into an array:
    const optionBtns = document.querySelectorAll('.option-btn');

    // Now, add an EL to each option btn that displays the next question upon click:
    for (let btn of optionBtns) {
        btn.addEventListener('click', function() {toNext()});
    }
    questionIndex += 1;
}

// Add EL to #start-btn to move to first question:
startBtn.addEventListener('click', function() {toNext()});