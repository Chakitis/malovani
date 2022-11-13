const platno = document.getElementById("canvas");
platno.width = 650;
platno.height = 650;
let platnoKontext = platno.getContext("2d");


let draw_color = "black";
let draw_width = "5";
let is_drawing = false;

let start_background_color = "transparent"; //nastaveni zakladni barvy pozadi
platnoKontext.fillStyle = start_background_color; //pro tlacitko smazat
platnoKontext.fillRect(0,0, platno.width, platno.height);

/*
function kralik(){
    clear_canvas();
    let kralik = new Image();
    kralik.src ="images/kralik.png";
    platnoKontext.drawImage(kralik, 0,0)
}
function liska(){
    clear_canvas();
    const liska = new Image();
    liska.src ="images/liska.png";
    platnoKontext.drawImage(liska, 0,0)
}

function sova(){
    clear_canvas();
    const sova = new Image();
    sova.src ="images/sova.png";
    platnoKontext.drawImage(sova, 0,0)
}
function zaba(){
    clear_canvas();
    const zaba = new Image();
    zaba.src ="images/zaba.png";
    platnoKontext.drawImage(zaba, 0,0)
}*/


function change_color(element) {
   draw_color = element.style.background;
}


platno.addEventListener("touchstart",start,false);
platno.addEventListener("touchmove",draw,false);
platno.addEventListener("mousedown",start,false);
platno.addEventListener("mousemove",draw,false);

platno.addEventListener("touchend",stop,false);
platno.addEventListener("mouseup",stop,false);
platno.addEventListener("mouseout",stop,false);

function start (event) {
    is_drawing = true;
    platnoKontext.beginPath();
    platnoKontext.moveTo(event.clientX - platno.offsetLeft,
                    event.clientY - platno.offsetTop);
    event.preventDefault();
}

function draw(event){
    if (is_drawing){
        platnoKontext.lineTo(event.clientX - platno.offsetLeft,
                       event.clientY - platno.offsetTop);
        platnoKontext.strokeStyle = draw_color;
        platnoKontext.lineWidth = draw_width;
        platnoKontext.lineCap ="round";
        platnoKontext.lineJoin = "round";
        platnoKontext.stroke();
    }
    event.preventDefault();

}

function stop(event){
    if (is_drawing){
        platnoKontext.stroke();
        platnoKontext.closePath();
        is_drawing = false;
    }
    event.preventDefault();
}

function clear_canvas() {
    platnoKontext.fillStyle = start_background_color;
    platnoKontext.clearRect(0,0, platno.width, platno.height);
    platnoKontext.fillRect(0,0, platno.width, platno.height);
}

//platnoKontext.globalCompositeOperation = 'color';
function kralik(){
    clear_canvas();
    let kralik = new Image();
    kralik.src ="images/kralik.png";
    platnoKontext.drawImage(kralik, 0,0)
}
function liska(){
    clear_canvas();
    const liska = new Image();
    liska.src ="images/liska.png";
    platnoKontext.drawImage(liska, 0,0)
}

function sova(){
    clear_canvas();
    const sova = new Image();
    sova.src ="images/sova.png";
    platnoKontext.drawImage(sova, 0,0)
}
function zaba(){
    clear_canvas();
    const zaba = new Image();
    zaba.src ="images/zaba.png";
    platnoKontext.drawImage(zaba, 0,0)
}
