const boxContainer = document.getElementById("boxContainer");
const boxesSelect = document.getElementById("boxes");

boxesSelect.addEventListener("change", function () {
  const numberOfBoxes = parseInt(this.value);
  boxContainer.innerHTML = ""; // Clear previous boxes

  for (let i = 1; i <= numberOfBoxes; i++) {
    const box = document.createElement("div");
    box.className = "box";
    box.textContent = i;
    boxContainer.appendChild(box);
  }
});

// COPYRIGHT NOTICE
// Select DOM element
const copyright = document.getElementById("copy");

// Dynamically generate copyright information
copyright.innerHTML =
  "Copyright &copy; " + // Start of the copyright string
  new Date().getFullYear() + // Get the current year
  ` <a href="https://www.gaz41.com">gaz41.com</a>. <span class="copy2">All Rights Reserved</span>`;
