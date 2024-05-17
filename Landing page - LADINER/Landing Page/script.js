//Hacer aparecer los titulos---------------------------------------------------------------
function aparecer() {
  var deslizar = document.querySelectorAll(".aparecer");
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
window.addEventListener("scroll", aparecer);
//-----------------------------------------------------------------------------------
//Manejar scrolleo, para mover el navbar y el boton de subir
function scroll_to(){
  //elementos de referencia
  var ref_top = document.getElementById('top');
  var ref_navbar = document.getElementById('navbar');
  //----------------------------------------------------------------------
  //tomo la distancia del elemento who para pocisionar el navbar
  var pos_who = document.getElementById('who').getBoundingClientRect();
  //si esta a la altura justa, lo fijo
  if (pos_who.top <= window.innerHeight - 645){
    ref_navbar.style.position = "fixed";
    ref_navbar.style.top = "0";
    //muevo el who hacia abajo, evitando que al fijar el nabvar se suba un poco (molesta a la vista)
    document.getElementById('who').style.padding = "145px 0 80px 0";
  }//chequeo para reposicionar el navbar a su posicion original
  else if (pos_who.bottom >= window.innerHeight - 500){
    ref_navbar.style.position = "relative";
    ref_navbar.style.top = "1px";
    //le pongo su padding original
    document.getElementById('who').style.padding = "80px 0";
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
document.body.addEventListener("onscroll", scroll_to);
//-----------------------------------------------------------------------------------

//Obtengo elemento HTML por ID y agrego listener:
let $color = document.getElementById('theme-color');
let $img = document.getElementById('theme-img');
$color.addEventListener('onchange', seteo_color);
$img.addEventListener('onchange', seteo_img);

//Resetear los select boxes
function seteo_selects(){
  document.getElementById('theme-color').selectedIndex = 0;
  document.getElementById('theme-img').selectedIndex = 0;
}

//Cambiar los colores del tema
function seteo_color(){
  let color_elegido = document.getElementById('theme-color').value;
  switch (color_elegido){
    case "color-01":
      document.documentElement.style.setProperty('--first-color', '#316ba9');
      document.documentElement.style.setProperty('--second-color', '#103566');
      document.documentElement.style.setProperty('--third-color', '#88a7d0');
    break;
    case "color-02":
      document.documentElement.style.setProperty('--first-color', '#014ba0');
      document.documentElement.style.setProperty('--second-color', '#2956b2');
      document.documentElement.style.setProperty('--third-color', '#00aae4');
    break;
    case "color-03":
      document.documentElement.style.setProperty('--first-color', '#2956b2');
      document.documentElement.style.setProperty('--second-color', '#316ba9');
      document.documentElement.style.setProperty('--third-color', '#748aa1');
    break;
  }
}
//Cambiar la imagen de cabecera
function seteo_img(){
  let img_elegida = document.getElementById('theme-img').value;
  var header = document.querySelectorAll('.header');
  header[0].style.background = "var(--header-img) no-repeat center top"
  header[0].style.backgroundSize = "cover";
  switch (img_elegida){
    case "img-01":
      header[0].style.background = "linear-gradient(#eee, var(--first-color))";
    break;
    case "img-02":
      document.documentElement.style.setProperty('--header-img', "url('images/header-01.png')");
    break;
    case "img-03":
      document.documentElement.style.setProperty('--header-img', "url('images/header-02.png')");
    break;
    }
}
