function checkAnswers() {
  var rightAnswer = document.getElementsByClassName("right");
  var wrongAnswer = document.getElementsByClassName("wrong");

  for (let index = 0; index < checkButton.length; index++) {
    rightAnswer[index].className += " checked-right";
    wrongAnswer[index].className += " checked-wrong";
    //     rightAnswer.classList.add("checked-right");
    //     wrongAnswer.classList.add("checked-wrong");
  }
}

// let checkZone = document.getElementsByTagName("form");
let checkButton = document.getElementsByTagName("input");
for (let i = 0; i < checkButton.length; i++) {
  checkButton[i].addEventListener("click", checkAnswers);
}
