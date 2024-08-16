const parallax = document.getElementById("header");

window.addEventListener("scroll", function() {
  let offset = window.pageYOffset;
  parallax.style.backgroundPositionY = offset * 1 + "px";
})

// Función para abrir la pestaña seleccionada
function opentab(tabname) {
  // Eliminar la clase active-link de todos los enlaces
  var tablinks = document.getElementsByClassName('tab-links');
  for (var i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active-link");
  }
  
  // Ocultar todos los contenidos de las pestañas
  var tabcontents = document.getElementsByClassName('tab-contents');
  for (var j = 0; j < tabcontents.length; j++) {
    tabcontents[j].classList.remove("active-tab");
  }
  
  // Añadir la clase active-link al enlace seleccionado
  event.currentTarget.classList.add("active-link");
  
  // Mostrar el contenido de la pestaña seleccionada
  document.getElementById(tabname).classList.add("active-tab");
}

