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
  // console.log("formmm");
  // form.action = "https://formsubmit.co/sandipsah703@gmail.com";
  // form.method = "POST";
  var paragraph = document.getElementById("contactMe");
  paragraph.textContent = "Thank You, Your response has been recorded";
  paragraph.style.textAlign = "center";
  var contact_title = document.getElementById("contact-me-title");
  contact_title.parentNode.removeChild(contact_title);
  //console.log("999999999999", form.name.value);

  const submittedData = {
    name: form.name.value,
    phone: form.phone.value,
    email: form.email.value,
    company: form.company.value,
    message: form.message.value,
    _captcha: false,
  };

  console.log("the submitted form values are", submittedData);

  fetch("https://formsubmit.co/ajax/sandipsah703@gmail.com", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: "FormSubmit",
      message: "I'm from Devro LABS",
    }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));

  // var xhr = new XMLDocument();
  // xhr.open(
  //   "POST",
  //   `https://formsubmit.co/sandipsah703@gmail.com?name=${submittedData.name}&phone=${submittedData.phone}&email=${submittedData.email}&company=${submittedData.company}&message=${submittedData.message}&_captcha=${submittedData._captcha}`,
  //   true
  // );

  // xhr.onload = function () {
  //   console.log("printing response------------", this.responseText);
  // };
  // console.log("thennnnnnnnnnnnnnnnnnnnnnnnn");
  // The post method is yet to be implemented with xhr



  
  // postData("https://formsubmit.co/sandipsah703@gmail.com", {
  //   "_captcha": "false",
  //   "name": "gjdfljf",
  //   "company": "gjlssgj",
  //   "email": "ssah@jacobs-university.de",
  //   "phone": "jfdlj",
  //   "message": "gldfkjgd",
  // })
}
