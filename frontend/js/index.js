var form = document.getElementById("contact-form");
async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("my-form-status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    status.innerHTML = "Merci beaucoup, nous avons bien reçu votre message";
    form.reset()
  }).catch(error => {
    status.innerHTML = "Nous sommes désolés, une erreur s'est produite lors de l'envoie du message..."
  });
}
form.addEventListener("submit", handleSubmit)