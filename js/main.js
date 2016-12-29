window.onload = function() {
  var start = new Date("8/14/2012");
  var today = new Date();
  var yearDiff = Math.abs(today.getFullYear() - start.getFullYear());
  document.getElementById("exp-year").innerHTML = yearDiff;
}