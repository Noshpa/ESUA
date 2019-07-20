$(() => {
    $(".js-sticky").stick_in_parent({
        parent: $(".js-parent-sticky"),
        offset_top: 10
    });

    $('.js-sidebar-modal').on('click', (e) => {
        $(e.target).closest('.js-parent-sidebar').toggleClass('is-visible');


        $(document).on('mousedown', (e) => {
            setTimeout(() => {
                if (!$('.js-sidebar-modal').is(e.target)) {
                    $('.js-sidebar-modal').closest('.js-parent-sidebar').removeClass('is-visible');
                }
            }, 100);
        });

    })
});