import { Display } from "./ui.js";
export let gamesList = [];

//A class takes a category type, starts fetching data from an API, and takes an object from the Display class

export class Games {
  constructor(category) {
    this.category = category;
    this.getApi = async function () {
      const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "c9b657ccf8msh1ac556d59a1424ep154339jsn4e6a0a1baf3e",
          "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
        },
      };
      try {
        const res = await fetch(
          `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${this.category}`,
          options
        );
        const data = await res.json();
        gamesList = data;

        let showGames = new Display(gamesList);
        showGames.displayGames();
      } catch (error) {
        const row = document.querySelector("#cards");
        row.innerHTML = `
        <div class="error   text-center fw-bolder position-absolute top-0 bottom-0 start-0 end-0  d-flex flex-column align-items-center justify-content-center
      ">
      <p class="error1">404</p>
      <p class="error2">Oops...Games page not found</p>
      </div>
        `;
      }
    };
  }
}
