const imagenes = document.querySelectorAll(".imagen_tarjeta");
const ids = [document.getElementById('item1'),document.getElementById('item2'),document.getElementById('item3'),document.getElementById('item4')];
const btns = [document.getElementById('btn1'),document.getElementById('btn2'),document.getElementById('btn3'),document.getElementById('btn4')];
let index=0;
let position=0;
let scaled = [false,true,true,true];
let scale = 0;

var correo = localStorage.getItem('email');
//correo = null;
if(!(correo==null)){
    document.getElementById('nombre').innerText=correo;
}

function Move(pos){
    index = pos;
    let positions = [-280*index-2,-330*index-2,-398*index-2];
    for(let k=0;k<positions.length;k++){
        const slider_content = document.querySelector(".slider_content");
        const cssObj = window.getComputedStyle(slider_content);
        let tamano_pantalla = cssObj.getPropertyValue("--tamaño_pantalla");
        if (tamano_pantalla==k){
            positionstr = positions[k].toString()+"px";
        }
    }
    for (let i=0;i<imagenes.length;i++){
        imagenes[i].style.left = positionstr;
    }
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
}

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

function handleResize(){
    var windowWidth = window.innerWidth;
    var scale_aux=scale;
    if (windowWidth<576){
        scale=0;
    }else if (windowWidth<992){
        scale=1;
    }else if (windowWidth>992){
        scale=2
    }
    if (!scale_aux==scale){
        Move(index);
    }
}

window.addEventListener('resize', function(){
    handleResize();
});