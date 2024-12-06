// var d = new Date();
// var h = d.getHours();
// if (h > 8 && h < 18) {
  // document.documentElement.style.setProperty('--global-main-color', "#ffc0cb");
  // // document.write('<link type="text/css" rel="stylesheet" href="/css/global_c1.css" />');
// } else {
  // document.documentElement.style.setProperty('--global-main-color', "#a7a4db");
  // // document.write('<link type="text/css" rel="stylesheet" href="/css/global_c2.css" />');
// }
function rr(){
  r_num=Math.round(Math.random()*255);
  return r_num;
}
var r=rr();
var g=rr();
var b=rr();
var rc="rgb("+r+","+g+","+b+")"
document.documentElement.style.setProperty('--global-main-color', rc);

var sc="#B53B51";
document.documentElement.style.setProperty('--post-link-color', sc);
document.documentElement.style.setProperty('--line-color', sc);
document.documentElement.style.setProperty('--navbar-text-color', sc);
