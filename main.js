$(document).ready(function () {
//Function to store state of text content of bar_icon and change it on click
    $(".bar_icon").on("click", function () {
        var el = $(this),
            tmp = el.text();
        el.text(el.data("swap"));
        el.data("swap", tmp);
    });
    
//Function for smooth page scrooling to anchors
    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 800);
    });

//Function to detect scrolling and add/remove classes for certain visual effects
    var scrollTop = 0;
    $(window).scroll(function () {
        scrollTop = $(window).scrollTop();
        if (scrollTop >= 200) {
            $('.bar').addClass('scrolled_bar');
            $('.bar_logo').addClass('scrolled_logo');
            $('.bar_title').addClass('scrolled_title');
            $('.bar_icon').addClass('scrolled_icon');
            $('.intro').addClass('fadeOutUp');
            $('.dropdown').addClass('dropdown_scrolled');
        } else if (scrollTop < 400) {
            $('.bar').removeClass('scrolled_bar');
            $('.bar_logo').removeClass('scrolled_logo');
            $('.bar_title').removeClass('scrolled_title');
            $('.bar_icon').removeClass('scrolled_icon');
            $('.intro').removeClass('fadeOutUp');
            $('.dropdown').removeClass('dropdown_scrolled');
        }
    });
});

//Ensure that page refreshes to top position
history.scrollRestoration = "manual"

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content menu*/
function showDropdown() {
    document.getElementById("my_dropdown").classList.toggle("dropdown_show");
}

// Close the dropdown menu if the user clicks outside of it and switch icon
window.onclick = function (e) {
    if (!e.target.matches('.bar_icon')) {
        var elm = $(".bar_icon"),
            tmpr = elm.text();
        var dropdowns = document.getElementById("my_dropdown");
        if (dropdowns.classList.contains('dropdown_show')) {
            dropdowns.classList.remove('dropdown_show');
            elm.text(elm.data("swap"));
            elm.data("swap", tmpr); 
        }
    }

}