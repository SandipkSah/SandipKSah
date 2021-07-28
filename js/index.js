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

// var paragraph = document.getElementById("contactMe");
// paragraph.innerHTML =
//   "Thank You, Your response has been recorded<br>I will ,most prolly, text you within few hours";
// paragraph.style.textAlign = "center";
// var contact_title = document.getElementById("contact-me-title");
// contact_title.parentNode.removeChild(contact_title);

// async function getData(form) {
//   var success;
//   fetch("https://formsubmit.co/ajax/sandipsah703@gmail.com", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//     },
//     body: JSON.stringify({
//       name: form.name.value,
//       phone: form.phone.value,
//       email: form.email.value,
//       company: form.company.value,
//       message: form.message.value,
//     }),
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//       success = data.success == "false";
//       console.log(
//         "value of var success is lllllllllll",
//         data.success == "false",
//         "dddddddd",
//         success
//       );
//     })
//     .catch((error) => console.log(error));
// }

// function showConfirmation(form) {
//   console.log("entering form ");
//   var success;
//  await getData(form);

//   // await fetch("https://formsubmit.co/ajax/sandipsah703@gmail.com", {
//   //   method: "POST",
//   //   headers: {
//   //     "Content-Type": "application/json",
//   //     Accept: "application/json",
//   //   },
//   //   body: JSON.stringify({
//   //     name: form.name.value,
//   //     phone: form.phone.value,
//   //     email: form.email.value,
//   //     company: form.company.value,
//   //     message: form.message.value,
//   //   }),
//   // })
//   //   .then((response) => response.json())
//   //   .then((data) => {
//   //     console.log(data);
//   //     success = data.success == "false";
//   //     console.log(
//   //       "value of var success is lllllllllll",
//   //       data.success == "false",
//   //       "dddddddd",
//   //       success
//   //     );
//   //   })
//   //   .catch((error) => console.log(error));

//   console.log("the return value of promise", promisereturn);
//   console.log("at last ", success);

//   showConfirmationMessage(success);
// }

//  function showConfirmation(form) {
//   var success;
//    fetch("https://formsubmit.co/ajax/sandipsah703@gmail.com", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//     },
//     body: JSON.stringify({
//       name: form.name.value,
//       phone: form.phone.value,
//       email: form.email.value,
//       company: form.company.value,
//       message: form.message.value,
//     }),
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//       success = (data.success == "false");
//       console.log(
//         "value of var success is lllllllllll",
//         data.success == "false",
//         "dddddddd",
//         success
//       );
//     })
//     .catch((error) => console.log(error));
//     console.log("at last ", success)

//   showConfirmationMessage(success);
// }

// function showConfirmationMessage(success = false) {
//   var paragraph = document.getElementById("contactMe");
//   if (success) {
//     paragraph.innerHTML =
//       "Thank You, Your response has been recorded <br> I will ,most prolly, text you within few hours";
//   } else {
//     paragraph.innerHTML =
//       "Error submitting form. <br> Please message me in my email at sandipsah703@gmail.com";
//   }
//   paragraph.style.textAlign = "center";
//   var contact_title = document.getElementById("contact-me-title");
//   contact_title.parentNode.removeChild(contact_title);
// }

function showConfirmation(form) {
  var paragraph = document.getElementById("contactMe");

  paragraph.innerHTML =
    "Thank You, Your response has been recorded <br> I will ,most prolly, text you within few hours";
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
