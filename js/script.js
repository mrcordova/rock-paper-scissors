const rulesDialog = document.getElementById("rules-dialog");
const closeBtn = document.getElementById("close-btn");
const rulesBtn = document.querySelector(".rules-btn");
const choicesEle = document.querySelectorAll(
  ".paper, .scissors, .rock, .spock, .lizard"
);
const gameContainer = document.querySelector(".game-container");
const stepTwoTemplate = document.getElementById("waiting");
const score = document.querySelector(".score>h1");
const choices = {
  paper: "rock",
  rock: "scissors",
  scissors: "paper",
};
const choicesKey = Object.keys(choices);
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
function youPicked(e) {
  const choice = e.currentTarget.cloneNode(true);

  gameContainer.insertAdjacentHTML(
    "beforebegin",
    `<div class="step-2 barlow-semi-condensed-bold">
          <p class="pick-container">YOU PICKED</p>
          <div class="empty-choice"></div>
          <p class="pick-container">THE HOUSE PICKED</p>
        </div>`
  );
  choice.classList.add("you-picked");
  gameContainer.previousElementSibling.insertAdjacentElement(
    "afterbegin",
    choice
  );

  gameContainer.style.display = "none";

  setTimeout(() => {
    // console.log();
    choice.insertAdjacentHTML(
      "afterend",
      `<div class="result-container" style="display:none">
        <p>YOU LOSE</p>
        <button>PLAY AGAIN</button>
      </div>`
    );
    const resultContainer = document.querySelector(".result-container");
    resultContainer.style.display = "";
    const computerChoice = choicesKey[getRandomInt(3)];
    const computerChoiceEle = gameContainer
      .querySelector(`[data-choice="${computerChoice}"`)
      .cloneNode(true);
    computerChoiceEle.classList.add("computer-picked");
    const emptyChoice = document.querySelector(".empty-choice");
    const emptyChoiceParent = emptyChoice.parentNode;

    emptyChoiceParent.replaceChild(computerChoiceEle, emptyChoice);
    if (choices[choice.dataset.choice] === computerChoice) {
      //   console.log("Player wins");
      resultContainer.children[0].textContent = "YOU WIN";
      score.textContent = `${parseInt(score.textContent) + 1}`;
      choice.classList.add("play-shadows");
    } else if (choices[computerChoice] === choice.dataset.choice) {
      //   console.log("computer wins");
      resultContainer.children[0].textContent = "YOU LOSE";
      score.textContent = `${parseInt(score.textContent) - 1}`;
      computerChoiceEle.classList.add("play-shadows");
    } else {
      //   console.log("It's a draw");
      resultContainer.children[0].textContent = "YOU TIED";
    }
    resultContainer.children[1].addEventListener("click", (e) => {
      // console.log("play agian");
      document.querySelector(".step-2").remove();
      gameContainer.style.display = "";
      resultContainer.remove();
    });
    localStorage.setItem("score", score.textContent);
  }, 5000);
}

rulesBtn.addEventListener("click", () => {
  rulesDialog.showModal();
});

closeBtn.addEventListener("click", () => {
  rulesDialog.close();
});

window.addEventListener("load", () => {
  if (localStorage.getItem("score") == null) {
    localStorage.setItem("score", score.textConten ?? "12");
  }
  score.textContent = localStorage.getItem("score");
});

for (const choiceEle of choicesEle) {
  choiceEle.addEventListener("click", youPicked);
}
