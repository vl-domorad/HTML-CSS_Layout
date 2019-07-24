let header = $('.about-block__accordion-header');
function accordion() {
    $(this).toggleClass('active');
    $(this).next().slideToggle('normal');
}

header.click(accordion);