import { Display } from "./ui.js";

let detailsInfo = [];

// A class takes an array, starts fetching data from an API, and takes an object from the Display class
export class Details {
  constructor(id) {
    this.id = id;
  }

  async getDetailsApl() {
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "c9b657ccf8msh1ac556d59a1424ep154339jsn4e6a0a1baf3e",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
    try {
      const res = await fetch(
        `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${this.id}`,
        options
      );
      let data = await res.json();
      detailsInfo = data;
      console.log("details", detailsInfo);
      let showdetails = new Display(detailsInfo);
      showdetails.displayDetails();
    } catch (error) {
      const row = document.querySelector("#cards");
      row.innerHTML = `
        <div class="error text-center fw-bolder position-absolute top-0 bottom-0 start-0 end-0  d-flex flex-column align-items-center justify-content-center
      ">
      <p class="error1">404</p>
      <p class="error2">Oops...Details page not found</p>
      </div>
        `;
    }
  }
}
