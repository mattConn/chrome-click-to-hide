var head = document.querySelector("head");
head.innerHTML+="<style class=\"click-to-hide\"> *:hover {border: solid 1px red;} </style>";
var style = document.querySelector(".click-to-hide");

var active = true;

document.getElementsByTagName("body")[0].style.cursor = "crosshair";

for(var i=0;i<document.getElementsByTagName("a").length;i++){
  document.getElementsByTagName("a")[i].style.cursor = "crosshair";
}

document.onclick = function(e){
  if (active == true){
    e.preventDefault();
    e.target.style="display:none;"
    active = false;

    document.getElementsByTagName("body")[0].style.cursor = "auto";
    
    for(var i=0;i<document.getElementsByTagName("a").length;i++){
      document.getElementsByTagName("a")[i].style.cursor = "auto";
    }

	head.removeChild(style);
  }
}
