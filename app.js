var clickToHide = function(arg){
    if(arg==true){
        
        document.addEventListener('click',function(e){
            e.target.style="display:none;";
        });
    } else {
        document.addEventListener('click',function(e){
            e.target.style="";
        });
    }
}
clickToHide(true);