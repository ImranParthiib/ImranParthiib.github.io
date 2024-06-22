document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    emailjs.sendForm("service_yapjgxo", "template_pwl93u5", this).then(
      function (response) {
        console.log("Email sent!", response.status, response.text);
        alert("Email sent successfully!");
        document.getElementById("contact-form").reset(); // Reset the form
      },
      function (error) {
        console.error("Error sending email:", error);
        alert("Oops! Something went wrong.");
      }
    );
  });
