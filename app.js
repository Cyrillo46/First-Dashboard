// fetch our background image
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

// display our bitcoin value in USD
fetch("https://api.coingecko.com/api/v3/coins/bitcoin")
  .then((res) => res.json())
  .then((data) => {
    document.getElementById(
      "crypto-top"
    ).innerHTML = `<img src="${data.image.small}"> 
    <span>${data.name}</span>`;

    document.getElementById("crypto-top").innerHTML += `
       <p>🎯 Current: ${data.market_data.current_price.usd}</p>
       <p>📈 High: ${data.market_data.high_24h.usd}</p>
       <p>📉 Low: ${data.market_data.low_24h.usd}</p>
    `;
  });

// Our time display
let time = new Date().toLocaleTimeString(("en-us", { timeStyle: "short" }));
document.getElementsByClassName("time")[0].innerHTML = time;

console.log(time);
