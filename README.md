# 🎨 Random Background Color Changer

A simple web application that changes the background color of the webpage to a random color every time you click the button.

## Features
- Generates a random hex color code on each button click.
- Smooth transition effect when the background color changes.
- Clean and responsive UI designed with CSS.
- Button hover effect for better interactivity.

## Project Structure
```
.
├── index.html      # HTML file with page structure, styles, and button
└── script.js       # JavaScript file with color-changing logic
```

## How It Works
1. The button with ID `colorButton` listens for click events.
2. When clicked, the `getRandomColor()` function is called.
3. `getRandomColor()` creates a random hex color string like `#A1B2C3`.
4. The body's background color style is updated with the new random color.
5. CSS transition smoothly animates the color change.

## Usage
1. Clone or download the repository:
   ```
   git clone https://github.com/harshverma370/random-background-changer.git
   ```
2. Navigate to the project directory:
   ```
   cd random-background-changer
   ```
3. Open the `index.html` file in any modern web browser.

## Code Snippet

**script.js**
```
// Function to generate a random hex color
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Select the button element
const button = document.getElementById('colorButton');

// Add event listener to change background color on click
button.addEventListener('click', () => {
  document.body.style.backgroundColor = getRandomColor();
});
```

## Browser Compatibility
Works on all modern browsers that support JavaScript and CSS transitions including Chrome, Firefox, Safari, Edge, and Opera.

## License
This project is licensed under the MIT License.

---

⭐ If you find this project useful, please consider giving it a star on GitHub!
```

