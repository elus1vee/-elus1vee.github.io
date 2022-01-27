import MyMath from "./MyMath.js";

function getLocaleStorage(nick) {
  return JSON.parse(localStorage.getItem(nick)).score;
}
function openMenuPage(nick) {
  document.getElementsByClassName("enter")[0].style.display = "none";
  document.getElementsByClassName("playground")[0].style.display = "none";
  document.getElementsByClassName("content")[0].style.display = "flex";
}
function openEnterPage() {
  document.getElementsByClassName("content")[0].style.display = "none";
  document.getElementsByClassName("enter")[0].style.display = "flex";
}
function openRulesPage() {
  let div = document.createElement("div");
  div.className = "content__content";
  let p1 = document.createElement("p");
  p1.className = "content__paragraph";
  p1.innerText =
    "S1MPLE MATH - развивающая, интеллектуальная игра. Подходит как для детей, так и для взрослых.";
  div.append(p1);
  let p2 = document.createElement("p");
  p2.className = "content__paragraph";
  p2.innerHTML =
    "В игре существует два уровня сложности:<span style=color:green> легкий</span> и <span style=color:orange>продвинутый</span>. Легкий режим отличается тем, что в нём есть варианты ответов и вам следует только выбрать из предложенных. Данный уровень сложности отлично подойдет для детей!";
  div.append(p2);
  let p3 = document.createElement("p");
  p3.className = "content__paragraph";
  p3.innerHTML =
    "<span style=color:green>Лёгкий</span> уровень сложности включает два режима: <span style=text-decoration:underline>классический</span> (попадаются любые математические операции и времени сколько угодно), <span style=text-decoration:underline>на время</span> (за 60с решить наибольшее число задач).";
  div.append(p3);
  let p4 = document.createElement("p");
  p4.className = "content__paragraph";
  p4.innerHTML =
    "<span style=color:orange>Продвинутый</span> уровень сложности включает три режима: <span style=text-decoration:underline>классический</span>, <span style=text-decoration:underline>на время</span>, <span style=text-decoration:underline>ментальная арифметика</span> (выбираете задержку в секундах и количество произведенных операций, и в конце должны написать итоговый ответ). ";
  div.append(p4);
  let p5 = document.createElement("p");
  p5.className = "content__paragraph";
  p5.innerHTML =
    "<span style=color:red>Система очков</span>: <ul><li>Классический режим: 1 очко за каждое правильное задание (в <span style=color:orange>продвинутом</span> x2)</li><li>На время: количество решенных примеров * 2 очка (в <span style=color:orange>продвинутом</span> x2)</li><li>Ментальная арифметика: по формуле (кол-во операций/задержка *5 очков)</li></ul>";
  div.append(p5);
  let p6 = document.createElement("p");
  p6.className = "content__paragraph";
  p6.innerHTML = "<span style=color:green>УДАЧИ!</span>";
  div.append(p6);
  document.getElementsByClassName("content__cont")[0].prepend(div);
}

function setLocaleStorage(nick, scoreValue) {
  let objScore = {
    score: scoreValue,
  };
  let temp = JSON.stringify(objScore);
  localStorage.setItem(nick, temp);
}

function selectedPage(page) {
  let allButtonArr = document.querySelectorAll(".content__column");
  for (let i = 0; i < allButtonArr.length; i++) {
    const element = allButtonArr[i];
    element.classList.remove("selected-page");
  }
  if (!(page === "menu")) {
    let buttonTemp = document.querySelector(`#${page}`);
    buttonTemp.classList.add("selected-page");
  }
}
function openPlayground(a, b, nick) {
  let score = getLocaleStorage(nick);
  let playPage = document.getElementsByClassName("content")[0];
  playPage.style.display = "none";
  let playgroundPage = document.getElementsByClassName("playground")[0];
  playgroundPage.style.display = "flex";
  let scoreAllDiv = document.getElementById("scoreAll");
  scoreAllDiv.innerText = score;
  document.getElementById("scoreNow").innerText = 0;
  if (a) {
    document.getElementsByClassName("playground__own")[0].style.display = "flex";
    document.getElementsByClassName("playground__answers")[0].style.display = "none";
    document.getElementById("inputAnswer").focus();
  } else {
    document.getElementsByClassName("playground__own")[0].style.display = "none";
    document.getElementsByClassName("playground__answers")[0].style.display = "flex";
  }
  if (b) {
    document.getElementsByClassName("playground__timer")[0].style.display = "inline-block";
  } else {
    document.getElementsByClassName("playground__timer")[0].style.display = "none";
  }
}

