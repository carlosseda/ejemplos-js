export default (() => {


  // Podemos escuchar un evento personalizado que se ha creado en form.js refiriéndonos a él por el nombre que le dimos,
  // en este caso "message". 
  document.addEventListener("message", (event => {

    const notification = document.querySelector("#notification");
    const notificationText = document.querySelector("#notification-message");

    // Podemos utilizar los parámetros que se han enviado en el evento, escribiendo event.detail y a continuación el nombre del parámetro.
    notificationText.innerHTML = event.detail.text;
    notification.classList.add(event.detail.type);
    notification.classList.add("active");

    setTimeout(() => {
      notification.classList.remove("active");
      notification.classList.remove(event.detail.type);
    }, 5000);
  }));
  
})();