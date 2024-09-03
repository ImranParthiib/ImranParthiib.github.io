const welcomeText = "Hello, World!";
const delay = 100;

// Function to type out text one character at a time for welcome text
function typeWelcomeText(text) {
  const element = document.getElementById("welcome-text");
  let index = 0;

  function addChar() {
    if (index < text.length) {
      element.innerHTML += text.charAt(index);
      index++;
      setTimeout(addChar, delay);
    } else {
      setTimeout(() => {
        element.innerHTML = "";
        index = 0;
        addChar();
      }, 2000); // Longer pause before restarting
    }
  }

  addChar();
}

const texts = [
  "I'm a Frontend Developer & Programming Enthusiast 🚀",
  "Pursuing Computer Science & Engineering",
  "I'm a Tech Writer & Content Creator 👨‍💻",
];
const typingSpeed = 50;
const deletingSpeed = 30;
const delayAfterTyping = 1500;

let currentTextIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeDescription() {
  const currentText = texts[currentTextIndex];
  const displayedText = isDeleting
    ? currentText.slice(0, charIndex--)
    : currentText.slice(0, charIndex++);
  document.getElementById("descriptive-text").innerHTML = displayedText;

  if (!isDeleting && charIndex === currentText.length) {
    isDeleting = true;
    setTimeout(typeDescription, delayAfterTyping);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    currentTextIndex = (currentTextIndex + 1) % texts.length;
    setTimeout(typeDescription, typingSpeed);
  } else {
    setTimeout(typeDescription, isDeleting ? deletingSpeed : typingSpeed);
  }
}

// Ensure DOM is fully loaded before running the typing animations
document.addEventListener("DOMContentLoaded", function () {
  typeWelcomeText(welcomeText);
  typeDescription();
});
