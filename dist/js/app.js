const ride = document.querySelector(".ride");
const interest = document.querySelector(".ride");
const eat = document.querySelector(".ride");
const hotSpot = document.querySelector(".ride");
const menu = document.querySelector(".hamburger");

menu.addEventListener("click", () => {
  console.log("hey");
});

// features
const tabsContainer = document.querySelector(".tesla__features--container");
const tab = document.querySelectorAll(".booking__tab");
const tabsContent = document.querySelectorAll(".features__content");

tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".booking__tab");
  if (!clicked) return;

  tab.forEach((t) => t.classList.remove("booking__tab--active"));
  clicked.classList.add("booking__tab--active");

  tabsContent.forEach((c) => c.classList.remove("features__content--active"));
  document
    .querySelector(`.features__content--${clicked.dataset.tab}`)
    .classList.add("features__content--active");
});
