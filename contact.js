emailjs.init("yNbmZ_-99rpJS1Gim");

function sendContact(team) {
  const name = document.querySelector("input[placeholder='Your name']").value;
  const email = document.querySelector("input[placeholder='Your email']").value;
  const message = document.querySelector("textarea").value;

  emailjs.send("service_l2a7iil", "template_pe74yla", {
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
