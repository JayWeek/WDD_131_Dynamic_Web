// Select DOM elements
const currentYearEl = document.querySelector("#currentyear");
const lastModifiedEl = document.querySelector("#last-Modified");
const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-bar ul");

// Set current year
if (currentYearEl) {
  const today = new Date();
  currentYearEl.textContent = today.getFullYear();
}

// Set last modified date with time and time zone
if (lastModifiedEl) {
  const lastmod = new Date(document.lastModified);
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
    timeZoneName: 'short'
  };
  lastModifiedEl.textContent = `Last modification: ${lastmod.toLocaleString(undefined, options)}`;
}

// Hamburger menu toggle
if (hamburger && navList) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("show");
    navList.classList.toggle("show");
  });
}
