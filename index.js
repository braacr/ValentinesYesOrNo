const display = document.getElementById("display");
const buttonYes = document.getElementById("yesBtn");

let texts = [
    "Are you sure? You're breaking my heart!",
    "But... but... I already got your presents!",
    "Wait, wait, wait! Let's talk about this.",
    "Rejecting me hurts more than stepping on LEGO.",
    "Ouch! Right in the feels.",
    "Well, there goes my romantic movie marathon plan.",
    "I thought we were soulmates... guess not.",
    "Oh no, I just rehearsed my surprise speech!",
    "Do you want to see my puppy dog eyes in person?",
    "I promise I won't serenade you with love songs... maybe.",
    "I even dressed up for this occasion!",
    "Guess I'll be drowning my sorrows in ice cream tonight.",
    "I'll just be over here, nursing my wounded heart.",
    "Is this the part where I dramatically run through the rain?",
    "But... but... the romantic candlelit dinner I planned!",
    "Just when I thought we had a love story in the making...",
    "Is there a refund policy for shattered dreams?",
    "This rejection feels colder than the Arctic.",
    "You're breaking my heart into pixelated pieces.",
];
let amountYes = 0;

function generateRandomSymbols() {
    var symbolBackground = document.querySelector('.symbol-background');
    var symbols = ['♥', '★', '♡', '✰']; // Array mit den Symbolen
    var width = window.innerWidth;
    var height = window.innerHeight;

    // Anzahl der Symbole
    var numSymbols = 200;

    for (var i = 0; i < numSymbols; i++) {
        var symbol = document.createElement('span');
        symbol.textContent = symbols[Math.floor(Math.random() * symbols.length)]; // Zufälliges Symbol auswählen
        symbol.style.position = 'absolute';
        symbol.style.left = Math.random() * width + 'px';
        symbol.style.top = Math.random() * height + 'px';
        symbolBackground.appendChild(symbol);
    };
};

generateRandomSymbols();

function pressedYes() {
    display.textContent = "YAYY CAN'T WAIT TO SEE YOU!";
    display.style.fontWeight = "bold";
    buttonYes.style.backgroundColor = "#7DB6A3";
    amountYes++;
    if(amountYes > 1) {
        location.reload();
    }
};

function pressedNo() {
    display.style.fontWeight = "normal";
    display.textContent = texts[Math.floor(Math.random() * texts.length)];

    magnifyButton(buttonYes);
};

function magnifyButton(button) {
    var currentWidth = button.offsetWidth;
    var currentHeight = button.offsetHeight;

    var newWidth = currentWidth + 25;
    var newHeight = currentHeight + 25;

    button.style.width = newWidth + 'px';
    button.style.height = newHeight + 'px';
};