
window.addEventListener('scroll', function (e) {


    const target = document.querySelector('.whiteText');
    const target2 = document.querySelector('#CallToA');

    var scrolled = window.scrollY;
    var rate = scrolled * -0.75;
    var rate2 = scrolled * -0.5;
    target2.style.transform = 'translate3d(' + rate + 'px, 0px, 0px)'
    target.style.transform = 'translate3d(' + rate2 + 'px, 0px, 0px)'
    // var value = scrollY; value * 1.5 + "px"
})
