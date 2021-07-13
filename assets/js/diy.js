// 首页调用嘀咕 JSON 版
$(document).ready(function () {
    if ($("#talks").length > 0) {
        jsonUrl = "https://6561-eallion-8gkunp4re49bae66-1251347414.tcb.qcloud.la/json/talks.json"
        $.getJSON(jsonUrl + "?t=" + Date.parse(new Date()), function (res) {
            var talksHtml = ''
            $.each(res.data, function (i, item) {
                d = new Date(item.date)
                date = d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds()
                dataTime = '<span class="datatime">' + date + '</span>'
                talksHtml += '<li class="item item-' + (i + 1) + '">' + dataTime + '： <a href="https://eallion.com/talk/" target="_blank" rel="noopener noreferrer">' + urlToLink(item.content) + '</a></li>'
            });
            $('#talks').append('<i class="icon fa-twitter"></i> <ul class="talk-list">' + talksHtml + '</ul>')
            Lately({
                'target': '#talks .datatime'
            });
        });

        function urlToLink(str) {
            var re = /\bhttps?:\/\/(?!\S+(?:jpe?g|png|bmp|gif|webp|gif))\S+/g;
            var re_forpic = /\bhttps?:[^:<>"]*\/([^:<>"]*)(\.(jpe?g)|(png)|(bmp)|(webp))/g;
            str = str.replace(re, function (website) {
                return '🔗';
            });
            str = str.replace(re_forpic, function (imgurl) {
                return '📷';
            });
            return str;
        }

        function Roll() {
            var list_li = $('.talk-list li'),
                cur_li = list_li.first(),
                last_li = list_li.last();
            last_li.after(cur_li);
        };
        setInterval(Roll, 3000);
        //点击关闭嘀咕 Widget
        $('button').click(function () {
            $(this).parents('#talks').remove();
        });
    }
});

// Typed.js
var typed = new Typed('#typed', {
    strings: [
        'I am a full stack operator about E-commerce.',
        'I believe that ^1000 \"Chance favors only the prepared mind.\"',
        'I am working from home.',
        'I am not a good guy but doing nothing wrong.',
        'I have been writing Blog more than 10 years.',
        'I am not a web designer.',
        'I am not a app developer.',
        'I am not a system administrator.',
        'I like to play LOL and CS\:GO.'
    ],
    onBegin: (self) => {},
    typeSpeed: 0,
    backSpeed: 0,
    smartBackspace: true,
    backDelay: 3000,
    shuffle: true,
    fadeOut: false,
    showCursor: true,
    cursorChar: '|',
    autoInsertCss: true,
    loop: true
});