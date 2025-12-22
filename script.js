// Pixelated static background effect
const canvas = document.getElementById('pixel-background');
const ctx = canvas.getContext('2d');

// Adjust these values to change the effect
const pixelSize = 4; // Size of each "pixel" block
const updateInterval = 100; // How fast the static changes (in milliseconds)

// Set canvas size
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Generate random static
function drawStatic() {
    const cols = Math.ceil(canvas.width / pixelSize);
    const rows = Math.ceil(canvas.height / pixelSize);

    for (let x = 0; x < cols; x++) {
        for (let y = 0; y < rows; y++) {
            // Random variation of the teal color #004D40
            const r = Math.floor(Math.random() * 20); // 0-19 (base is 0)
            const g = Math.floor(Math.random() * 77) + 0; // 0-76 (base is 77, so 0x4D)
            const b = Math.floor(Math.random() * 64) + 0; // 0-63 (base is 64, so 0x40)
            ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
            ctx.fillRect(x * pixelSize, y * pixelSize, pixelSize, pixelSize);
        }
    }
}

// Animate the static
setInterval(drawStatic, updateInterval);
drawStatic(); // Initial draw