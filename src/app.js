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

  for (let index = 0; index < explanation.length; index++) {
    explanation[index].style.display = "none";
  }
}

function showQuestion() {
  if (document.getElementById("question1").style.display == "block") {
    document.getElementById("question1").style.display = "none";
    document.getElementById("question2").style.display = "block";
    document.getElementById("next").style.display = "none";
  } else if (document.getElementById("question2").style.display == "block") {
    document.getElementById("question2").style.display = "none";
    document.getElementById("question3").style.display = "block";
    document.getElementById("next").style.display = "none";
  } else if (document.getElementById("question3").style.display == "block") {
    document.getElementById("question3").style.display = "none";
    document.getElementById("question4").style.display = "block";
    document.getElementById("next").style.display = "none";
  } else if (document.getElementById("question4").style.display == "block") {
    document.getElementById("question4").style.display = "none";
    nextQuestion.style.display = "none";
    document.getElementById("question5").style.display = "block";
    // finishTest.style.display = "block";
  } else {
    document.getElementById("question5").style.display = "none";
    document.getElementById("next").style.display = "none";
    document.getElementById("header1").style.display = "none";
    finishTest.style.display = "none";
    document.getElementById("conclusion").style.display = "block";
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

  showExplanation();
}

function showExplanation() {
  if (document.getElementById("question1").style.display == "block") {
    document.getElementById("explanation1").style.display = "block";
    document.getElementById("next").style.display = "block";
  } else if (document.getElementById("question2").style.display == "block") {
    document.getElementById("explanation2").style.display = "block";
    document.getElementById("next").style.display = "block";
  } else if (document.getElementById("question3").style.display == "block") {
    document.getElementById("explanation3").style.display = "block";
    document.getElementById("next").style.display = "block";
  } else if (document.getElementById("question4").style.display == "block") {
    document.getElementById("explanation4").style.display = "block";
    document.getElementById("next").style.display = "block";
  } else {
    document.getElementById("explanation5").style.display = "block";
    finishTest.style.display = "block";
  }
}

var rightAnswer = document.getElementsByClassName("right");
var wrongAnswer = document.getElementsByClassName("wrong");
var explanation = document.getElementsByClassName("explanation");
let checkButton = document.getElementsByTagName("input");
// let checkZone = document.getElementsByTagName("form");
for (let i = 0; i < checkButton.length; i++) {
  checkButton[i].addEventListener("click", checkAnswers);
}

let nextQuestion = document.querySelector("#next");
nextQuestion.addEventListener("click", click);

let finishTest = document.querySelector("#finish");
finishTest.addEventListener("click", click);
