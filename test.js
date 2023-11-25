document.querySelector(`.button3`).onclick = promo;

function promo () {
    const inputText = document.querySelector(`.card3`).value;
    const re = inputText.match (/[^\sа-яА-Я]{4,}/);

    document.querySelector(`.result3`).textContent = `Промокод: ` + re;
}

document.querySelector(`.button4`).onclick = cardNumber;

function cardNumber () {
    const inputText = document.querySelector(`.card4`).value;
    const re = inputText.match (/\d{4}(?!.*\d)/);

    document.querySelector(`.result4`).textContent = `Последние 4 цифры: ` + re;
}

