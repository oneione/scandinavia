(function($){

    //touch menu:
    $('.touch-menu-control').click(function(e){
        e.preventDefault();

        var $mainWrap = $('html');

        if($mainWrap.hasClass('open-touch-menu')) {
            $mainWrap.removeClass('open-touch-menu');
        } else {
            $mainWrap.addClass('open-touch-menu');
        }
    });

})(jQuery);