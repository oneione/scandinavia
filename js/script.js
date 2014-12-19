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


    //about tabs:

    var vacancyTab = new riverHouse.TabController({
        tabLinkSelector: '.about__link',
        tabLinkAttr: 'href',
        tabWindowSelector: '.about__content',
        openTabNumber: 0,
        init: function($firstLink, $firstWindow, showTab) {
            if(!$firstLink.length) return;
            showTab($firstLink,$firstWindow);
        },
        beforeShow: function($activeTabLink, $activeTabWindow) {
            //Здесь можно юзать аякс например:
            console.log('Перед показом вкладки: ', $activeTabLink, $activeTabWindow);
        },
        afterShow: function(l,$activeTabWindow){
            var tabWindowHeight = $activeTabWindow.outerHeight();
            $('.page-content').css({
                minHeight: tabWindowHeight
            });
        }
    });

})(jQuery);