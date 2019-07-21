
class Scroll {
    constructor(el) {
        this.$el = $(el);

        this.blockToScroll = $('.js-block-scroll');
        this.saveOffset();
        this.setEvents();
    }

    setEvents() {
        this.$el.on('click', (e) => {
            e.preventDefault();
            this.scrollBlock($(e.target));
            this.toggleClass($(e.target));
        });
    }

    scrollBlock($target) {
        const id = $target.attr('href');
        const top = $(id).offset().top;

        $('body, html').stop().animate({ scrollTop: top}, 1500);
    }

    toggleClass($target) {
        setTimeout(() => {
            this.$el.closest('.js-sidebar-list').find('.js-scroll').removeClass('is-active');
            $target.addClass('is-active');

        }, 200);
    }

    saveOffset() {
        const arrayOffset = [];

        this.blockToScroll.each((i, item) => {
            const offset =  $(item).offset().top;
            arrayOffset.push(offset);
        });

        $(window).scroll(function(){
            const winScrollTop = $(this).scrollTop();
            const winHeight = $(window).height();

            $(arrayOffset).each((i, item) => {
                const scrollToElem = item - winHeight;

                if (winScrollTop / 1.5 > scrollToElem) {
                    $('.js-scroll').removeClass('is-active');
                    $($('.js-sidebar-list').find('.js-scroll')[i]).addClass('is-active');
                }
            });
        });
    }
}


$(()=> {
    $('.js-scroll').each((i, item) => {
        new Scroll(item);
    });
});
