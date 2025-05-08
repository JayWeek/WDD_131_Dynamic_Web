// Select DOM elements for output
const currentyear = document.querySelector("#currentyear");
const lastmodification = document.querySelector("#last-Modified");

//Create date object
const today = new Date();
const lastmod = new Date(document.lastModified);

//output to html
currentyear.innerHTML = `${today.getFullYear()}`;

lastmodification.innerHTML = `Last modification: ${lastmod}`;