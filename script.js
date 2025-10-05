const compliments = [
    "You are awesome! 🌟",
    "Your smile is contagious! 😁",
    "You have a beautiful mind! 🧠",
    "You make the world brighter! 🌈",
    "You are incredibly talented! 🎨",
    "Your positivity is inspiring! 🌞",
    "You are a true friend! 🤝",
    "You bring happiness to others! 💖",
    "You are fearless and brave! 🦁",
    "Your creativity is amazing! ✨"
];

const backgrounds = [
    "linear-gradient(120deg, #ffafbd, #ffc3a0)",
    "linear-gradient(120deg, #a1c4fd, #c2e9fb)",
    "linear-gradient(120deg, #fbc2eb, #a6c1ee)",
    "linear-gradient(120deg, #84fab0, #8fd3f4)",
    "linear-gradient(120deg, #ffecd2, #fcb69f)"
];

function generateCompliment() {
    const randomIndex = Math.floor(Math.random() * compliments.length);
    const complimentEl = document.getElementById("compliment");
    complimentEl.textContent = compliments[randomIndex];
    complimentEl.style.color = randomColor();
    document.body.style.background = backgrounds[Math.floor(Math.random() * backgrounds.length)];
    complimentEl.style.transform = "scale(1.2)";
    setTimeout(() => {
        complimentEl.style.transform = "scale(1)";
    }, 300);
}

function randomColor() {
    const colors = ["#FF5733", "#33C1FF", "#FF33A6", "#33FF57", "#F3FF33"];
    return colors[Math.floor(Math.random() * colors.length)];
}

document.getElementById("shareBtn").onclick = () => {
    const text = document.getElementById("compliment").textContent;
    const shareURL = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
    window.open(shareURL, "_blank");
};
