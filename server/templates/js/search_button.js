var search_button = ()=>{
    search()
}
var timers = []

var forEach = (arr, func)=>{
    for (var i = 0; i < arr.length; i++) {
        func(arr[i])
    }
}


function ExtendSearchBar(){
    
    forEach(timers,(i)=>{
        console.log(i)
        clearTimeout(i)
    })
    timers = []
    search_button = ()=>{
        search()
    }
    
    var search_bar = document.getElementsByClassName("search")[0].classList.add("state2")
    timers.push(setTimeout(()=>{
        document.getElementsByClassName("search_input")[0].classList.add("state2");
    }, 200))

    console.log(timers)
    
    setTimeout(()=>{
        document.getElementsByClassName("search_input")[0].focus();
        document.getElementsByClassName("search_input")[0].addEventListener("focusout",()=>{
            if (document.getElementsByClassName("search_input")[0].value != ""){
                return;
            }
            search_button = ExtendSearchBar
            //document.getElementsByClassName("search_input")[0].classList.add("hidden");
            document.getElementsByClassName("search_input")[0].classList.remove("state2");
            timers.push(setTimeout(()=>{
                document.getElementsByClassName("search")[0].classList.remove("state2");
                timers.push(setTimeout(()=>{
                    search_button = ExtendSearchBar
                }, 200))
            },200))
        })
    },300)
}

var search = ()=>{
    if (document.getElementsByClassName("search_input")[0].value == ""){
        return;
    }
    forEach(timers,(i)=>{
        console.log(i)
        clearTimeout(i)
    })
    timers = []
    document.getElementsByClassName("search_input")[0].focus();
    console.log("now doing search!")
}

search_button = ExtendSearchBar