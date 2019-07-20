$(()=> {

    $.validator.setDefaults({
        errorClass: 'is-error',
        validClass: 'is-valid',
    });

    $.extend($.validator.messages, {
        required: 'Поле необходимо заполнить!',
    });

    $.validator.methods.email = function( value, element ) {
        return this.optional( element ) || /[a-z]+@[a-z]+\.[a-z]+/.test( value );
    };

    $.validator.addMethod('js-validate-phone',
        function (value, element) {
            return value.replace(/\D/g, '').length === 11;
        }
    );

    $('.js-form').on('submit', (e) => {
       e.preventDefault();

       $(e).submit();
    });

    $('.js-form').validate({
        ignore: ".ignore",
        rules: {
            name: "required",
        },

        errorPlacement: (error, element) => {
            $(element).parent().addClass('is-error');
            $(element).parent().removeClass('is-valid');
            error.hide();

            if (element.attr("name") === "checkbox") {
                error.insertAfter(element.parent().find('.js-text-checkbox'));
            }
        },

        success: function ($element_with_error_message, element) {
            $(element).parent().removeClass('is-error');
            $(element).parent().addClass('is-valid');
            $(element).addClass('is-valid');
        },

        submitHandler: (form)=> {
            $.ajax({
                url: $(form).data('url'),
                data: new FormData(form),
                processData: false,
                contentType: false,
                dataType: 'JSON',
                type: $(form).data('method') || 'JSON',
                success: (response) => {
                    if (response.fail) {
                        console.log(response.data.error);
                    }
                }
            });
        }
    });
});