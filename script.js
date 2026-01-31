// Jaar in de footer
(function () {
  var yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
})();

// Simpele form-validatie op de contactpagina
(function () {
  var form = document.getElementById("contact-form");
  var message = document.getElementById("form-message");

  if (!form || !message) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    var naam = (form.naam && form.naam.value) ? form.naam.value.trim() : "";
    var email = (form.email && form.email.value) ? form.email.value.trim() : "";
    var bericht =
      (form.bericht && form.bericht.value) ? form.bericht.value.trim() : "";

    if (!naam || !email || !bericht) {
      message.textContent =
        "Vul alle verplichte velden in (*) voordat je verzendt.";
      message.style.color = "#e06623";
      return;
    }

    message.textContent =
      "Bedankt voor je bericht! Thomas neemt zo snel mogelijk contact op.";
    message.style.color = "#15803d";
    form.reset();
  });
})();

// Mobiele navigatie (hamburger) met betere toegankelijkheid
(function () {
  var navToggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".nav");

  if (!navToggle || !nav) return;

  // Zorg dat nav een id heeft voor aria-controls
  if (!nav.id) {
    nav.id = "hoofdmenu";
  }
  navToggle.setAttribute("aria-controls", nav.id);
  navToggle.setAttribute("aria-expanded", "false");

  navToggle.addEventListener("click", function () {
    var isOpen = nav.classList.toggle("nav-open");
    navToggle.classList.toggle("is-open", isOpen);
    navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  // Sluit menu na klik op een link op mobiel
  nav.addEventListener("click", function (event) {
    var target = event.target;
    if (
      target.tagName &&
      target.tagName.toLowerCase() === "a" &&
      window.innerWidth < 768
    ) {
      nav.classList.remove("nav-open");
      navToggle.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
})();
