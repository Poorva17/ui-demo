function sayHello() {
  alert("Changing text")
}

const button = document.getElementById("button");

button.addEventListener('click', () => {
  sayHello();
  $.ajax({
    url: "./test.txt",
    success: function(result){
      $("#demo").html(result);
    }});
});