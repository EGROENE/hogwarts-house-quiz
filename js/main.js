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
    { question: 'Which word below describes you best?', slytherinOption: 'cunning', gryffindorOption: 'brave', ravenclawOption: 'clever', hufflepuffOption: 'friendly', weight: 3},
    { question: 'What\'s your favorite animal?', slytherinOption: 'snake', gryffindorOption: 'lion', ravenclawOption: 'raven', hufflepuffOption: 'badger', weight: 2}
]

// Initialize variable to tally questions displayed:
let questionIndex = 0;

const toNext = () => {
    if (questionIndex === 0) {
        greeting.style.display = 'none';
    } else {
        questionArea.removeChild(questionArea.firstChild);
    }
    for (let i = questionIndex; i < (questionIndex + 1); i++) {
        if (allQuestions[i]) {
        questionArea.innerHTML += 
            "<div class='question'>"
            + "<header>" + allQuestions[i].question + "</header>"
            + "<div id='options-area'>"
            + "<button class='option-btn slytherin-option'>" + allQuestions[i].slytherinOption + "</button>"
            + "<button class='option-btn gryffindor-option'>" + allQuestions[i].gryffindorOption + "</button>"
            + "<button class='option-btn ravenclaw-option'>" + allQuestions[i].ravenclawOption + "</button>"
            + "<button class='option-btn hufflepuff-option'>" + allQuestions[i].hufflepuffOption + "</button>"
            + "</div>"
            + "</div>"

        const houses = ['slytherin', 'gryffindor', 'ravenclaw', 'hufflepuff'];
        for (let house of houses) {
            const houseOption = document.querySelector(`.option-btn.${house}-option`);
            houseOption.addEventListener('click', function() {
                if (house === 'slytherin') {
                    slytherinTotal += allQuestions[i].weight;
                    console.log('SLYTHERIN TOTAL: ' + slytherinTotal);
                } else if (house === 'gryffindor') {
                    gryffindorTotal += allQuestions[i].weight;
                    console.log('GRYFFINDOR TOTAL: ' + gryffindorTotal);
                } else if (house === 'ravenclaw') {
                    ravenclawTotal+= allQuestions[i].weight;
                    console.log('RAVENCLAW TOTAL: ' + ravenclawTotal);
                } else {
                    hufflepuffTotal += allQuestions[i].weight;
                    console.log('HUFFLEPUFF TOTAL: ' + hufflepuffTotal);
                }
            })
        }
        totalsArray = [slytherinTotal, gryffindorTotal, ravenclawTotal, hufflepuffTotal];
        console.log(totalsArray);
        } else {
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
            resultsArea.innerHTML += 
            "<header>After much deliberation, the sorting hat has placed you in...</header>"
            + "<header>" + userHouse.toUpperCase() + "</header>"
        }
    }

    // Now that option-btns exist, put them into an array:
    const optionBtns = document.querySelectorAll('.option-btn');

    // Now, add an EL to each option btn that displays the next question upon click:
    for (let btn of optionBtns) {
        btn.addEventListener('click', function() {toNext()});
    }
    questionIndex += 1;
    console.log(questionIndex);
}

// Add EL to #start-btn to move to first question:
startBtn.addEventListener('click', function() {toNext()});