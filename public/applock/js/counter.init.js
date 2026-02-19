// ----- COUNTER ----- //
var a = 0;
$(window).off('scroll.counter').on('scroll.counter', function() {
    var $counter = $('#counter');
    if (!$counter.length) {
        return;
    }

    var offset = $counter.offset();
    if (!offset) {
        return;
    }

    var oTop = offset.top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
        $('.counter-value').each(function() {
            var $this = $(this),
                countTo = $this.attr('data-count');
            $({
                countNum: $this.text()
            }).animate({
                    countNum: countTo
                },

                {
                    duration: 2000,
                    easing: 'swing',
                    step: function() {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function() {
                        $this.text(this.countNum);
                        //alert('finished');
                    }

                });
        });
        a = 1;
    }
});
