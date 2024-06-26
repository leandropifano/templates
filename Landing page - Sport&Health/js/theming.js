//Obtengo elementos HTML por ID y agrego listeners:
let $color = document.getElementById('theme-color');
$color.addEventListener('onchange', seteo_color);

//Resetear los select boxes
function seteo_selects(){
  document.getElementById('theme-color').selectedIndex = 0;
}

//Cambiar los colores del tema
function seteo_color(){
  let color_elegido = document.getElementById('theme-color').value;
  switch (color_elegido){
    case "color-00":
      document.documentElement.style.setProperty('--first-color', '#333c87');
      document.documentElement.style.setProperty('--second-color', '#000080');
      document.documentElement.style.setProperty('--third-color', '#5dc1b9');
    break;
    case "color-01":
      document.documentElement.style.setProperty('--first-color', '#a5a5a5');
      document.documentElement.style.setProperty('--second-color', '#665d5d');
      document.documentElement.style.setProperty('--third-color', '#b0041c');
    break;
    case "color-02":
      document.documentElement.style.setProperty('--first-color', '#b0041c');
      document.documentElement.style.setProperty('--second-color', '#d52d4e');
      document.documentElement.style.setProperty('--third-color', '#d597ae');
    break;
    case "color-03":
      document.documentElement.style.setProperty('--first-color', '#ffa420');
      document.documentElement.style.setProperty('--second-color', '#e25f23');
      document.documentElement.style.setProperty('--third-color', '#cc7722');
    break;
  }
}