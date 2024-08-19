const rulesDialog = document.getElementById("rules-dialog");
const closeBtn = document.getElementById("close-btn");
const rulesBtn = document.querySelector(".rules-btn");
const choicesEle = document.querySelectorAll(".paper, .scissors, .rock");
const gameContainer = document.querySelector(".game-container");
const stepTwoTemplate = document.getElementById("waiting");

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
