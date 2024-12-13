import { Games, gamesList } from "./games.js";
import { Details } from "./detail.js";

const navItme = document.querySelectorAll(".navbar .nav-link");
let activeItem = document.querySelector(".navbar .nav-link.active");

// run functions
async function run(category) {
  let categoryDisplay = new Games(category);
  await categoryDisplay.getApi();
  getId();
}

run("mmorpg");

// Show the active item and restart the run function
for (let i = 0; i < navItme.length; i++) {
  navItme[i].addEventListener("click",function (e) {
    activeItem = document.querySelector(".navbar .nav-link.active");
    activeItem.classList.remove("active");
    this.classList.add("active");
    run(this.innerHTML);
  });
}

// Get the clicked item's ID and send it to the Details class

function getId() {
  let selectedCard = document.querySelectorAll("#cards .row .card ");
  for (let i = 0; i < gamesList.length; i++) {
    selectedCard[i].addEventListener("click", () => {
      let cardId = gamesList[i].id;
      let detailTry = new Details(cardId);
      detailTry.getDetailsApl();
    });
  }
}
