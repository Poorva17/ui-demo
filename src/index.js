const sayHello = () => {
  alert("Changing text")
};

const button = document.getElementById("button");

button.addEventListener('click', sayHello);