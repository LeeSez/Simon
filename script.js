let divYellow, divRed, divBlue, divGreen;
let audioArray = [];

let arrayCorrectMoves = [];
let arrayPlayerMoves = [];
let pressAminationLenght = 600;

/*
    random seltion relative to colors:
    green - 0
    red - 1
    yellow - 2
    blue - 3;
*/

function initiate(){
    divGreen = document.getElementById("green");
    divRed = document.getElementById("red");
    divYellow = document.getElementById("yellow");
    divBlue = document.getElementById("blue");
    
    audioArray[0] = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3");
    audioArray[1] = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3");
    audioArray[2] = new Audio ("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3");
    audioArray[3] = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3");

}

function start(){
    let arrayCorrectMoves = [];
    let arrayPlayerMoves = [];
    
    randomColor();
}

function playAnimation(i){
    if(i == arrayCorrectMoves.length)
        return;
    switch(arrayCorrectMoves[i]){
        case 0:
            audioArray[0].play();
            
            divGreen.classList.add("greenHover");
            setTimeout(() => {
                divGreen.classList.remove("greenHover");
                return playAnimation(++i);
            }, pressAminationLenght);
            break;
        case 1:
            audioArray[1].play();
            
            divRed.classList.add("redHover");
            setTimeout(() => {
                divRed.classList.remove("redHover");
                return playAnimation(++i);
            }, pressAminationLenght);
            break;
        case 2: 
            audioArray[2].play();

            divYellow.classList.add("yellowHover");
            setTimeout(() => {
                divYellow.classList.remove("yellowHover");
                return playAnimation(++i);
            }, pressAminationLenght);
            break;
        case 3:
            audioArray[3].play();

            divBlue.classList.add("blueHover");
            setTimeout(() => {
                divBlue.classList.remove("blueHover");
                return playAnimation(++i);
            }, pressAminationLenght);
            break;
    }
}

function randomColor(){
    let randomColor = Math.floor(Math.random()*4);
    arrayCorrectMoves.push(randomColor);
    arrayPlayerMoves = [];
    playAnimation(0);
}

function selectedColor(divColor){
    colorNum = dictinary(divColor.id);
    audioArray[colorNum].play();
    if(colorNum == arrayCorrectMoves[arrayPlayerMoves.length]){
        //color selected correctly 
        arrayPlayerMoves.push(colorNum);
        if(arrayCorrectMoves.length == arrayPlayerMoves.length){
            //player selected all the right colors for the segment 
            setTimeout(() => {
                randomColor(); 
            },pressAminationLenght);
        }
    }
    else{
        //color selected incorrectly 
        arrayCorrectMoves = [];
        alert("you lost");
    }
}

function dictinary(srtColor){
    switch(srtColor){
        case "green":
            return 0;
            break;
        case "red":
            return 1;
            break;
        case "yellow":
            return 2;
            break;
        case "blue":
            return 3;
            break;
    }
} 