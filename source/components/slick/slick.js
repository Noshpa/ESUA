$(() => {
    const $bar = $('.js-progress-bar');
    const $slick = $('.js-slick');
    const time = $slick.data('time');
    let isPause;
    let tick;
    let percentTime;

    $slick.slick({
        adaptiveHeight: false,
        dots: true,
        mobileFirst: true,
        pauseOnDotsHover: true,
        arrows: true
    });


    $('.js-slick-wrapper').mouseenter(function()  {
        isPause = true;
    });

    $('.js-slick-wrapper').mouseleave(function()  {
        isPause = false;
    });

    function startProgressbar() {
        resetProgressbar();
        percentTime = 0;
        isPause = false;
        tick = setInterval(interval, 10);
    }

    function interval() {
        if(isPause === false) {
            percentTime += 1 / (time+0.1);
            $bar.css({
                width: percentTime+"%"
            });
            if(percentTime >= 100)
            {
                $slick.slick('slickNext');
                startProgressbar();
            }
        }
    }


    function resetProgressbar() {
        $bar.css({
            width: 0+'%'
        });
        clearTimeout(tick);
    }

    startProgressbar();
});