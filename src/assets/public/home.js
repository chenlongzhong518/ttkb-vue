function myhome() {
    $(function () {
        var aBtnimg = $('.home .btnimg li');
        var aBgimg = $('.home .bgimg li');
        var oMask = $('.home .btnimg li .mask');
        var oBorder = $('.home .btnimg li .border');
        var cententImg = $('.home_center img');
        var count = 0;
        var timer;

        cententImg.mouseenter(function () {
            $(this).css('transform', 'scale(1.05)');
        });
        cententImg.mouseleave(function () {
            $(this).css('transform', 'scale(1)');
        });

        function tab() {
            oMask.removeClass('active').eq(count).addClass('active');
            oBorder.removeClass('active').eq(count).addClass('active');
            aBgimg.stop().fadeOut().eq(count).stop().fadeIn();
        }

        aBtnimg.mouseenter(function () {
            var index = $(this).index();
            timer = setTimeout(function () {
                count = index;
                tab();
            }, 100);
        });

        aBtnimg.mouseleave(function () {
            clearInterval(timer);
        });

        function nextpage() {
            count++;
            if (count > aBtnimg.length - 1) {
                count = 0;
            }
            tab();
        }

        var tid = setInterval(nextpage, 3000)
        aBtnimg.mouseenter(function () {
            clearInterval(tid);
        });
        aBtnimg.mouseleave(function () {
            clearInterval(tid);
            tid = setInterval(nextpage, 3000);
        });
    });

}

//导出
export {
    myhome
}