export default (() => {

  const sendButton = document.querySelector("#send-button");
  const nameInput = document.querySelector("#name-input");

  sendButton?.addEventListener("click", () => {

    let name = nameInput.value;

    if (name) {
      // Podemos crear un evento personalizado con dispatchEvent y new CustomEvent que podrá ser escuchado 
      // por otros archivos js y utilizarlo para enviarles datos. 
      // En este caso, el evento se llamará "message" y enviará dos parámetros: "text" y "type".
      document.dispatchEvent(new CustomEvent('message', {
        detail: {
          text: 'Formulario enviado correctamente',
          type: 'success'
        }
      }));
    } else {
      document.dispatchEvent(new CustomEvent('message', {
        detail: {
          text: 'Por favor, rellene el formulario',
          type: 'error'
        }
      }));
    }
  });
})();
