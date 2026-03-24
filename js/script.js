let textElement = document.getElementById("typewriter");
const text = "Hello, World! ";
let textContent = '';
let textIndex = 0;
let isTextDeleting = false;
let textCursorVisible = true;

document.addEventListener("DOMContentLoaded", function() {
    function typeWriterText() {
    if (!isTextDeleting && textIndex < text.length) {
        textContent = text.slice(0, textIndex + 1);
        textIndex++;
    } else if (isTextDeleting && textIndex > 0) {
        textContent = text.slice(0, textIndex - 1);
        textIndex--;
    } else if (textIndex === text.length) {
        isTextDeleting = true;
        setTimeout(typeWriterText, 5000);
        return;
    } else if (textIndex === 0) {
        isTextDeleting = false;
    }
    textElement.textContent = textContent + (textCursorVisible ? '|' : ' ');
    setTimeout(typeWriterText, isTextDeleting ? 150 : 300);
}

typeWriterText();

setInterval(() => {
    textCursorVisible = !textCursorVisible;
    textElement.textContent = textContent + (textCursorVisible ? '|' : ' ');
}, 500);
})