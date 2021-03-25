
/* ************************** AL CARGAR LA PAGINA ************************** */ 
var meGusta = false;

/* ************************** INTERACCIONES DEL USUARIO ************************** */ 

/* DAR ME GUSTA */ 
$("#navBar-corazon img").click(function(){
    if(meGusta){
        $(this).attr("src","imagenes/corazon-vacio.png");
        meGusta = false;
    } 
    else {
        $(this).attr("src","imagenes/corazon-megusta.png");
        meGusta = true;
    }
})

/* BOTONES NAVBAR */
$(".boton").click(function(){
    $(".boton").removeClass("botonActivo");
    $(this).addClass("botonActivo");
});