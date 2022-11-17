document.getElementById("contenedor").innerHTML="<p><h1>Este es un parrafo</h1> </p>"


function alerta(){
    alert("Mensaje de alerta");
}

function aumentar(){
    var x = document.getElementById("contador").value;
    x++;
    document.getElementById("contador").value=x;
   // alert(x)
}

function disminuir(){
    var x = document.getElementById("contador").value;
    x--;
    document.getElementById("contador").value=x;
   // alert(x)
}

function cambiarcolor(x){
    console.log("Entro al metodo de cambio de color")
    console.log(x);

    var cuadro= document.getElementById("cuadro");
    switch  (x){
        case 1: cuadro.style.backgroundColor("#3CDF3C")
        cuadro.style.width='400px';
        cuadro.style.height='400px';
        break;
        case 2:  cuadro.style.backgroundColor("#3CDF3D")
        cuadro.style.width='100px';
        cuadro.style.height='100px';
        break
        case 3:  cuadro.style.backgroundColor("#3CDF3F")



    }
    cuadro.style.backgroundColor="#3CDF3C"
}