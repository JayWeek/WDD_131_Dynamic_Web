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

const resources = [
  {
    title: "OWASP Top 10",
    description: "Understand the most critical web security risks.",
    link: "https://owasp.org/www-project-top-ten/",
    action: "Visit"
  },
  {
    title: "Khan Academy: Internet Safety",
    description: "Learn safe browsing and privacy basics.",
    link: "https://www.khanacademy.org",
    action: "Watch"
  },
  {
    title: "Cyber Aware",
    description: "UK government-backed security tips for individuals and small businesses.",
    link: "https://www.cyberaware.gov.uk",
    action: "Visit"
  },
  {
    title: "Stay Safe Online",
    description: "National Cyber Security Alliance’s library of best practices.",
    link: "https://staysafeonline.org",
    action: "Visit"
  },
  {
    title: "Cybersecurity YouTube Playlist",
    description: "Quick videos on staying safe online.",
    link: "https://www.youtube.com/results?search_query=cybersecurity+basics",
    action: "Watch"
  },
  {
    title: "Google Safety Center",
    description: "Learn how Google helps keep your information private and safe.",
    link: "https://safety.google",
    action: "Explore"
  },
  {
    title: "Have I Been Pwned",
    description: "Check if your email or password has been exposed in a data breach.",
    link: "https://haveibeenpwned.com",
    action: "Check"
  },
  {
    title: "CISA Cybersecurity",
    description: "Official U.S. government tips and alerts for staying cyber safe.",
    link: "https://www.cisa.gov/cybersecurity",
    action: "Visit"
  }
];

const container = document.querySelector(".resource-grid");

resources.forEach(resource => {
  const card = document.createElement("div");
  card.className = "resource-card";
  card.innerHTML = `
    <h3>${resource.title}</h3>
    <p>${resource.description}</p>
    <a href="${resource.link}" target="_blank">${resource.action}</a>
  `;
  container.appendChild(card);
});

document.getElementById("resource-form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you! Your resource suggestion has been received.");
  this.reset();
});


