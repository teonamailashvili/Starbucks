function responsive(){
    var x = document.getElementById("responsive-nav");
    if(x.className === "nav-menu"){
        x.className += " responsive-menu";
    }else{
        x.className = "nav-menu";
    }
}