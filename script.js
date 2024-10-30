const formularioContacto = document.getElementById("contact-form");
const submitButton = document.getElementById("contact-submit");

function submitContactEvent(element){
    element.preventDetault();
    console.log("formulario enviado")
}
if (formularioContacto){
    formularioContacto.addEventListener("submit", submitContactEvent)
}
