function copyEmail() {
    const email = "rquerodesign@gmail.com";
    navigator.clipboard.writeText(email)
      .then(() => {
        console.log("Email copied to clipboard");  // Success message
        document.getElementById("success-message").style.display = "block";

        //fade out
        setTimeout(() => { document.getElementById("success-message").style.display = "none";}, 3000);

      })

      .catch(err => {
        console.error("Failed to copy email", err);  // Error handling
      });
  }