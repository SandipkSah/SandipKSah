function showConfirmation(form) {

  //await request();

  var paragraph = document.getElementById("contactMe");

  paragraph.innerHTML =
    "Thank You, Your response has been recorded <br> I will ,most prolly, text you within few hours";
  paragraph.style.textAlign = "center";
  var contact_title = document.getElementById("contact-me-title");
  contact_title.parentNode.removeChild(contact_title);

  var success = false;
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
    .then((data) => {
      console.log(data);
      success = true;
      console.log("in the fetch", success);
    })
    .catch((error) => console.log("something went wrong", error));

  console.log("at last", success);
}

// const request = async () => {
//   const response = await fetch(
//     "https://formsubmit.co/ajax/sandipsah703@gmail.com",
//     {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//       },
//       body: JSON.stringify({
//         name: "form.name.value",
//         phone: "form.phone.value",
//         email: "form.email.value",
//         company: "form.company.value",
//         message: "form.message.value",
//       }),
//     }
//   )
    
//   const json = await response.json();
//   console.log(json);
// };


