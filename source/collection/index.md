---
title: 常用导航
layout: collection
date: 2023-05-21 09:49:58
banner_img: https://101.43.39.125/HexoFiles/new/bg-trans.png
banner_img_height: 70
banner_mask_alpha: 0
---

<div class="container tool-nav">
  <ul class="nav nav-pills">
    <a href="#" class="active"><li role="presentation">Magisk</li></a>
    <a href="lsposed.html"><li role="presentation">Xposed</li></a>
    <a href="software.html"><li role="presentation">软件</li></a>
  </ul>
</div>
<div class="container tool-nav hidden-1">
  <ul class="nav nav-pills">
    <a href="hided/hided.html"><li role="presentation">隐藏</li></a>
  </ul>
</div>
<div id="showme"></div>

<script type="text/javascript" src="https://code.jquery.com/jquery-3.6.2.js"></script>
<script>
$(document).ready(function(){
  $.getJSON('/collection/res/index.json', function(data){
    if (true){
      var count = data.length;
      var show = "<div class=\"container-fluid\">";
      show += "<div class=\"row text-center\">";
      for (var i=0 ; i < count ;i++){
        index_link = data[i][0];
        index_title = data[i][1];
        index_description = data[i][2];
        index_bgnum = data[i][3];
        index_icon = data[i][4];
        show += "<div class=\"col-xs-6 col-sm-6 col-md-4 col-lg-4 tool-li\">";
        show += "<a href=\"" + index_link + "\" target=\"_blank\">";
        
        if (typeof index_bgnum === 'string' && index_bgnum.startsWith('http')) {
          if (typeof index_icon === 'string' && index_icon.startsWith('icon-')) {
            show += "<div class=\"tool-li-li \" style=\"overflow :hidden;display: flex;align-items: center;justify-content: center;position: relative;\">";
            show += "<img src=\"" + index_bgnum + "\" style=\"width: 100%;height: 100%;object-fit :cover;position: absolute;z-index:1\" alt=\"E\"/>";
            show += "<i class=\"iconfont " + index_icon + "\" style=\"position: absolute;z-index:2\"></i>";
            show += "</div>";
          }else {
            show += "<div class=\"tool-li-li \" style=\"overflow :hidden;display: flex;align-items: center;justify-content: center;position: relative;\">";
            show += "<img src=\"" + index_bgnum + "\" style=\"width: 100%;height: 100%;object-fit :cover;position: absolute;z-index:1\" alt=\"E\"/>";
            show += "<img src=\"" + index_icon + "\" style=\"max-height:40%;max-width: 50%;object-fit :cover;position: absolute;z-index:2\" alt=\"E\"/>";
            show += "</div>";
          }
        }else {
          if (typeof index_icon === 'string' && index_icon.startsWith('icon-')) {
            show += "<div class=\"tool-li-li " + "li-bgc-" + index_bgnum + "\">";
            show += "<i class=\"iconfont " + index_icon + "\"></i>";
            show += "</div>";
          }else {
            show += "<div class=\"tool-li-li " + "li-bgc-" + index_bgnum + "\"  style=\"display: flex;align-items: center;justify-content: center;\">";
            show += "<img src=\"" + index_icon + "\" style=\"max-height:40%;max-width: 50%;\" alt=\"E\"/>";
            show += "</div>";
          }
        }
        
        show += "</a>";
        show += "<div class=\"text-center\" style=\"margin-top:10px\">";
        show += index_title;
        show += "</div>";
        show += "<div class=\"text-center text-color-height\">";
        show += index_description;
        show += "</div>";
        show += "</div>";
      }
      show += "</div>";
      show += "</div>";
      $("#showme").html(show);
    }
  });
});
</script>

<style>
.hidden-1 {
  display: none;
}
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
  var hiddenText = document.querySelector('.hidden-1');

  var touchStartX = null;
  var touchEndX = null;
  var touchStartY = null;
  var touchEndY = null;
  var swipeSequence = [];

  document.addEventListener('touchstart', function(event) {
    touchStartX = event.touches[0].clientX;
    touchStartY = event.touches[0].clientY;
  });

  document.addEventListener('touchend', function(event) {
    touchEndX = event.changedTouches[0].clientX;
    touchEndY = event.changedTouches[0].clientY;
    
    var swipeDirection = getSwipeDirection();
    
    if (swipeDirection) {
      swipeSequence.push(swipeDirection);
      
      // 检查滑动序列是否匹配指定的顺序
      if (swipeSequence.join('') === 'uuddlrlr') {
        hiddenText.style.display = 'block';
        swipeSequence = []; // 重置滑动序列
      }
    } else {
      swipeSequence = []; // 重置滑动序列（如果不是有效的滑动方向）
    }
  });
  
  function getSwipeDirection() {
    var deltaX = touchEndX - touchStartX;
    var deltaY = touchEndY - touchStartY;
    
    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      // 左右滑动
      if (deltaX > 0) {
        return 'r'; // 向右滑动
      } else if (deltaX < 0) {
        return 'l'; // 向左滑动
      }
    } else {
      // 上下滑动
      if (deltaY > 0) {
        return 'd'; // 向下滑动
      } else if (deltaY < 0) {
        return 'u'; // 向上滑动
      }
    }
    
    return null; // 没有有效的滑动方向
  }
});
</script>
