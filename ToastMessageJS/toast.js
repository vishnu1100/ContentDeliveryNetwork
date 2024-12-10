
function getRandomColor() {
  // Generate a random hex color
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

function showtoast(message) {
  const color1 = getRandomColor();
  const color2 = getRandomColor();
  
  Toastify({
    text: message,
    className: "info",
    style: {
      background: `linear-gradient(to right, ${color1}, ${color2})`,
    },
    duration: 3000, // Optional: Customize toast duration
    close: true,    // Optional: Add a close button
  }).showToast();
}
