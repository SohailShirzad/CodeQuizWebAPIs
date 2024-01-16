
//Variables
var timer = document.querySelector("#time");
var wrapper = document.querySelector(".wrapper");
var startScreen = document.querySelector("#start-screen");
var startButton = document.querySelector("#start");
var questionSection = document.querySelector("#questions");
var questionTitle = document.querySelector("#question-title");
var questionChoices = document.querySelector("#choices");
var endScreen = document.querySelector("#end-screen");
var submit = document.querySelector("#submit");
var feedback = document.querySelector("#feedback");


//Other variables from question js
var questionNumber = 0; 
var choices = questions[questionNumber].choices;
 secondsLeft = 60;
var totalScore;
var quesctionCount = 1;

var sourceQuestions = questions;

function startGame() {
  startButton.style.display = "none";
  startScreen.style.display = "none";
  questionSection.style.display = "block";
  questionNumber = 0;
  timerCountDown();

  questionTitle.textContent = sourceQuestions[questionNumber].title;
  
  questionchoicesbutton();
}

startButton.addEventListener("click", startGame);







function questionchoicesbutton() {
  for (var i = 0;  i < choices.length; i++) {

    var choiceButton = document.createElement("button");
    choiceButton.setAttribute("class", "choiceButton")
    choiceButton.setAttribute("style", "color: white; background-color: black;")
    choiceButton.setAttribute("id", "choice-" + i);
    choiceButton.textContent = sourceQuestions[questionNumber].choices[i];
    questionChoices.appendChild(choiceButton);
    
  }
 
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



function correctAnswer(){
  var correctMessageDiv = document.createElement("div");
  correctMessageDiv.setAttribute("style", "border-top: 1px solid red; font-weight: bolder;");
  correctMessageDiv.textContent = "Correct Answer!";
  questionChoices.appendChild(correctMessageDiv);

}

function incorrectAnswer(){
  var incorrectMessageDiv = document.createElement("div");
  incorrectMessageDiv.setAttribute("style", "border-top: 1px solid red; font-weight: bolder; color: red;");
  incorrectMessageDiv.textContent = "Incorrect Answer!";
  questionChoices.appendChild(incorrectMessageDiv);

}

var buttonsEvent = document.querySelectorAll(".choiceButton");

buttonsEvent.forEach(function(click){
  click.addEventListener("click",checkAnswers);
});

// event listeners to check if the answer is correct or not

function checkAnswers(event){
  event.preventDefault();
  if(sourceQuestions[questionNumber].answer == event.target.value){
    correctAnswer();
    totalScore - totalScore + 1;
  }else{
    secondsLeft = secondsLeft - 10;
    incorrectAnswer();
  }

  if(questionNumber < sourceQuestions.length - 1){
    showQuestions(questionNumber +1);

  }else{
    gameOver();
  }

  quesctionCount++;
}
