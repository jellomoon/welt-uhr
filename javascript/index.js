function updateTime() {
  //Los Angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    let losAngelesTimeNow = moment().tz("America/Los_Angeles");

    losAngelesDateElement.innerHTML = losAngelesTimeNow.format("MMMM Do YYYY");
    losAngelesTimeElement.innerHTML = losAngelesTimeNow.format("HH:mm:ss");
  }

  //Berlin
  let berlinElement = document.querySelector("#berlin");
  if (berlinElement) {
    let berlinDateElement = berlinElement.querySelector(".date");
    let berlinTimeElement = berlinElement.querySelector(".time");
    let berlinTimeNow = moment().tz("Europe/Berlin");

    berlinDateElement.innerHTML = berlinTimeNow.format("MMMM Do YYYY");
    berlinTimeElement.innerHTML = berlinTimeNow.format("HH:mm:ss");
  }

  //Tokyo
  let tokyoElement = document.querySelector("#tokyo");
  if (tokyoElement) {
    let toykoDateElement = tokyoElement.querySelector(".date");
    let tokyoTimeElement = tokyoElement.querySelector(".time");
    let tokyoTimeNow = moment().tz("Asia/Tokyo");

    toykoDateElement.innerHTML = tokyoTimeNow.format("MMMM Do YYYY");
    tokyoTimeElement.innerHTML = tokyoTimeNow.format("HH:mm:ss");
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let cityElement = document.querySelector("#city-replace");
  cityElement.innerHTML = `
   <div class="city">
          <div>
            <h2>${cityName}🩵</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
        <div class="time">${cityTime.format("HH:mm:ss")}</div>
        </div>`;
}

updateTime();
setInterval(updateTime, 1000);

let citySeletElement = document.querySelector("#city");
citySeletElement.addEventListener("change", updateCity);
