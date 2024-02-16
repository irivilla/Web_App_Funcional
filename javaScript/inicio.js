const imagenes = document.querySelectorAll(".imagen_tarjeta");
const ids = [document.getElementById('item1'),document.getElementById('item2'),document.getElementById('item3'),document.getElementById('item4')];
const btns = [document.getElementById('btn1'),document.getElementById('btn2'),document.getElementById('btn3'),document.getElementById('btn4')];
let index=0;
let position=0;
let scaled = [false,true,true,true];
let scale = 0;
let fechasids = [document.getElementById('fecha_1'),document.getElementById('fecha_2'),document.getElementById('fecha_3'),document.getElementById('fecha_4')];
let fechas = [['Hoy','Hoy','Ayer','Ayer'],
              ['Hoy','Hoy','Hoy','Hoy'],
              ['Hoy','Ayer','Ayer','Ayer'],
              ['Ayer','Ayer','Ayer','Ayer']];

//localStorage del email
var correo = localStorage.getItem('email');
if(!(correo==null)){
    document.getElementById('nombre').innerText=correo;
}

//Función para mover los elementos del slider en la posición correcta
//Se trata de cambiar la propiedad left y scale de los elementos imagen_tarjeta
function Move(pos){
    index = pos;
    //Para cada tamaño de pantalla, las tarjetas se desplazarán una distancia diferente
    let positions = [-280*index-2,-330*index-2,-398*index-2];
    for(let k=0;k<positions.length;k++){
        //Se consideran tres tamaños de pantalla, que obtenemos de una variable de css
        const slider_content = document.querySelector(".slider_content");
        const cssObj = window.getComputedStyle(slider_content);
        let tamano_pantalla = cssObj.getPropertyValue("--tamaño_pantalla");
        if (tamano_pantalla==k){
            positionstr = positions[k].toString()+"px";
        }
    }
    //Cambiamos la propiedad left sabiendo el tamaño de la pantalla
    for (let i=0;i<imagenes.length;i++){
        imagenes[i].style.left = positionstr;
    }
    //Además, cambiamos el color de los botones inferiores y el scale de las tarjetas
    for(let j=0;j<btns.length;j++){
        if (pos==j){
            btns[j].style.setProperty('background-color','#ffd00d');
            scaled[j]=false;
        }else{
            btns[j].style.setProperty('background-color','#b7b7b7');
            scaled[j]=true;
        }
    }
    for(let j=0;j<btns.length;j++){
        if(scaled[j]){
            imagenes[j].style.setProperty('transform','scale(0.5)');
        }else{
            imagenes[j].style.setProperty('transform','scale(1)');
        }
    }
    //Cambiamos el texto del historial por cada tarjeta
    for (let l=0;l<fechasids.length;l++){
        fechasids[l].innerText = fechas[index][l];
    }
}

//Estas funciones mueven las tarjetas una posición a la izquierda y a la derecha respectivamente
function left(){
    if (index==0){
        Move(3);
    }else{
        Move((index-1));
    }
}

function right(){
    Move((index+1)%4);
}

//Esta función comprueba que las tarjetas estén bien colocadas al reescalar la pantalla
function handleResize(){
    var windowWidth = window.innerWidth;
    var scale_aux=scale;
    if (windowWidth<576){
        scale=0;
    }else if (windowWidth<992){
        scale=1;
    }else if (windowWidth>993){
        scale=2;
    }
    if (!(scale_aux==scale)){
        Move(index);
    }
}

window.addEventListener('resize', function(){
    handleResize();
});