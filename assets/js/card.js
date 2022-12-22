function CardLength(){
    var keys = Object.keys(sessionStorage);
    document.getElementById("demo").innerHTML = (keys.length)-1;//+ keys.length;
    
}
