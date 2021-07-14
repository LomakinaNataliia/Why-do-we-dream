function click() {
  clearAll();
  showQuestion();
}

function clearAll() {
  for (let index = 0; index < rightAnswer.length; index++) {
    rightAnswer[index].classList.remove("checked-right");
    // rightAnswer[index].className -= " checked-right";
  }

  for (let index = 0; index < wrongAnswer.length; index++) {
    // wrongAnswer[index].className -= " checked-wrong";
    wrongAnswer[index].classList.remove("checked-wrong");
  }
}

function showQuestion() {
  if (document.getElementById("question1").style.display == "block") {
    document.getElementById("question1").style.display = "none";
    document.getElementById("question2").style.display = "block";
  } else if (document.getElementById("question2").style.display == "block") {
    document.getElementById("question2").style.display = "none";
    document.getElementById("question3").style.display = "block";
  } else if (document.getElementById("question3").style.display == "block") {
    document.getElementById("question3").style.display = "none";
    document.getElementById("question4").style.display = "block";
  } else {
    document.getElementById("question4").style.display = "none";
    document.getElementById("question5").style.display = "block";
  }
}

function checkAnswers() {
  // let checkZone = document.getElementsByTagName("input").parent;
  // // console.log(checkZone);

  for (let index = 0; index < rightAnswer.length; index++) {
    rightAnswer[index].classList.add("checked-right");
    // rightAnswer[index].className += " checked-right";
  }

  for (let index = 0; index < wrongAnswer.length; index++) {
    // wrongAnswer[index].className += " checked-wrong";
    wrongAnswer[index].classList.add("checked-wrong");
  }

  //showExplanation();
}

//function showExplanation(){

//}

var rightAnswer = document.getElementsByClassName("right");
var wrongAnswer = document.getElementsByClassName("wrong");
let checkButton = document.getElementsByTagName("input");
// let checkZone = document.getElementsByTagName("form");
for (let i = 0; i < checkButton.length; i++) {
  checkButton[i].addEventListener("click", checkAnswers);
}

let nextQuestion = document.querySelector("#next");
nextQuestion.addEventListener("click", click);
