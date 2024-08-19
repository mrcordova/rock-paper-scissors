const rulesDialog = document.getElementById("rules-dialog");
const closeBtn = document.getElementById("close-btn");
const rulesBtn = document.querySelector(".rules-btn");
const choicesEle = document.querySelectorAll(".paper, .scissors, .rock");
const gameContainer = document.querySelector(".game-container");

function youPicked(e) {
  //   console.log(e.currentTarget.dataset.choice);
  const choice = e.currentTarget.cloneNode(true);
  //   console.log(choice);
  gameContainer.insertAdjacentElement("beforebegin", choice);
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
