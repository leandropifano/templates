//LOADER WRAPPER----------------------------------------------------------------------------
function loading(){
    //el loader esta visible y lo oculto cuando la pagina esta cargada
    document.getElementById("loader-wrapper").style.opacity = "0";
    document.getElementById("loader-wrapper").style.zIndex = "0";
}
//Agrego el listener
window.addEventListener("load", loading);
//------------------------------------------------------------------------------------------
//CERRAR LOS MODALS al clickear fuera de ellos----------------------------------------------
function ocultar_modal () {
  var modals = document.querySelectorAll(".modalDialog");
  for (var i = 0; i < modals.length; i++) {
    if (window.event.target == modals[i]) {
      window.location.replace('#closemodal');
    }
  }
}
//Agrego el listener
window.addEventListener('click', ocultar_modal)
//------------------------------------------------------------------------------------------
//TITLE SLIDES------------------------------------------------------------------------------
function deslizar() {
  var deslizar = document.querySelectorAll(".deslizar");
  //Tomo la altura de la pantalla, la distancia del item a mover con respecto a ella
  //y la altura a la que el elemento se va a hacer visible
  for (var i = 0; i < deslizar.length; i++) {
    var windowHeigth = window.innerHeight;
    var elementTop = deslizar[i].getBoundingClientRect().top;
    var elementVisible = 200;
    //Chequeo y activo el item
    if (elementTop < windowHeigth - elementVisible) {
      deslizar[i].classList.add("active");
    } else {
      deslizar[i].classList.remove("active");
    }
  }
}
//Agrego Listener
window.addEventListener("scroll", deslizar);
//------------------------------------------------------------------------------------------
//SROLLING FUNCTIONS------------------------------------------------------------------------
function scroll_to(){
  //elementos de referencia
  var ref_top = document.getElementById('top');
  var pos_us = document.getElementById('us').getBoundingClientRect();
  //----------------------------------------------------------------------
  //Cuando el logo del header y el de seccion us ya no se ven, muestro el icono del navbar
  if (pos_us.bottom + 200 <= window.innerHeight ){
    document.getElementById('navbar-ico').style.opacity = "92%";
  }//chequeo para ocultarlo cuando el logo grande esta a la vista
  else if (pos_us.bottom >= window.innerHeight){
    document.getElementById('navbar-ico').style.opacity = "0%";
 }
  //----------------------------------------------------------------------
  //cuando pasamos la altura definida, muestro el boton
  if (ref_top.getBoundingClientRect().top + 100 < window.innerHeight - 1000){
    document.getElementById('btn_subir').style.display = 'block';
  }
  else{
    //lo vuelvo a ocultar
    document.getElementById('btn_subir').style.display = 'none';
  }
}
//Agrego Listener
document.body.addEventListener("scroll", scroll_to);
//-----------------------------------------------------------------------------------
