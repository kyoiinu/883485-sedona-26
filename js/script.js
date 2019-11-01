  var formIndex = document.querySelector(".form-index");
  var buttonOpen = document.querySelector(".open");

  buttonOpen.addEventListener("click", function(){
    formIndex.classList.toggle("visually-hidden");
    buttonOpen.classList.toggle("close");
  })