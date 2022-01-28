import {
  getRandomIntInclusive,
  setLocaleStorage,
  openMenuPage,
  getLocaleStorage,
} from "./functions.js";

let scoreNowDiv = document.getElementById("scoreNow");
let scoreAllDiv = document.getElementById("scoreAll");
const buttonPlayExit = document.getElementById("playExit");
let formPlay = document.playform;
let inputPlay = formPlay.playAnswer;
const option1 = document.getElementById("answer1");
const option2 = document.getElementById("answer2");
const option3 = document.getElementById("answer3");
const audioWrong = document.getElementById("wrongAudio");
const audioTrue = document.getElementById("trueAudio");
const key = document.getElementById("key");
const keyArr = ["+", "-", "*"];

let myHandler = function (event) {
  if (event.key == 1) {
    option1.click();
  }
  if (event.key == 2) {
    option2.click();
  }
  if (event.key == 3) {
    option3.click();
  }
};

function playgroundMathEz(price, nick) {
  let temp = 1;
  let answer = 0;

  function generateEquation() {
    let oper = keyArr[Math.floor(Math.random() * keyArr.length)];
    key.innerHTML = oper;
    let num1, num2;
    num1 = getRandomIntInclusive(0, 11);
    num2 = getRandomIntInclusive(0, 11);

    switch (oper) {
      case "+":
        answer = num1 + num2;
        break;
      case "-":
        answer = num1 - num2;
        break;
      case "*":
        answer = num1 * num2;
      default:
        break;
    }

    let wrongAnswer1 = getRandomIntInclusive(answer - 2, answer + 2);
    let wrongAnswer2 = getRandomIntInclusive(answer - 2, answer + 2);
    while (wrongAnswer1 == answer || wrongAnswer2 == answer || wrongAnswer1 === wrongAnswer2) {
      wrongAnswer1 = getRandomIntInclusive(answer - 2, answer + 2);
      wrongAnswer2 = getRandomIntInclusive(answer - 2, answer + 2);
    }
    let allAnswers = [];
    let switchAnswers = [];

    document.getElementById("firstNum").innerHTML = num1;
    document.getElementById("secondNum").innerHTML = num2;

    allAnswers = [answer, wrongAnswer1, wrongAnswer2];
    for (let i = allAnswers.length; i--; ) {
      switchAnswers.push(allAnswers.splice(Math.floor(Math.random() * (i + 1)), 1)[0]);
    }

    option1.innerHTML = switchAnswers[0];
    option2.innerHTML = switchAnswers[1];
    option3.innerHTML = switchAnswers[2];
  }
  const lol1 = () => {
    if (temp == 0) {
      return;
    } else {
      if (option1.innerHTML == answer) {
        audioTrue.play();
        setTimeout(() => generateEquation(), 300);
        scoreNowDiv.innerHTML = Number(scoreNowDiv.innerHTML) + price;
        document.getElementById("resultScore").innerHTML = scoreNowDiv.innerHTML;
        scoreAllDiv.innerHTML = Number(scoreAllDiv.innerHTML) + price;
        setLocaleStorage(nick, Number(scoreAllDiv.innerHTML));
        document.getElementById("headerScore").innerHTML = getLocaleStorage(nick);
      } else {
        option1.style.color = "red";
        setTimeout(() => {
          option1.style.color = "white";
        }, 500);
        audioWrong.play();
      }
    }
  };
  const lol2 = () => {
    if (temp == 0) {
      return;
    } else {
      if (option2.innerHTML == answer) {
        audioTrue.play();
        setTimeout(() => generateEquation(), 300);
        scoreNowDiv.innerHTML = Number(scoreNowDiv.innerHTML) + price;
        document.getElementById("resultScore").innerHTML = scoreNowDiv.innerHTML;
        scoreAllDiv.innerHTML = Number(scoreAllDiv.innerHTML) + price;
        setLocaleStorage(nick, Number(scoreAllDiv.innerHTML));
        document.getElementById("headerScore").innerHTML = getLocaleStorage(nick);
      } else {
        option2.style.color = "red";
        setTimeout(() => {
          option2.style.color = "white";
        }, 500);
        audioWrong.play();
      }
    }
  };
  const lol3 = () => {
    if (temp == 0) {
      return;
    } else {
      if (option3.innerHTML == answer) {
        audioTrue.play();
        setTimeout(() => generateEquation(), 300);

        scoreNowDiv.innerHTML = Number(scoreNowDiv.innerHTML) + price;
        document.getElementById("resultScore").innerHTML = scoreNowDiv.innerHTML;
        scoreAllDiv.innerHTML = Number(scoreAllDiv.innerHTML) + price;
        setLocaleStorage(nick, Number(scoreAllDiv.innerHTML));
        document.getElementById("headerScore").innerHTML = getLocaleStorage(nick);
      } else {
        option3.style.color = "red";
        setTimeout(() => {
          option3.style.color = "white";
        }, 500);
        audioWrong.play();
      }
    }
  };

  buttonPlayExit.addEventListener("click", (event) => {
    document.getElementById("timer").innerHTML = 60;
    document.getElementById("resultScore").innerHTML = 0;
    document.getElementsByClassName("playground__contentMain")[0].style.display = "flex";
    document.getElementsByClassName("playground__result")[0].style.display = "none";
    openMenuPage();
    temp = 0;
    document.removeEventListener("keydown", myHandler);
  });
  generateEquation();
  option1.addEventListener("click", lol1);
  option2.addEventListener("click", lol2);
  option3.addEventListener("click", lol3);
  document.addEventListener("keydown", myHandler);
}

