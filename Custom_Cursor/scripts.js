const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');

let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;
let speed = 0.15; // Adjust speed for smoothness

let outlineX = 0;
let outlineY = 0;
let outlineSpeed = 0.1; // Slower speed for outline animation

// Function to update cursor positions smoothly
function moveCursor() {
    // Update cursor position (inner dot)
    cursorX += (mouseX - cursorX) * speed;
    cursorY += (mouseY - cursorY) * speed;

    // Move the cursor dot smoothly
    cursorDot.style.left = `${cursorX}px`;
    cursorDot.style.top = `${cursorY}px`;

    // Update outline position with a slower speed (animation effect)
    outlineX += (mouseX - outlineX) * outlineSpeed;
    outlineY += (mouseY - outlineY) * outlineSpeed;

    // Move the cursor outline with trailing effect
    cursorOutline.style.left = `${outlineX}px`;
    cursorOutline.style.top = `${outlineY}px`;

    // Separate animations
    // Scale the dot on hover or interaction (you can adjust this effect)
    cursorDot.style.transform = `translate(-50%, -50%) scale(1.5)`;
    cursorOutline.style.transform = `translate(-50%, -50%) scale(1.5)`;

    // Call the next frame
    requestAnimationFrame(moveCursor);
}

// Track the mouse position
window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// Start the cursor animation loop
moveCursor();