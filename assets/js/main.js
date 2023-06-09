(function() {
    "use strict";

    window.onload = function() {
        window.setTimeout(fadeout, 500);
    }

    function fadeout() {
        document.querySelector('.preloader').style.opacity = '0';
        document.querySelector('.preloader').style.display = 'none';
    }

    window.onscroll = function() {
        var header_navbar = document.querySelector(".navbar-area");
        var sticky = header_navbar.offsetTop;
        if (window.pageYOffset > sticky) {
            header_navbar.classList.add("sticky");
        } else {
            header_navbar.classList.remove("sticky");
        }
        var backToTo = document.querySelector(".scroll-top");
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            backToTo.style.display = "flex";
        } else {
            backToTo.style.display = "none";
        }
    };

    var pageLink = document.querySelectorAll('.page-scroll');
    pageLink.forEach(elem => {
        elem.addEventListener('click', e => {
            e.preventDefault();
            document.querySelector(elem.getAttribute('href')).scrollIntoView({
                behavior: 'smooth',
                offsetTop: 1 - 60,
            });
        });
    });

    function onScroll(event) {
        var sections = document.querySelectorAll('.page-scroll');
        var scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        for (var i = 0; i < sections.length; i++) {
            var currLink = sections[i];
            var val = currLink.getAttribute('href');
            var refElement = document.querySelector(val);
            var scrollTopMinus = scrollPos + 73;
            if (refElement.offsetTop <= scrollTopMinus && (refElement.offsetTop + refElement.offsetHeight > scrollTopMinus)) {
                document.querySelector('.page-scroll').classList.remove('active');
                currLink.classList.add('active');
            } else {
                currLink.classList.remove('active');
            }
        }
    };

    window.document.addEventListener('scroll', onScroll);
    let navbarToggler = document.querySelector(".navbar-toggler");
    var navbarCollapse = document.querySelector(".navbar-collapse");

    document.querySelectorAll(".page-scroll").forEach(e => e.addEventListener("click", () => {
        navbarToggler.classList.remove("active");
        navbarCollapse.classList.remove('show')
    }));

    navbarToggler.addEventListener('click', function() {
        navbarToggler.classList.toggle("active");
    })

    new WOW().init();

    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    var slider = new tns({
        container: '.testimonial-active',
        slideBy: 'page',
        autoplay: false,
        mouseDrag: true,
        gutter: 0,
        items: 3,
        nav: true,
        controls: false,
        controlsText: ['<span class="icon-bonanza- icon-bonanzaangle-left"></span>', '<span class="icon-bonanza- icon-bonanzaangle-right"></span>'],
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            1400: {
                items: 2,
            }
        }
    });

    var slider = new tns({
        container: '.pricing-active',
        slideBy: 'page',
        autoplay: false,
        mouseDrag: true,
        gutter: 0,
        items: 3,
        nav: false,
        controls: true,
        controlsText: ['<span class="icon-bonanza- icon-bonanzaangle-left"></span>', '<span class="icon-bonanza- icon-bonanzaangle-right"></span>'],
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            991: {
                items: 1,
            },
            1180: {
                items: 1,
            },
            1400: {
                items: 3,
            }
        }
    });

    var slider = new tns({
        container: '.todays-winner',
        slideBy: 'page',
        autoplay: true,
        mouseDrag: false,
        gutter: 0,
        items: 3,
        nav: false,
        controls: false,
        controlsText: ['<span class="icon-bonanza- icon-bonanzaangle-left"></span>', '<span class="icon-bonanza- icon-bonanzaangle-right"></span>'],
        responsive: {
            0: {
                items: 3,
            },
            768: {
                items: 3,
            },
            1400: {
                items: 3,
            }
        }
    });

    function scrollTo(element, to = 0, duration = 1000) {
        const start = element.scrollTop;
        const change = to - start;
        const increment = 20;
        let currentTime = 0;
        const animateScroll = (() => {
            currentTime += increment;
            const val = Math.easeInOutQuad(currentTime, start, change, duration);
            element.scrollTop = val;
            if (currentTime < duration) {
                setTimeout(animateScroll, increment);
            }
        });
        animateScroll();
    };
    Math.easeInOutQuad = function(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    };
    document.querySelector('.scroll-top').onclick = function() {
        scrollTo(document.documentElement);
    }

})();

