window.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".tabs-item");
    tabs.forEach(elem => {
        elem.addEventListener("click", () => {
            tabs.forEach(otherItem => {
                if (otherItem.classList.contains("tabs-item-active")) {
                    otherItem.classList.remove("tabs-item-active");
                }
            })
            elem.classList.add("tabs-item-active")
        });
    });
    $('.carusel').slick({
        autoplay: true,
        autoplaySpeed: 1500,
        prevArrow: '<div class="carusel-arrow carusel-prev" ><i class="fas fa-chevron-left"></i></div>',
        nextArrow: '<div class="carusel-arrow carusel-next" ><i class="fas fa-chevron-right"></i></div>'
    });
    $('#buyNowBtn').on('click', popupOpen);
    $('#tryForBtn').on('click', popupOpen);
    $('.popup-close').on('click', () =>{
        $('.popup').removeClass('popup-active');
        $('body').css('overflow', 'visible');
    })
    function popupOpen() {
        $('.popup').addClass('popup-active');
        $('body').css('overflow', 'hidden');
    }
});  