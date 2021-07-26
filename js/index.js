const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav-link");

navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
  });
});

function showConfirmation(form) {
  console.log("formmm");
  form.action = "https://formsubmit.co/sandipsah703@gmail.com";
  form.method = "POST";
  var paragraph = document.getElementById("contactMe");
  paragraph.textContent = "Thank You, Your response has been recorded";
  paragraph.style.textAlign = "center";
  var contact_title = document.getElementById("contact-me-title");
  contact_title.parentNode.removeChild(contact_title);

}
