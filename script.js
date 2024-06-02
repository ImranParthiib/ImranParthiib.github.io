const welcomeText = "Welcome Coders!";
const descriptionText = "I'm a Full-Stack Developer & Software Engineer";
const delayW = 500; // Milliseconds between each character
const delayD = 100; // Milliseconds between each character

// Function to type out text one character at a time for welcome text
function typeWelcomeText(text) {
  const element = document.getElementById("welcome-text");
  let index = 0;

  function addChar() {
    if (index < text.length) {
      element.textContent += text.charAt(index);
      index++;
      setTimeout(addChar, delayW);
    } else {
      // Reset the index to loop back to the beginning of the text
      index = 0;
      element.textContent = "";
      setTimeout(addChar, delayW);
    }
  }

  addChar();
}

// Function to type out text one character at a time for description text
function typeDescriptionText(text) {
  const element = document.getElementById("description-text");
  let index = 0;

  function addChar() {
    if (index < text.length) {
      element.textContent += text.charAt(index);
      index++;
      setTimeout(addChar, delayD);
    } else {
      // Reset the index to loop back to the beginning of the text
      index = 0;
      element.textContent = "";
      setTimeout(addChar, delayD);
    }
  }

  addChar();
}

// Call the functions to type out the welcome and description text
typeWelcomeText(welcomeText);
typeDescriptionText(descriptionText);

// form control
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Form submitted successfully!");
});
