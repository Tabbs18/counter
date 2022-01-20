$(document).ready(function(){


    var increase = 0;
    var decrease = 0;


    $(".btn-decrease").on("click", function(){
        alert("you hit the btn decrease!");
        decrease--;

        console.log(decrease);
    });

});

