function updateTime() {
  //Los Angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesTimeNow = moment().tz("America/Los_Angeles");

  losAngelesDateElement.innerHTML = losAngelesTimeNow.format("MMMM Do YYYY");
  losAngelesTimeElement.innerHTML = losAngelesTimeNow.format("HH:mm:ss");

  //Berlin
  let berlinElement = document.querySelector("#berlin");
  let berlinDateElement = berlinElement.querySelector(".date");
  let berlinTimeElement = berlinElement.querySelector(".time");
  let berlinTimeNow = moment().tz("Europe/Berlin");

  berlinDateElement.innerHTML = berlinTimeNow.format("MMMM Do YYYY");
  berlinTimeElement.innerHTML = berlinTimeNow.format("HH:mm:ss");

  //Tokyo
  let tokyoElement = document.querySelector("#tokyo");
  let toykoDateElement = tokyoElement.querySelector(".date");
  let tokyoTimeElement = tokyoElement.querySelector(".time");
  let tokyoTimeNow = moment().tz("Asia/Tokyo");

  toykoDateElement.innerHTML = tokyoTimeNow.format("MMMM Do YYYY");
  tokyoTimeElement.innerHTML = tokyoTimeNow.format("HH:mm:ss");
}

updateTime();
setInterval(updateTime, 1000);
