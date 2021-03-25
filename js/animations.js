/* ********** BOTON ABOUT ME ********** */ 
$("#navBar-aboutMe").hover(function(){
    $(this).css("backgroundColor","#4CECCF");
}, function(){
    $(this).css("backgroundColor","#B7F7EC");
})

/* ********** BOTON PROJECTS ********** */ 
$("#navBar-projects").hover(function(){
    $(this).css("backgroundColor","#4CECCF");
}, function(){
    $(this).css("backgroundColor","#B7F7EC");
})

/* ********** BOTON SKILLS ********** */ 
$("#navBar-skills").hover(function(){
    $(this).css("backgroundColor","#4CECCF");
}, function(){
    $(this).css("backgroundColor","#B7F7EC");
})

/* ********** BOTON CONTACT ********** */ 
$("#navBar-contact").hover(function(){
    $(this).css("backgroundColor","#4CECCF");
}, function(){
    $(this).css("backgroundColor","#B7F7EC");
})

/* ********** BOTON MEGUSTA (CORAZON) ********** */ 
var meGusta = false;
$("#navBar-corazon").click(function(){
    if(meGusta){
        $(this).attr("src","imagenes/corazon-vacio.png");
        meGusta = false;
    } 
    else {
        $(this).attr("src","imagenes/corazon-megusta.png");
        meGusta = true;
    }
    
})
