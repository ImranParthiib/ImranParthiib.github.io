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
