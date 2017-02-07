function textReplace(msg) {
  document.getElementsByClassName("heart")[0].innerHTML = "&hearts; KAYRA";   
  window.setTimeout(function() {
    document.getElementsByClassName("heart")[0].innerHTML = "&hearts;";    
  }, 2000);   
}

window.onload = function() {
  var start = new Date("8/14/2012"),
    today = new Date(),
    timeDiff = Math.abs(start.getTime() - today.getTime()),
    diffDays = timeDiff / (1000 * 3600 * 24),
    yearDiff = Math.floor(diffDays / 365);

  console.log("Experience > " + yearDiff),
  document.getElementById("exp-year").innerHTML = yearDiff;
}