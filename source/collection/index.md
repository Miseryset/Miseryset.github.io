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
    <li role="presentation" class="active"><a href="#">Magisk</a></li>
    <li role="presentation"><a href="lsposed.html">Xposed</a></li>
    <li role="presentation"><a href="software.html">软件</a></li>
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
        show += "<div class=\"tool-li-li " + "li-bgc-" + index_bgnum + "\">";
        show += "<i class=\"iconfont " + index_icon + "\"></i>";
        show += "</div>";
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