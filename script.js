const welcomeText = "Hello,😎 World!";
const delay = 500; // Milliseconds between each character

// Function to type out text one character at a time for welcome text
function typeWelcomeText(text) {
  const element = document.getElementById("welcome-text");
  let index = 0;

  function addChar() {
    if (index < text.length) {
      element.textContent += text.charAt(index);
      index++;
      setTimeout(addChar, delay);
    } else {
      setTimeout(() => {
        element.textContent = "";
        index = 0;
        addChar();
      }, delay); // Pause before restarting
    }
  }

  addChar();
}

// Call the functions to type out the welcome and description text
typeWelcomeText(welcomeText);

//
const texts = [
  "I'm a Frontend Developer & Programming Enthusiast 🚀",
  "Pursuing Computer Science & Engineering",
  "I'm a Tech Writer & Content Creator 👨‍💻 ",
];
const typingSpeed = 150;
const deletingSpeed = 100;
const delayAfterTyping = 800;

let currentTextIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const currentText = texts[currentTextIndex];
  const displayedText = isDeleting
    ? currentText.slice(0, charIndex--)
    : currentText.slice(0, charIndex++);
  document.getElementById("descriptive-text").textContent = displayedText;

  if (!isDeleting && charIndex === currentText.length) {
    isDeleting = true;
    setTimeout(type, delayAfterTyping);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    currentTextIndex = (currentTextIndex + 1) % texts.length;
    setTimeout(type, typingSpeed);
  } else {
    setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
  }
}

document.addEventListener("DOMContentLoaded", type);
