const formContollEl = document.querySelector(".form-control");
const inputEl = document.querySelector(".input");
const wrapper = document.querySelector(".wrapper");
const conEl = document.querySelector(".con");

const DATA = [
    "Assalomu alaykum", "Yaxshi rahmat", "Nima bilan bandsiz", "ha",
    "tushunarli", "bilmadim", "nima hohlaysiz", "ko'rishguncha",
    "qayerdasiz", "tez yetib keling", "o'qishda", "men dunyo kezdim",
    "😂😂😂😂😂", "👌👌👌", "❤️❤️❤️", "vxaxaxxaxxxaxxaxaxa", "siz kim siz", "uyga bor"
];

function anotherMas() {
    const card = document.createElement("div");
    card.className = "card";
    const date = new Date();
    const randomIndex = Math.floor(Math.random() * DATA.length);
    const randomMs = DATA[randomIndex];

    card.innerHTML = `
        <p>${randomMs}</p>
        <span>${date.getHours()}:${String(date.getMinutes()).padStart(2, '0')}</span>
    `;
    wrapper.append(card);
    wrapper.scrollTop = wrapper.scrollHeight; 
}

formContollEl.addEventListener("submit", (event) => {
    event.preventDefault();
    const value = inputEl.value.trim();
    if (!value) return;

    const card = document.createElement("div");
    card.className = "card another";
    const date = new Date();

    card.innerHTML = `
        <p>${value}</p>
        <span>${date.getHours()}:${String(date.getMinutes()).padStart(2, '0')}</span>
    `;

    wrapper.append(card);
    inputEl.value = "";

    wrapper.scrollTop = wrapper.scrollHeight;

    setTimeout(() => {
        anotherMas();
    }, 3000);
});


const addBtn = document.querySelector(".form_btn");

addBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const name = document.querySelectorAll(".form_input")[0].value.trim();
    const hobbies = document.querySelectorAll(".form_input")[1].value.trim();
    const about = document.querySelectorAll(".form_input")[2].value.trim();

    if (name && hobbies && about) {
        const newCard = document.createElement("div");
        newCard.className = "kards";

        newCard.innerHTML = `
            <div class="infropntoof">
          <div class="kards_txt">
            <div class="img">
              <img src="./img/man.jpeg" alt="" />
            </div>
          </div>
          <div class="kard_title">
            <h1 class="ism">${name}</h1>
            <p>${hobbies}</p>
            <span>${about}</span>
            <button>Follow me</button>
          </div>
        </div>
        `;

        const sections = document.querySelectorAll(".container1");
        const cardsSection = sections[1]; 
        cardsSection.appendChild(newCard);

        document.querySelectorAll(".form_input").forEach(input => input.value = "");
    } else {
        alert("Qator qolib ketdi.");
    }
});