function playgroundMathHard(price, nick) {
  let answer = 0;
  let temp = 1;

  function generateEquation() {
    let oper = keyArr[Math.floor(Math.random() * keyArr.length)];
    key.innerHTML = oper;
    let num1, num2;
    num1 = getRandomIntInclusive(0, 15);
    num2 = getRandomIntInclusive(0, 15);

    switch (oper) {
      case "+":
        answer = num1 + num2;
        break;
      case "-":
        answer = num1 - num2;
        break;
      case "*":
        answer = num1 * num2;
      default:
        break;
    }
    document.getElementById("firstNum").innerHTML = num1;
    document.getElementById("secondNum").innerHTML = num2;
  }

  buttonPlayExit.addEventListener("click", (event) => {
    document.getElementById("timer").innerHTML = 60;
    document.getElementById("resultScore").innerHTML = 0;
    document.getElementsByClassName("playground__contentMain")[0].style.display = "flex";
    document.getElementsByClassName("playground__result")[0].style.display = "none";
    openMenuPage();
    temp = 0;
  });
  generateEquation();
  formPlay.addEventListener("submit", (event) => {
    event.preventDefault();
    if (temp == 0) {
      return;
    } else {
      if (inputPlay.value == answer) {
        audioTrue.play();
        setTimeout(() => generateEquation(), 300);
        scoreNowDiv.innerHTML = Number(scoreNowDiv.innerHTML) + price;
        document.getElementById("resultScore").innerHTML = scoreNowDiv.innerHTML;
        scoreAllDiv.innerHTML = Number(scoreAllDiv.innerHTML) + price;
        setLocaleStorage(nick, Number(scoreAllDiv.innerHTML));
        document.getElementById("headerScore").innerHTML = getLocaleStorage(nick);
        inputPlay.value = "";
      } else {
        inputPlay.value = "";
        audioWrong.play();
      }
    }
  });
}

