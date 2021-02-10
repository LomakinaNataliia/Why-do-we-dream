function checkAnswers() {
  var rightAnswer = document.getElementsByClassName("right");
  var wrongAnswer = document.getElementsByClassName("wrong");

  for (let index = 0; index < rightAnswer.length; index++) {
    rightAnswer[index].className += " checked-right";
  }

  for (let index = 0; index < wrongAnswer.length; index++) {
    wrongAnswer[index].className += " checked-wrong";
  }
}
let checkButton = document.querySelector("#check");
checkButton.addEventListener("click", checkAnswers);