function openPlayPage(nick) {
  let div = document.createElement("div");
  div.className = "content__play";
  let h2 = document.createElement("h2");
  h2.innerHTML = "Выберите уровень сложности";
  div.append(h2);
  let subDiv = document.createElement("div");
  subDiv.className = "play__item";
  let buttonEazy = document.createElement("button");
  buttonEazy.id = "button__ez";
  let buttotHard = document.createElement("button");
  buttotHard.id = "button__hard";
  buttonEazy.className = "play__button";
  buttotHard.className = "play__button";
  buttonEazy.innerHTML = "Лёгкий";
  buttotHard.innerHTML = "Продвинутый";
  buttonEazy.style.color = "greenyellow";
  buttotHard.style.color = "orange";
  subDiv.append(buttonEazy);
  subDiv.append(buttotHard);

  div.addEventListener("click", (event) => {
    let math = new MyMath(nick);
    if (event.target === buttonEazy) {
      setTimeout(() => {
        subDiv.innerHTML = "";
        subDiv.innerHTML =
          "<button class='play__button' id='eazy__classic'>Классический</button><button class='play__button' id='eazy__time'>На время</button>";

        subDiv.addEventListener("click", (event) => {
          let divClassic = document.getElementById("eazy__classic");
          let divTime = document.getElementById("eazy__time");
          if (event.target === divClassic) {
            openPlayground(0, 0, nick);
            math.eazyClassic();
          }
          if (event.target === divTime) {
            openPlayground(0, 1, nick);
            math.eazyTime();
          }
        });
      }, 200);
    }
    if (event.target === buttotHard) {
      setTimeout(() => {
        subDiv.innerHTML = "";
        subDiv.innerHTML =
          "<button class='play__button' id='hard__classic'>Классический</button><button class='play__button' id='hard__time'>На время</button><button class='play__button' id='hard__arifm'>Ментальная арифметика</button>";

        subDiv.addEventListener(
          "click",
          (event) => {
            let divClassic2 = document.getElementById("hard__classic");
            let divTime2 = document.getElementById("hard__time");
            let divArifm = document.getElementById("hard__arifm");
            if (event.target === divClassic2) {
              openPlayground(1, 0, nick);
              math.hardClassic();
            }
            if (event.target === divTime2) {
              openPlayground(1, 1, nick);
              math.hardTime();
            }
            if (event.target === divArifm) {
              subDiv.innerHTML =
                "<form name='arifmForm'><div class = 'play__row'><div class='play__arifmColumn'><div>Кол-во операций</div><input type = 'number' name = 'quantity' id = 'inputQuantity' autocomplete = 'off'/></div><div class = 'play__arifmColumn'><div>Задержка</div><input type = 'number' name = 'delay' id = 'inputDelay' step = 'any' autocomplete = 'off'/></div></div><div class = 'play__row'><button class = 'play__button'>Начать</button></div></form>";
              document.getElementById("inputQuantity").addEventListener("mousewheel", function (e) {
                e.preventDefault();
              });
              let form = document.arifmForm;
              let quantity = form.quantity;
              let delay = form.delay;
              form.addEventListener("submit", (event) => {
                event.preventDefault();
                openPlayground(1, 0, nick);
                math.hardArifm(quantity.value, delay.value);
              });
            }
          },
          200
        );
      });
    }
  });
  div.append(subDiv);
  document.getElementsByClassName("content__cont")[0].prepend(div);
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

export {
  getRandomIntInclusive,
  getLocaleStorage,
  selectedPage,
  openMenuPage,
  openEnterPage,
  openRulesPage,
  setLocaleStorage,
  openPlayPage,
  openPlayground,
};
