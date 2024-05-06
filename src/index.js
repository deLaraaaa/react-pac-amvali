import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.jsx";



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

  var textElements = document.querySelectorAll("text");
  for (var i = 0; i < textElements.length; i++) {
    textElements[i].style.pointerEvents = "none";
  }

  document.addEventListener("DOMContentLoaded", function () {
    var togglePassword = document.getElementById("togglePassword");
    togglePassword.addEventListener("click", function () {
      // Toggle the image
      if (this.src.endsWith("view.png")) {
        this.src = "/img/hide.png";
      } else {
        this.src = "/img/view.png";
      }

      // Toggle the password visibility
      var password = document.getElementById("password");
      if (password.type === "password") {
        password.type = "text";
      } else {
        password.type = "password";
      }
    });
  });