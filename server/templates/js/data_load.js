var forEach = (arr, func)=>{
    for (var i = 0; i < arr.length; i++) {
        func(arr[i])
    }
}

var nonLogin = ()=>{
    
    
    forEach(document.getElementsByTagName("img"),
    /** @param {HTMLElement} i */
    (i)=>{
        if (i.classList.contains("header_user_icon")){
            console.log(i)
            i.src = "./resources/default_user_icon.png"
        }
    })
}

var init = ()=>{
    nonLogin()
}


window.onload = init