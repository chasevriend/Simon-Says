//data structures
const buttonColors = [
    "red",
    "yellow",
    "green",
    "blue"
];

const gamePattern = [];

//function to determine the next sequence
function nextSequence() {
    const randomChosenColor = buttonColors[Math.floor(Math.random()*buttonColors.length)];
    gamePattern.push(randomChosenColor);
    console.log(gamePattern);
}

//call the function to action
nextSequence();