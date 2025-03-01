$(window).scroll(function() {
  if (screen.width > 991){
      if ($(this).scrollTop() > 100){
          $('header').addClass("sticky");
      }else{
          $('header').removeClass("sticky");
      }
  }else{
      $('header').removeClass("sticky");
  }
jQuery('.scrollPage').click(function() {
    var elementClicked = jQuery(this).attr("href");
    var destination = jQuery(elementClicked).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination-50}, 1500 );
    return false;
});

if (screen.width > 300){
  if (jQuery(this).scrollTop() > 0){
    jQuery('.topbar').addClass("sticky");
  }else{
    jQuery('.topbar').removeClass("sticky");
  }
}else{
  jQuery('.topbar').removeClass("sticky");
}
});

jQuery(".search_toggle").click(function(){
jQuery(".full_screen_wrapper").show();
});
jQuery(".cross_button").click(function(){
jQuery(".full_screen_wrapper").hide();
});

jQuery(".menu_open").click(function () {
jQuery(".mobile_menu_wrap").addClass("menu_show");
jQuery(".menu_overlay").show();
jQuery("html").addClass("overflow_hidden");
});
jQuery(".menu_close, .menu_overlay").click(function () {
jQuery(".mobile_menu_wrap").removeClass("menu_show");
jQuery(".menu_overlay").hide();
jQuery(".mobile_menu_wrap ul li ul").removeClass("show_submenu");
jQuery("html").removeClass("overflow_hidden");
});
jQuery('.mobile_menu_wrap ul li:has(ul)').addClass('hassub');
jQuery('.mobile_menu_wrap ul li:has(ul)').append('<a href="javascript:;" class="sub_menu_open"><i class="fa-solid fa-angle-right"></i></a>');
jQuery('.mobile_menu_wrap ul li ul').append('<li class="back_to_mainmenu"><a href="javascript:;"><i class="fa-solid fa-angle-left"></i> Back</a></li>');
jQuery(document).ready(function(){
jQuery("li.hassub a[href$='#'], li.hassub a[href$='javascript:;'], li.hassub a[href$='javascript::;'], li.hassub a[href$='javascript:void(0);']").addClass("no_link");
jQuery(".mobile_menu_wrap ul li a.no_link").click(function () {
jQuery(this).next().addClass("show_submenu");
});
});
jQuery(".back_to_mainmenu").click(function(){
jQuery(this).parent().removeClass("show_submenu");
});
jQuery(".mobile_menu_wrap ul li .sub_menu_open").click(function(){
jQuery(this).prev("ul").addClass("show_submenu");
});
if (screen.width > 767){
  new WOW().init();    
}
function startCounter(counter) {
    let targetValue = +counter.getAttribute("data-value");
    let displayText = counter.getAttribute("data-target");
    let count = 0;
    let increment = targetValue / 100; // Adjust speed

    let updateCounter = () => {
        count += increment;
        if (count < targetValue) {
            counter.firstChild.nodeValue = Math.ceil(count) + displayText.replace(/[0-9.,]+/, '');
            requestAnimationFrame(updateCounter);
        } else {
            counter.firstChild.nodeValue = displayText; // Keep the original format
        }
    };
    updateCounter();
}

function checkCounters() {
    let section = document.querySelector(".counter-section");
    let sectionPosition = section.getBoundingClientRect().top;
    let screenHeight = window.innerHeight;

    if (sectionPosition < screenHeight && sectionPosition > 0) {
        document.querySelectorAll(".counter-box").forEach(counter => {
            counter.firstChild.nodeValue = "0"; // Reset
            startCounter(counter);
        });
    }
}

window.addEventListener("scroll", checkCounters);
window.addEventListener("load", checkCounters);