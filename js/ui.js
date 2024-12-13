// import {} from "./games.js";
const row = document.querySelector("#cards .row");

// A class takes an array and contains two methods to display data based on the given array
export class Display {
  constructor(gamesArray) {
    this.gamesArray = gamesArray;
  }

  displayGames() {
    let cointainer = "";
    for (let i = 0; i < this.gamesArray.length; i++) {
      cointainer += `
               <div class="col-lg-3 col-md-6 col-12">
                <div class="card">
                  <div class="card-body">
                  
                 
                    <img src=${
                      this.gamesArray[i].thumbnail
                    } class="card-img-top" alt="..." />
                    <div
                      class="top d-flex align-items-center justify-content-between pt-3"
                    >
                      <h5 class="title">${this.gamesArray[i].title}</h5>
                      <button class="btn">free</button>
                    </div>
      
                    <p class="card-text pt-4 text-center">
                    ${this.gamesArray[i].short_description
                      .split(" ")
                      .slice(0, 11)
                      .join(" ")}
                    </p>
                  </div>
                  <div class="card-footer d-flex justify-content-between">
                    <span>${this.gamesArray[i].genre}</span>
                    <span> ${this.gamesArray[i].platform}</span>
                  </div>
                </div>
              </div>
              `;
    }

    row.innerHTML = cointainer;
  }

  displayDetails() {
    const detailSection = document.querySelector(".details");
    const gamesSection = document.querySelector("#cards");

    detailSection.classList.remove("d-none");
    gamesSection.classList.add("d-none");

    let cointainer = `
      <div
        class="title d-flex align-items-center justify-content-between container"
      >
        <h2>Details Game</h2>
        <div class="icon">
          <i class="fa-solid fa-xmark"></i>
        </div>
      </div>
      <div class="content container py-3">
        <div class="row gy-3">
      
          <div class="col-md-4 col-12">
            <div class="img">
              <img src=${this.gamesArray.thumbnail} class="w-100" alt="" />
            </div>
          </div>
          <div class="col-md-8 col-12">
            <div class="text">
              <h3>Title: ${this.gamesArray.title}</h3>
              <p>Category: <span>${this.gamesArray.genre}</span></p>
              <p>Platform: <span>${this.gamesArray.platform}</span></p>
              <p>Status: <span>${this.gamesArray.status}</span></p>
              <p class="paragraph">
              ${this.gamesArray.description}
              </p>
              <a href=${this.gamesArray.game_url} target="_blank" class="btn btn-outline-warning">Show Game</a>
            </div>
          </div> 
         
        </div>
      </div>
    `;

    detailSection.innerHTML = cointainer;
    const closeBtn = document.querySelector(".details .title .icon i");
    closeBtn.addEventListener("click", () => {
      detailSection.classList.add("d-none");
      gamesSection.classList.remove("d-none");
    });
  }
}
