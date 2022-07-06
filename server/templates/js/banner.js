window.onload = ()=>{
    var banners = document.getElementsByClassName("login_form_icon")
    for (var i = 0; i < banners.length; i++) {
        var that = banners[i];
        var thatParent = that.parentElement.getElementsByClassName("login_form_banner")[0];
        that.style.width = thatParent.offsetWidth*0.85 + "px";
        var iw = 1;
        while (that.offsetWidth > thatParent.offsetWidth) {
            that.style.width = that.offsetWidth*0.9 + "px";
            iw++;
        }
    }/*
    setTimeout(()=>{
        for (var i = 0; i < banners.length; i++) {
            var that = banners[i];
            var that_raw_width = that.offsetWidth;
            mode = "to_small";
            setInterval(()=>{
                if (that.offsetWidth < that_raw_width*0.6) {
                    mode = "to_big";
                }
                if (that.offsetWidth > that_raw_width) {
                    mode = "to_small";
                }
                if (mode == "to_big") {
                    that.style.width = that.offsetWidth*(70/69) + "px";
                }
                if (mode == "to_small") {
                    that.style.width = that.offsetWidth*(69/70) + "px";
                }
            },10)
        }
    },100)*/
    
    
    
}


var bounce_start = () =>{
    bounce_start = () => {}
    var banners = document.getElementsByClassName("login_form_icon")
    setTimeout(()=>{
        for (var i = 0; i < banners.length; i++) {
            var that = banners[i];
            var that_raw_width = that.offsetWidth;
            var start = that_raw_width*0.85
            var t = 0
            setInterval(()=>{
                if (t >= 2*Math.PI){
                    t = 0;
                }
                that.style.width = start + (0.15*Math.sin(t+Math.PI/2)  *that_raw_width) + "px";
                t+=0.03333;
            }, 10)
            
                
        }
    },100)
}