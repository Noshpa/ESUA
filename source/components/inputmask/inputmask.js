$(() => {

    if ($('.js-input-mask-phone').length > 0) {
        $('.js-input-mask-phone').inputmask({"mask": "+7(999) 999-9999"});
    }
});