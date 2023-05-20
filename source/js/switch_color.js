document.write('<link type="text/css" rel="stylesheet" href="/css/global.css" />');
// var d = new Date();
// var h = d.getHours();
// if (h > 8 && h < 18) {
  // document.documentElement.style.setProperty('--global-main-color', "#ffc0cb");
  // // document.write('<link type="text/css" rel="stylesheet" href="/css/global_c1.css" />');
// } else {
  // document.documentElement.style.setProperty('--global-main-color', "#a7a4db");
  // // document.write('<link type="text/css" rel="stylesheet" href="/css/global_c2.css" />');
// }
var r=Math.round(Math.random()*255);
var g=Math.round(Math.random()*255);
var b=Math.round(Math.random()*255);

document.documentElement.style.setProperty('--global-main-color', "rgb("+r+","+g+","+b+")");
