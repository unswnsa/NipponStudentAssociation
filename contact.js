emailjs.init("YOUR_PUBLIC_KEY");

function sendContact(team) {
  const name = document.querySelector("input[placeholder='Your name']").value;
  const email = document.querySelector("input[placeholder='Your email']").value;
  const message = document.querySelector("textarea").value;

  emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
    from_name: name,
    from_email: email,
    message: message,
    team: team,
    to_email: "nsa1996@gmail.com"
  })
  .then(() => {
    alert("Message sent successfully!");
  })
  .catch(console.error);
}
