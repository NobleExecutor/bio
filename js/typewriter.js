let textElement = document.getElementById("typewriter");
const messages = [
  "Hello, World! ",
  "Bienvenue sur mon Portfolio! "
];
let currentMessageIndex = 0;
let text = messages[currentMessageIndex];

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
      setTimeout(typeWriterText, 2000);
      return;
    } else if (textIndex === 0 && isTextDeleting) {
      isTextDeleting = false;
      currentMessageIndex = (currentMessageIndex + 1) % messages.length;
      text = messages[currentMessageIndex];
      setTimeout(typeWriterText, 500);
      return;
    }

    textElement.textContent = textContent + (textCursorVisible ? '|' : ' ');
    setTimeout(typeWriterText, isTextDeleting ? 100 : 150);
  }

  typeWriterText();

  setInterval(() => {
    textCursorVisible = !textCursorVisible;
    textElement.textContent = textContent + (textCursorVisible ? '|' : ' ');
  }, 500);
});