(function($){
    $(function() {
        $('.header__mobile-icon').on('click', function() {
            $(this).closest('nav').toggleClass('menu_state_open');
        });
    });
})(jQuery);