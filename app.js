// fetch our background image for the dashboard and set it
fetch(
  "https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature"
)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    console.log(data.urls.full);
    document.body.style.backgroundImage = `url('${data.urls.full}')`;
    document.getElementById(
      "photo-credit"
    ).textContent = `Taken by ${data.user.name}`;
  });

// display our bitcoin value in USD in "crypto-top", an list the status of that currency below in "crypto"
fetch("https://api.coingecko.com/api/v3/coins/bitcoin")
  .then((res) => res.json())
  .then((data) => {
    document.getElementById(
      "crypto-top"
    ).innerHTML = `<img src="${data.image.small}"> 
    <span>${data.name}</span>`;

    document.getElementById("crypto").innerHTML += `
       <p>🎯 Current: ${data.market_data.current_price.usd}</p>
       <p>📈 High: ${data.market_data.high_24h.usd}</p>
       <p>📉 Low: ${data.market_data.low_24h.usd}</p>
    `;
  });
// gets the current time
function getCurrentTime() {
  let time = new Date();
  document.getElementsByClassName("time")[0].textContent =
    time.toLocaleTimeString("en-us", { timeStyle: "short" });
}

// updates the current time every second
setInterval(getCurrentTime, 1000);

let lon;
let lat;

// grants us our location
navigator.geolocation.getCurrentPosition((position) => {
  console.log(position.coords.longitude, position.coords.latitude);
  lon = position.coords.longitude;
  lat = position.coords.latitude;
});

fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}`)
  .then((res) => res.json())
  .then((data) => console.log(data));
