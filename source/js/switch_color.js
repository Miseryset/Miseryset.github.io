var d = new Date();
var h = d.getHours();
if (h > 8 && h < 18) {
  document.write('<link type="text/css" rel="stylesheet" href="/css/global_c1.css" />');
} else {
  document.write('<link type="text/css" rel="stylesheet" href="/css/global_c2.css" />');
}
