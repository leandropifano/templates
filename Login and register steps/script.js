//Obtener elemento HTML por ID y agregar listener:
let $color = document.getElementById('theme-color');
$color.addEventListener('onchange', seteo_color);
let $boton = document.getElementById('button-send');
$boton.addEventListener('onclick', error_login);

//Reseteo los select boxes
function seteo_selects(){
  document.getElementById('theme-color').selectedIndex = 0;
}

//Cambiar los colores del tema
function seteo_color(){
  let color_elegido = document.getElementById('theme-color').value;
  switch (color_elegido){
    case "color-01":
      document.documentElement.style.setProperty('--first-color', '#2d572c');
      document.documentElement.style.setProperty('--second-color', '#acc233');
      document.documentElement.style.setProperty('--third-color', '#d6e199');
    break;
    case "color-02":
      document.documentElement.style.setProperty('--first-color', '#5dc1b9');
      document.documentElement.style.setProperty('--second-color', '#000080');
      document.documentElement.style.setProperty('--third-color', '#333c87');
    break;
    case "color-03":
      document.documentElement.style.setProperty('--first-color', '#ffa420');
      document.documentElement.style.setProperty('--second-color', '#cc7722');
      document.documentElement.style.setProperty('--third-color', '#e25f23');
    break;
  }
}
//Error de LOGIN
function error_login(){
  document.getElementById('user-error').style.display = 'block';
  document.getElementById('passwd-error').style.display = 'block';
  document.getElementById('user').style.border = "2px dotted red";
  document.getElementById('passwd').style.border = "2px dotted red";
}
//Error de REGISTRO
function error_register(){
  document.getElementById('name').placeholder = "Nombre Inválido";
  document.getElementById('name').style.border = "2px dotted red";
  document.getElementById('user').placeholder = "Usuario Inválido";
  document.getElementById('user').style.border = "2px dotted red";
  document.getElementById('email').placeholder = "email Inválido";
  document.getElementById('email').style.border = "2px dotted red";
}