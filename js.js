document.onreadystatechange = function () {
    let state = document.readyState
      if (state == 'complete') {
        document.getElementById('load').style.visibility="hidden";
   }
   document.onreadystatechange = function () {
    let state = document.readyState;
    if (state == 'complete') {
        setTimeout(function(){
          document.getElementById('load').style.visibility="hidden";
        },1000);
   }
}
document.onreadystatechange = function () {
    let state = document.readyState;
    if (state == "interactive") {
      document.getElementById("contents").style.visibility = "hidden";
      document.getElementById("load").style.visibility = "visible";
    } else if (state == "complete") {
      setTimeout(function () {
        document.getElementById("load").style.visibility = "hidden";
        document.getElementById("contents").style.visibility = "visible";
      }, 5000);
    }
  };
  }