let form = document.getElementById("contact-form");
let inputName = document.getElementById("name");
let botonHola = document.getElementById("hello");
let botonAdios = document.getElementById("bye");
let sendButton = document.getElementById("send-button");

botonHola.addEventListener("click", () => {
    hola("Manuel", 17);
});

botonAdios.addEventListener("click", () => {
    adios(inputName.value);
});

sendButton.addEventListener("click", () => {

    let formData = new FormData(form);

    let date = new Date();

    console.log(date.getFullYear());
});

function hola() {
    alert("No puedes pasar");
}

let adios = () => alert("No puedes pasar");
