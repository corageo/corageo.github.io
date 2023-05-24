$(document).ready(function () {
  $("form").submit(handleSubmit);
});

async function handleSubmit(event) {
  event.preventDefault();

  let msg = $('#msg').val();
  let email = $('#email').val();

  let emailMsg = {
    systemEmail: "corageosk@gmail.com",
    contactEmail: email,
    message: msg
  }

  let response = await fetch("https://emailsenderitweek.azurewebsites.net/api/ContactForm", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(emailMsg),
  });

  let prevText = document.getElementById("sbtn").innerHTML;
  if (response.status === 200) {
    const res = await response.json();
    document.getElementById("sbtn").innerHTML = res;
    await new Promise(r => setTimeout(r, 2500));
    document.getElementById("sbtn").innerHTML = prevText;
    if (res === 'Email bol odoslaný') document.getElementById("contactForm").reset();
  }
  else {
    document.getElementById("sbtn").innerHTML = "Odoslanie zlyhalo";
    await new Promise(r => setTimeout(r, 2500));
    document.getElementById("sbtn").innerHTML = prevText;
  }

}
