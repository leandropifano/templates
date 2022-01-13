//Obtener elemento HTML por ID y agregar listener:
let $color = document.getElementById('theme-color');
let $img = document.getElementById('theme-img');
$color.addEventListener('onchange', seteo_color);
$img.addEventListener('onchange', seteo_img);

//Reseteo los select boxes
function seteo_selects(){
  document.getElementById('theme-color').selectedIndex = 0;
  document.getElementById('theme-img').selectedIndex = 0;
}

//Cambiar los colores del tema
function seteo_color(){
  let color_elegido = document.getElementById('theme-color').value;
  switch (color_elegido){
    case "color-01":
      document.documentElement.style.setProperty('--first-color', '#acc233');
      document.documentElement.style.setProperty('--second-color', '#d6e199');
      document.documentElement.style.setProperty('--third-color', '#2d572c');
    break;
    case "color-02":
      document.documentElement.style.setProperty('--first-color', '#333c87');
      document.documentElement.style.setProperty('--second-color', '#000080');
      document.documentElement.style.setProperty('--third-color', '#5dc1b9');
    break;
    case "color-03":
      document.documentElement.style.setProperty('--first-color', '#ffa420');
      document.documentElement.style.setProperty('--second-color', '#e25f23');
      document.documentElement.style.setProperty('--third-color', '#cc7722');
    break;
  }
}
//Cambiar la imagen de cabecera
function seteo_img(){
  let img_elegida = document.getElementById('theme-img').value;
  switch (img_elegida){
    case "img-01":
      document.documentElement.style.setProperty('--header-img', "url('images/header-01.png')");
    break;
    case "img-02":
      document.documentElement.style.setProperty('--header-img', "url('images/header-02.png')");
    break;
    case "img-03":
      document.documentElement.style.setProperty('--header-img', "url('images/header-03.png')");
    break;
    }
}
