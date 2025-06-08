// Select DOM elements
const currentYearEl = document.querySelector("#currentyear");
const lastModifiedEl = document.querySelector("#last-Modified");

// Set current year
if (currentYearEl) {
  const today = new Date();
  currentYearEl.textContent = today.getFullYear();
}

// Set last modified date with time and time zone
if (lastModifiedEl) {
  const lastmod = new Date(document.lastModified);
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    timeZoneName: "short",
  };
  lastModifiedEl.textContent = `Last modification: ${lastmod.toLocaleString(undefined, options)}`;
}



const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];



// select DOM element
const select = document.getElementById("product");

//Create function
function myproduct(item){
    const option = document.createElement("option");
    option.textContent = item.name;
    option.value = item.id
    select.appendChild(option);
}

products.forEach(myproduct);
