(function() {

    // var _encrypted = document.getElementsByClassName('hbe-container')
    // if (_encrypted.length != 0) {
        // return;
    // }

    var _times = document.getElementsByTagName('time');
    if (_times.length === 0) {
        return;
    }
    var _posts = document.getElementsByClassName('post-content');
    if (_posts.length === 0) {
        return;
    }

    var _pubTime = new Date(_times[0].dateTime); /* 文章发布时间戳 */
    var _now = Date.now() /* 当前时间戳 */
    var _interval = parseInt(_now - _pubTime)


    var targetParagraph = document.getElementById("seo-header");
    var newDiv = document.createElement("div");
    newDiv.className = "note note-info";
    newDiv.style.fontSize = "0.9rem";
    newDiv.innerHTML = '本文写于： ' + fmt(_pubTime);
    targetParagraph.parentNode.insertBefore(newDiv, targetParagraph);
    
    
    /* 发布时间超过指定时间（毫秒） */
    if (_interval > 3600 * 24 * 15 * 1000) {
        var _days = parseInt(_interval / 86400000)
        
        
        var targetParagraph = document.getElementById("seo-header");
        var newDiv = document.createElement("div");
        newDiv.className = "note note-warning";
        newDiv.style.fontSize = "0.9rem";
        newDiv.innerHTML = '这是一篇发布于 ' + _days + ' 天前的文章，部分信息可能已发生改变，请注意甄别。';
        targetParagraph.parentNode.insertBefore(newDiv, targetParagraph);
        
        
    }
})();

function fmt(_aaa) {
    //datetime是拿到的时间戳
//    var _date = _aaa //时间戳为10位需*1000，时间戳为13位的话不需乘1000 
    var _year = _aaa.getFullYear(),
        _month = ("" + (_aaa.getMonth() + 1))
            .slice(-2),
        _sdate = ("" + _aaa.getDate())
            .slice(-2),
        _hour = ("" + _aaa.getHours())
            .slice(-2),
        _minute = ("" + _aaa.getMinutes())
            .slice(-2),
        _second = ("" + _aaa.getSeconds())
            .slice(-2);
    var _ap;
    if (_hour >= 0 && _hour < 6) {
        _ap = "凌晨"
    } else if (_hour >= 6 && _hour < 12) {
        _ap = "上午"
    } else if (_hour >= 12 && _hour < 18) {
        _ap = "下午"
    } else {
        _ap = "晚上"
    }

    // 拼接
    //var result = year + "年" + month + "月" + sdate + "日 " + hour + ":" + minute + ":" + second;
    var _result = _year + "年" + _month + "月" + _sdate + "日 " + _ap;
    // 返回
    return _result;
}
