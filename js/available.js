(function() {

    var encrypted = document.getElementsByClassName('hbe-container')
    if (encrypted.length != 0) {
        return;
    }

    var times = document.getElementsByTagName('time');
    if (times.length === 0) {
        return;
    }
    var posts = document.getElementsByClassName('post-content');
    if (posts.length === 0) {
        return;
    }

    var pubTime = new Date(times[0].dateTime); /* 文章发布时间戳 */
    var now = Date.now() /* 当前时间戳 */
    var interval = parseInt(now - pubTime)

    /* 发布时间超过指定时间（毫秒） */
    if (interval > 3600 * 24 * 15 * 1000) {
        var days = parseInt(interval / 86400000)
        /*
        posts[0].innerHTML = '<div class="note note-warning" style="font-size:0.9rem"><p>' +
            '<div class="h6">文章时效性提示</div><p>这是一篇发布于 ' + days + ' 天前的文章，部分信息可能已发生改变，请注意甄别。' +
            '</p></p></div>' + posts[0].innerHTML;
        */
        posts[0].innerHTML = '<div class="note note-warning" style="font-size:0.9rem"><p>' +
            '这是一篇发布于 ' + days + ' 天前的文章，部分信息可能已发生改变，请注意甄别。' +
            '</p></div>' + posts[0].innerHTML;
    }

    posts[0].innerHTML = '<div class="note note-info" style="font-size:0.9rem"><p>' +
        '本文写于： ' + fmt(pubTime) +
        '</p></div>' + posts[0].innerHTML;

})();

function fmt(aaa) {
    //datetime是拿到的时间戳
    var date = aaa //时间戳为10位需*1000，时间戳为13位的话不需乘1000 
    var year = date.getFullYear(),
        month = ("" + (date.getMonth() + 1))
            .slice(-2),
        sdate = ("" + date.getDate())
            .slice(-2),
        hour = ("" + date.getHours())
            .slice(-2),
        minute = ("" + date.getMinutes())
            .slice(-2),
        second = ("" + date.getSeconds())
            .slice(-2);
    var ap;
    if (hour >= 0 && hour < 6) {
        ap = "凌晨"
    } else if (hour >= 6 && hour < 12) {
        ap = "上午"
    } else if (hour >= 12 && hour < 18) {
        ap = "下午"
    } else {
        ap = "晚上"
    }

    // 拼接
    //var result = year + "年" + month + "月" + sdate + "日 " + hour + ":" + minute + ":" + second;
    var result = year + "年" + month + "月" + sdate + "日 " + ap;
    // 返回
    return result;
}