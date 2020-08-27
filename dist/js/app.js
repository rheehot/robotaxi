let modalBtn = document.querySelector(".modal-btn");
let modal = document.querySelector(".modal-overlay");
let closeBtn = document.querySelector(".btn-close");

modalBtn.addEventListener("click", function () {
  modal.classList.add("open-modal");
});

closeBtn.addEventListener("click", function () {
  modal.classList.remove("open-modal");
});
