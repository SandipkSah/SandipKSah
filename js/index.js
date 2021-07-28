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

function showConfirmation() {
  console.log("formmm");
  // form.action = "https://formsubmit.co/sandipsah703@gmail.com";
  // form.method = "POST";
  var paragraph = document.getElementById("contactMe");
  paragraph.textContent = "Thank You, Your response has been recorded";
  paragraph.style.textAlign = "center";
  var contact_title = document.getElementById("contact-me-title");
  contact_title.parentNode.removeChild(contact_title);



  postData('https://formsubmit.co/sandipsah703@gmail.com', {
    _captcha: "false",
    name: "gjdfljf",
    company: "gjlssgj",
    email: "ssah@jacobs-university.de",
    phone: "jfdlj",
    message: "gldfkjgd"
    })
  .then(data => {
    console.log(data); // JSON data parsed by `data.json()` call
  });


}



// Example POST method implementation:
async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}


