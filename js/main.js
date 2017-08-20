$( ".thumbnail" ).addClass( "active" );

$( ".list__filter a" ).click(function(){
  $( ".list__filter a").removeClass( "active");
  $(this).addClass( "active");
});

$(".list__filter a").on("click",function(e) {
    if ($(this).hasClass("thumbnail")) {
        $(".item").removeClass("thumbnail").addClass("thumbnail");
    }
    else if($(this).hasClass("grid")) {
        $(".item").removeClass("thumbnail");
    }
});

var modal = document.getElementById("myModal");
var btn = document.getElementById("item__modal");
var span = document.getElementsByClassName("close");

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}