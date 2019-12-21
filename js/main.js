document.addEventListener("DOMContentLoaded", function() {
    (function() {
        var section = document.querySelectorAll(".instalations__title");
        var sections = {};
        
        var section2 = document.querySelectorAll(".instalations__section");
        var sections2 = {};

        
        var i = 0;
        var i2 = 0;
    
        Array.prototype.forEach.call(section, function(e) {
            sections[e.id] = e.offsetTop;
        });
    
        Array.prototype.forEach.call(section2, function(e) {
            sections2[e.id] = e.offsetTop;
        });
    
        window.onscroll = function() {
            var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
        
            for (i in sections) {
                if (sections[i] <= scrollPosition + 200) {
                    document.querySelector('.instalations__submenu-btn--active').classList.remove("instalations__submenu-btn--active");
                    document.querySelector('a[href*=' + i + ']').classList.add('instalations__submenu-btn--active');
                }
            }
        
            for (i in sections2) {
                console.log("-----------------------------------");
                if (sections2[i] <= scrollPosition + 200) {
                    document.querySelector('.instalations__menu-btn--active').classList.remove("instalations__menu-btn--active");
                    console.log(document.querySelector('.instalations__menu-btn--active'));
                    document.querySelector('a[href*=' + i + ']').classList.add('instalations__menu-btn--active');
                }
            }
        };
    })();
});

$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 1000);
    return false;
});

  