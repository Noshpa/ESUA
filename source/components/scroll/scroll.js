
class Scroll {
    constructor(el) {
        this.$el = $(el);

        this.blockToScroll = $('.js-block-scroll');
        this.arrayOffset = [];
        this.setEvents();
        // this.saveOffset();
    }

    setEvents() {
        this.$el.on('click', (e) => {
            e.preventDefault();
            this.scrollBlock($(e.target));
            this.toggleClass($(e.target));
        });

        // $(window).on('scroll', debounce(() => {
        //     this.toggleActiveClass();
        // }));
    }

    scrollBlock($target) {
        const id = $target.attr('href');
        const top = $(id).offset().top;

        $('body, html').animate({scrollTop: top}, 1500);
    }

    toggleClass($target) {
        this.$el.closest('.js-sidebar-list').find('.js-scroll').removeClass('is-active');
        $target.addClass('is-active');
    }

    saveOffset() {
        this.blockToScroll.each((i, item) => {
            const offset =  $(item).offset().top;
            this.arrayOffset.push(offset);
        });
    }

    toggleActiveClass() {
        $(this.arrayOffset).each((i, item) => {
            if (item <= $(window).scrollTop()) {
                $('.js-scroll').removeClass('is-active');
                $($('.js-sidebar-list').find('.js-scroll')[i]).addClass('is-active');
            }
        });
    }
}


$(()=> {
    $('.js-scroll').each((i, item) => {
        new Scroll(item);
    });
});