function playgroundArifm(nick, quantity, delay) {
  document.getElementById("firstNum").innerHTML = "";
  document.getElementById("secondNum").innerHTML = "0";
  key.innerHTML = "";
  let operations = quantity;
  document.getElementById("inputAnswer").readOnly = true;
  let answer = 0;
  let temp = 1;

  async function generateEquation() {
    let oper = 0;
    let colorArr = ["red", "white", "yellow", "orange", "green", "pink", "purple"];
    let promise = new Promise((resolve, reject) => {
      oper = keyArr[Math.floor(Math.random() * keyArr.length)];
      key.innerHTML = oper;
      let number = getRandomIntInclusive(0, 5);
      document.getElementById("secondNum").innerHTML = number;
      document.getElementById("secondNum").style.color =
        colorArr[Math.floor(Math.random() * colorArr.length)];
      resolve(number);
    });
    let number = await promise;
    console.log(number + "+");
    switch (oper) {
      case "+":
        answer += number;
        break;
      case "-":
        answer -= number;
        break;
      case "*":
        answer *= number;
      default:
        break;
    }
  }
  buttonPlayExit.addEventListener("click", (event) => {
    document.getElementById("timer").innerHTML = 60;
    document.getElementById("resultScore").innerHTML = 0;
    document.getElementsByClassName("playground__contentMain")[0].style.display = "flex";
    document.getElementsByClassName("playground__result")[0].style.display = "none";
    openMenuPage();
    temp = 0;
    document.getElementById("inputAnswer").readOnly = false;
    document.getElementById("firstNum").innerHTML = "";
    document.getElementById("secondNum").innerHTML = "0";
    document.getElementById("secondNum").style.color = "white";
    document.getElementById("key").innerHTML = "";
    inputPlay.value = "";
  });

  let intervalId = setInterval(() => {
    if (operations == 0) {
      clearInterval(intervalId);
      document.getElementById("firstNum").innerHTML = "Ваш";
      document.getElementById("key").innerHTML = "";
      document.getElementById("secondNum").style.color = "white";
      document.getElementById("secondNum").innerHTML = "ответ";
      document.getElementById("inputAnswer").readOnly = false;
      document.getElementById("inputAnswer").focus();
    } else {
      generateEquation();
      operations--;
    }
  }, delay * 1000);
  buttonPlayExit.addEventListener("click", () => {
    clearInterval(intervalId);
  });
  const funcPlay = (event) => {
    event.preventDefault();
    if (temp == 0) {
      return;
    } else {
      if (inputPlay.value == answer) {
        let price = Math.ceil((quantity / delay) * 5);
        audioTrue.play();
        document.getElementById("inputAnswer").readOnly = true;
        scoreNowDiv.innerHTML = Number(scoreNowDiv.innerHTML) + price;
        document.getElementById("resultScore").innerHTML = scoreNowDiv.innerHTML;
        scoreAllDiv.innerHTML = Number(scoreAllDiv.innerHTML) + price;
        setLocaleStorage(nick, Number(scoreAllDiv.innerHTML));
        document.getElementById("headerScore").innerHTML = getLocaleStorage(nick);
      } else {
        document.getElementById("inputAnswer").readOnly = true;
        console.log("Правильный ответ: " + answer);
        audioWrong.play();
      }
    }
    formPlay.removeEventListener("submit", funcPlay);
    formPlay.addEventListener("submit", (event) => {
      event.preventDefault();
    });
  };
  formPlay.addEventListener("submit", funcPlay);
}

class MyMath {
  constructor(nick) {
    this.nick = nick;
  }
  eazyClassic() {
    playgroundMathEz(1, this.nick);
  }
  eazyTime() {
    let timer = document.getElementById("timer").innerHTML;
    timer = Number(timer);

    let intervalId = setInterval(() => {
      if (timer == 0) {
        document.getElementsByClassName("playground__contentMain")[0].style.display = "none";
        document.getElementsByClassName("playground__result")[0].style.display = "flex";
        clearInterval(intervalId);
        document.removeEventListener("keydown", myHandler);
      } else {
        --timer;
        document.getElementById("timer").innerHTML = timer;
        document.getElementsByClassName("playground__contentMain")[0].style.display = "flex";
        document.getElementsByClassName("playground__result")[0].style.display = "none";
      }
    }, 1000);
    buttonPlayExit.addEventListener("click", () => {
      clearInterval(intervalId);
    });
    playgroundMathEz(2, this.nick);
  }
  hardClassic() {
    playgroundMathHard(2, this.nick);
  }
  hardTime() {
    let timer = document.getElementById("timer").innerHTML;
    timer = Number(timer);

    let intervalId = setInterval(() => {
      if (timer == 0) {
        document.getElementsByClassName("playground__contentMain")[0].style.display = "none";
        document.getElementsByClassName("playground__result")[0].style.display = "flex";
        clearInterval(intervalId);
      } else {
        --timer;
        document.getElementById("timer").innerHTML = timer;
        document.getElementsByClassName("playground__contentMain")[0].style.display = "flex";
        document.getElementsByClassName("playground__result")[0].style.display = "none";
      }
    }, 1000);
    buttonPlayExit.addEventListener("click", () => {
      clearInterval(intervalId);
    });
    playgroundMathHard(4, this.nick);
  }
  hardArifm(quantity, delay) {
    playgroundArifm(this.nick, quantity, delay);
  }
}

export default MyMath;
