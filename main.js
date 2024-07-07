const swiperWrapper = document.querySelector(".swiper-wrapper");
const mask = document.querySelector(".mask");

const API_URL = "https://api.coinranking.com/v2/coins";

document.addEventListener("DOMContentLoaded", async () => {
  try {
    mask.classList.add("visible");
    await renderCoins();
  } finally {
    mask.classList.remove("visible");
  }
  initializeSwiper();
});

const options = {
  headers: {
    "content-type": "application/json",
    "x-access-token":
      "coinranking1c94d3cd45e15bf3763948a767c53268d9ceed2725442592",
  },
};

async function getCoins() {
  try {
    const response = await fetch(API_URL, options);
    let json = await response.json();
    return json.data.coins;
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Finally");
  }
}

async function renderCoins() {
  try {
    const coins = await getCoins();
    coins.forEach((element) => {
      const coin = createCard(element);
      swiperWrapper.append(coin);
    });
  } catch (error) {
    console.log(error);
  } finally {
    console.log("finally");
  }
}

function createCard(card) {
  const coin = document.createElement("div");
  coin.classList.add("swiper-slide");

  const coinItem = document.createElement("div");
  coinItem.classList.add("coin__item");
  coinItem.innerHTML = `
    <div class="coin__name">${card.name}</div>
    <div class="coin__price">Price: ${card.price}</div>
    <div class="coin__img">
      <img src="${card.iconUrl}" alt="#">
    </div>
  `;
  coin.append(coinItem);
  return coin;
}
