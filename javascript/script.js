const formContollEl = document.querySelector(".form-control");
const inputEl = document.querySelector(".input");
const wrapper = document.querySelector(".wrapper");
const conEl = document.querySelector(".con")

const DATA = [
    "Assalomu alaykum", "Yaxshi rahmat", "Nima bilan bandsiz", "ha",
    "tushunarli", "bilmadim", "nima hohlaysiz", "ko'rishguncha",
    "qayerdasiz", "tez yetib keling", "o'qishda", "men dunyo kezdim",
    "😂😂😂😂😂", "👌👌👌", "❤️❤️❤️"
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
