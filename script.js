// Countdown Logic
const countdownElement = document.getElementById("countdown");
const valentineQuestion = document.getElementById("valentine-question");
const treasures = document.getElementById("treasures");

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
let typingTimeout;

function updateCountdown() {
  const targetDate = new Date("February 14, 2025 00:00:00");
  const currentDate = new Date();
  const timeDiff = targetDate - currentDate;

  if (timeDiff <= 0) {
    clearInterval(countdownInterval);
    countdownElement.parentElement.classList.add("hidden");
    valentineQuestion.classList.remove("hidden");
  } else {
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    countdownElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }
}

const countdownInterval = setInterval(updateCountdown, 1000);

const yesButton = document.getElementById("yes-button");
const noButton = document.getElementById("no-button");
const areYouSure = document.getElementById("are-you-sure");

let scaleFactor = 1;
noButton.addEventListener("click", () => {
  areYouSure.textContent = texts[Math.floor(Math.random() * texts.length)];
  if(scaleFactor < 1.3) scaleFactor += 0.1;
  yesButton.style.transform = `scale(${scaleFactor})`;
  areYouSure.classList.remove("hidden");
});

yesButton.addEventListener("click", () => {
  valentineQuestion.classList.add("hidden");
  treasures.classList.remove("hidden");
});

const treasureElements = document.querySelectorAll(".treasure");
const treasureContent = document.getElementById("treasure-content");

treasureElements.forEach((treasure) => {
  treasure.addEventListener("click", () => {
    const content = treasure.getAttribute("data-content");

    treasureContent.style.opacity = "0";
    treasureContent.style.animation = "none";

    setTimeout(() => {
      typeWriterEffect(content, treasureContent, 20);
      treasureContent.style.animation = "textAppear 0.5s ease forwards";
    }, 100);
  });
});

function typeWriterEffect(text, targetElement, speed=50) {
  targetElement.textContent = "";
  let index = 0;

  if(typingTimeout) clearTimeout(typingTimeout);

  function addLetter() {
    if(index < text.length) {
      targetElement.textContent += text.charAt(index);
      index++;
      typingTimeout = setTimeout(addLetter, speed);
    }
  }

  addLetter();
}