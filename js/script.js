const rulesDialog = document.getElementById("rules-dialog");
const closeBtn = document.getElementById("close-btn");
const rulesBtn = document.querySelector(".rules-btn");
const choicesEle = document.querySelectorAll(".paper, .scissors, .rock");
const gameContainer = document.querySelector(".game-container");
const stepTwoTemplate = document.getElementById("waiting");

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
    ` <div class="step-2 barlow-semi-condensed-bold">
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
    const computerChoice = choicesKey[getRandomInt(3)];
    const computerChoiceEle = gameContainer
      .querySelector(`[data-choice="${computerChoice}"`)
      .cloneNode(true);
    computerChoiceEle.classList.add("computer-picked");
    const emptyChoice = document.querySelector(".empty-choice");
    const emptyChoiceParent = emptyChoice.parentNode;

    emptyChoiceParent.replaceChild(computerChoiceEle, emptyChoice);
    console.log(choices[choice.dataset.choice] === computerChoice);
    console.log(choices[computerChoice] === choice.dataset.choice);
  }, 5000);
}

rulesBtn.addEventListener("click", () => {
  rulesDialog.showModal();
});

closeBtn.addEventListener("click", () => {
  rulesDialog.close();
});

for (const choiceEle of choicesEle) {
  choiceEle.addEventListener("click", youPicked);
}
