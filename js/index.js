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
  var paragraph = document.getElementById("contactMe");
  paragraph.textContent = "Thank You, Your response has been recorded <br> I will ,prolly, text you within few hours ";
  paragraph.style.textAlign = "center";
  var contact_title = document.getElementById("contact-me-title");
  contact_title.parentNode.removeChild(contact_title);


  fetch("https://formsubmit.co/ajax/sandipsah703@gmail.com", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: form.name.value,
      phone: form.phone.value,
      email: form.email.value,
      company: form.company.value,
      message: form.message.value,
    }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
}
