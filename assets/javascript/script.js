
  let words = ["Highlight","Grow", "Transform", "Create", "Advertise", "Find", "Expand", "Upgrade", "Change", "Market", "Be", "Streamline"];
  var elem = document.getElementById("develop");

  window.onload = function () {
    setInterval(function(){
        elem.innerHTML = words[Math.floor(Math.random()*12)];
    },3000);
  };
