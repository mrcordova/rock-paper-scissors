const rulesDialog = document.getElementById("rules-dialog");
const closeBtn = document.getElementById("close-btn");
const rulesBtn = document.querySelector(".rules-btn");

rulesBtn.addEventListener("click", () => {
  rulesDialog.showModal();
});

closeBtn.addEventListener("click", () => {
  rulesDialog.close();
});
