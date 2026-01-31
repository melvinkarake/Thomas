// script.js

// Huidig jaar in de footer
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Eenvoudige front-end afhandeling van contactformulier
const form = document.getElementById("contact-form");
const message = document.getElementById("form-message");

if (form && message) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const naam = form.naam.value.trim();
    const email = form.email.value.trim();
    const bericht = form.bericht.value.trim();

    if (!naam || !email || !bericht) {
      message.textContent = "Vul alle verplichte velden in (*) voordat je verzendt.";
      message.style.color = "#e06623"; // oranje
      return;
    }

    message.textContent = "Bedankt voor je bericht! Thomas neemt zo snel mogelijk contact op.";
    message.style.color = "#15803d"; // groen
    form.reset();
  });
}

// Mobiele navigatie togglen
const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    nav.classList.toggle("nav-open");
  });
}
