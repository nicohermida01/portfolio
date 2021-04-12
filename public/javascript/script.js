var meGusta = false;

$("#navbarCorazon img").click(function(){
    if(meGusta){
        $(this).attr("src","images/corazon-vacio.png");
        meGusta = false;
    } 
    else {
        $(this).attr("src","images/corazon-megusta.png");
        meGusta = true;
        $("#corazon-alert").removeClass("invisible");
        $("#corazon-alert").addClass("visible");
    }
})

$(".nav-item a").click(function(){
    $(".nav-item a").removeClass('active');
    $(".nav-item a").removeAttr('aria-current');

    var page = $(this).attr('id');
    $('#'+page).addClass('active');
    $('#'+page).prop('aria-current','page');
});
    
