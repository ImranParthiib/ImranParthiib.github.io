// document
//   .getElementById("contact-form")
//   .addEventListener("submit", function (event) {
//     event.preventDefault();
//     emailjs.sendForm("service_yapjgxo", "template_pwl93u5", this).then(
//       function (response) {
//         console.log("Email sent!", response.status, response.text);
//         alert("Email sent successfully!");
//         document.getElementById("contact-form").reset(); // Reset the form
//       },
//       function (error) {
//         console.error("Error sending email:", error);
//         alert("Oops! Something went wrong.");
//       }
//     );
//   });

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    var formData = new FormData(this);

    fetch(this.action, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    })
      .then(function (response) {
        if (response.ok) {
          alert("Your message has been sent successfully!");
          document.getElementById("contact-form").reset();
        } else {
          alert("Failed to send your message. Please try again.");
        }
      })
      .catch(function (error) {
        alert("Failed to send your message. Please try again.");
      });
  });
