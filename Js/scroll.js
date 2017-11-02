window.onload = function(){
    //change navbar selected item
    $(".sidenav li a").on("click", function() {
        $(".sidenav li a").removeClass("sidenav-active");
        $(this).addClass("sidenav-active");
    });
    
    //Smooth scrolling
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });
}