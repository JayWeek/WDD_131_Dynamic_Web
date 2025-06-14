const hamburger = document.querySelector('.hamburger');
const navBar = document.querySelector('.nav-bar');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navBar.classList.toggle('show');
  });

// Dynamically set current year in footer
document.addEventListener("DOMContentLoaded", () => {
    const yearSpan = document.getElementById("footer-year");
    if (yearSpan) {
        const currentYear = new Date().getFullYear();
        yearSpan.textContent = currentYear;
    }
});

const learnArray = [
    { name: "Phishing Scams", imageurl: "images/Phishing-scams.jpg" },
    { name: "Password Security", imageurl: "images/password-security.jpg" },
    { name: "Safe Browsing", imageurl: "images/Secure-Browsing.webp" },
    { name: "Spam Detection", imageurl: "images/email-spam.webp" },
    { name: "Two-Factor Auth", imageurl: "images/two-FA.webp" },
    { name: "Social Engineering", imageurl: "images/social.webp" },
    // Add more items freely
];

const learnContainer = document.getElementById("learn-container");

// Function to chunk the array
function chunkArray(array, chunkSize) {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
        chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
}

const chunkedLearnArray = chunkArray(learnArray, 3);
let currentChunkIndex = 0;
let intervalID;

// Render with fade-in animation
function renderImages(imageArray) {
    learnContainer.classList.remove("fade-in");
    void learnContainer.offsetWidth; // trigger reflow for animation
    learnContainer.innerHTML = "";

    imageArray.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("learn-card");

        const image = document.createElement("img");
        image.src = item.imageurl;
        image.alt = item.name;
        image.loading = "lazy";

        const description = document.createElement("p");
        description.textContent = item.name;

        card.appendChild(image);
        card.appendChild(description);
        learnContainer.appendChild(card);
    });

    learnContainer.classList.add("fade-in");
}

// Setup auto rotation
function startRotation() {
    intervalID = setInterval(() => {
        currentChunkIndex = (currentChunkIndex + 1) % chunkedLearnArray.length;
        renderImages(chunkedLearnArray[currentChunkIndex]);
    }, 10000);
}

// Pause on hover
learnContainer.addEventListener("mouseenter", () => clearInterval(intervalID));
learnContainer.addEventListener("mouseleave", startRotation);

// Start
renderImages(chunkedLearnArray[currentChunkIndex]);
startRotation();



// Generating random facts
const facts = [
    "Over 90% of cyber attacks begin with a phishing email, tricking users into revealing sensitive information or clicking malicious links. These emails often appear to come from trusted sources, such as banks, coworkers, or popular services, making them difficult to detect. Once a user takes the bait, attackers can gain access to login credentials, deploy malware, or move laterally through an organization’s network. This highlights the critical need for employee training, email filtering systems, and a strong security awareness culture to reduce risk.",
    "Weak passwords are one of the top causes of security breaches. Many users still rely on easily guessable credentials like '123456' or 'password', which can be cracked in seconds by automated tools. Cybercriminals often exploit these weak passwords using brute-force or credential stuffing attacks, especially when the same password is reused across multiple accounts. Enforcing strong password policies, using multi-factor authentication (MFA), and encouraging the use of password managers are essential steps in protecting both personal and organizational data.",
    "Public Wi-Fi networks are often unsecured, making it easy for attackers to intercept your personal data using techniques like packet sniffing. Without encryption, any information you send—such as login credentials, emails, or credit card details—can be captured by someone on the same network. Cybercriminals may even set up rogue hotspots that mimic legitimate networks to lure users into connecting. To stay safe, avoid accessing sensitive accounts over public Wi-Fi, use a trusted VPN to encrypt your traffic, and ensure websites you visit use HTTPS."
];

const factText = document.getElementById("dynamic-facts");
const nextBtn = document.getElementById("change-facts");

function getRandomFact() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    factText.textContent = facts[randomIndex];
}

// Show one fact on page load
getRandomFact();

// Show new fact on click
nextBtn.addEventListener("click", getRandomFact);