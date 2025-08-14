// Function to generate a random hex color

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Select the button
const button = document.getElementById('colorButton');

// Add click event listener to the button
button.addEventListener('click', () => {
  // Change the background color of the body to a random color
  document.body.style.backgroundColor = getRandomColor();
});
