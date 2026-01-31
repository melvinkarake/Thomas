// script.js

// Jaar in footer
(function () {
  var yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
})();

// Contactformulier (alleen waar het bestaat)
(function () {
  var form = document.getElementById("contact-form");
  var message = document.getElementById("form-message");

  if (!form || !message) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    var naam = (form.naam && form.naam.value || "").trim();
    var email = (form.email && form.email.value || "").trim();
    var bericht = (form.bericht && form.bericht.value || "").trim();

    if (!naam || !email || !bericht) {
      message.textContent = "Vul alle verplichte velden in (*) voordat je verzendt.";
      message.style.color = "#e06623";
      return;
    }

    message.textContent = "Bedankt voor je bericht! Thomas neemt zo snel mogelijk contact op.";
    message.style.color = "#15803d";
    form.reset();
  });
})();

// Mobiele navigatie
(function () {
  var navToggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".nav");

  if (!navToggle || !nav) return;

  navToggle.addEventListener("click", function () {
    nav.classList.toggle("nav-open");
  });
})();
