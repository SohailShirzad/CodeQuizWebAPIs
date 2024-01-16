
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

var sourceQuestions = questions;

function startGame() {
  startButton.style.display = "none";
  startScreen.style.display = "none";
  questionSection.style.display = "block";
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
    // choiceButton.addEventListener("click", checkAnswers);
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
         timer.textContent = "You run out of time";

         gameOver();
       }else if (questionNumber >= questions.length +1){
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


// event listeners to check if the answer is correct or not


document.addEventListener("click", function(event){
  if(event.target.matches('.choiceButton')){
    event.stopPropagation();
    event.preventDefault();
    console.log(event.target.textContent);

    if(event.target.textContent === sourceQuestions[questionNumber].answer){
      correctAnswer();
      totalScore = totalScore + 1;
      secondsLeft = secondsLeft + 10;
      moveNext();
    }
    else{
      secondsLeft = secondsLeft - 10;
      incorrectAnswer();
      moveNext();
    }

   
    questionNumber = questionNumber + 1;
  }
});

function moveNext(){
  if(questionNumber < sourceQuestions.length - 1){
    questionTitle.textContent = questions[questionNumber].title;
    questionChoices.innerHTML =  " ";
    questionchoicesbutton();

  }else{
    questionChoices = " ";
    gameOver();
  }
}

function gameOver(){
  console.log("Bye");
}

// function checkAnswers(event){
//   event.preventDefault();
//   console.log(event.target.value);
//   if(sourceQuestions[questionNumber].answer == event.target.value){
//     correctAnswer();
//     totalScore - totalScore + 1;
//   }else{
//     secondsLeft = secondsLeft - 10;
//     incorrectAnswer();
//   }

//   if(questionNumber < sourceQuestions.length - 1){
//     questionNumber = questionNumber + 1;

//   }else{
//     gameOver();
//   }

//   questionNumber++;
// }
