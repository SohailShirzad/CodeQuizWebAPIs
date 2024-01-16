
//Variables
var timer = document.querySelector("#time");
var wrapper = document.querySelector(".wrapper");
var startScreen = document.querySelector("#start-screen");
var startButton = document.querySelector("#start");
var showQuestions = document.querySelector("#questions");
var questionTitle = document.querySelector("#question-title");
var questionChoices = document.querySelector("#choices");
var endScreen = document.querySelector("#end-screen");
var submit = document.querySelector("#submit");
var feedback = document.querySelector("#feedback")



var questionNumber = 0; 
 secondsLeft = 60;
var totalScore = 0; 
var quesctionCount = 1;

var sourceQuestions = questions;

function startGame() {


    
}


function timerCountDown(){

    var timerInterval = setInterval(function() {
       secondsLeft--;
       timer.textContent = secondsLeft + " s";
    
       if(secondsLeft <= 0)
       {
         clearInterval(timerInterval);
         timer.textContent = "You run of time";

         gameOver();
       }else if (quesctionCount >= questions.length +1){
        clearInterval(timerInterval);
        gameOver();
       }
    }
, 1000);
}
timerCountDown();