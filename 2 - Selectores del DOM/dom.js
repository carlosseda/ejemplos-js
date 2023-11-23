export default (() => {

  console.log(document.getElementById("menu-button"));
  console.log(document.querySelector("#menu-button"));
  console.log(document.querySelectorAll(".menu-item"));
  console.log(document.getElementsByClassName("menu-item"));
  console.log(document.getElementsByTagName("li"));
  console.log(document.getElementsByName("menu-item"));
  console.log(document.querySelector("li:nth-child(2)"));

})();