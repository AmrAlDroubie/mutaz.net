// open list
$(".program-list-title").click(function(){
    $(this).siblings(".program-list-content").toggleClass("open").slideToggle(500);
    $(this).toggleClass("active")
})

// open program
$(".pro-link").click(function(e){
    e.preventDefault();
    $(this).siblings(".pro-info").slideToggle(200);
    $(this).parent(".pro-item").siblings().children(".pro-info").slideUp(200);
})

// Dark mode
let modeBtn = document.querySelector("#mode-btn");
let headDom = document.querySelector("head");
let linkDark = document.createElement("link");
let linkDarkAr = document.createElement("link");
linkDarkAr.setAttribute("rel","stylesheet");
linkDarkAr.setAttribute("href","css/dark_mode_rtl.css");
linkDark.setAttribute("rel","stylesheet");
linkDark.setAttribute("href","css/dark_mode.css");
let mode = "";

modeBtn.onclick = function(e){
    e.preventDefault();
    if(document.querySelector("head link[href='css/dark_mode.css']")){
        document.querySelector("head link[href='css/dark_mode.css']").remove();
        mode ="light";
        modeBtn.querySelector("i").className = "fas fa-moon";
        if($("body").css("direction") == "rtl"){
            document.querySelector("head link[href='css/dark_mode_rtl.css']").remove();
        }
    }else{
        headDom.append(linkDark);
        mode='dark';
        modeBtn.querySelector("i").className = "mutaz mutaz-sun";
        if($("body").css("direction") == "rtl"){
            headDom.append(linkDarkAr);
        }
    }

}

// expand lists
let expandState = true;

document.querySelector("#expand-lists").onclick = function(){
    document.querySelectorAll(".program-list-content").forEach(ele => {
       if(ele.classList.contains("open")) {
           expandState = true;
           ele.classList.remove("open")
       }else{
           expandState = false;
           ele.classList.add("open")
       }
    });
    if(expandState){
        $(".program-list-content").slideUp(200);
        $(".program-list-title").removeClass("active")
    }else{
        $(".program-list-content").slideDown(200);
        $(".program-list-title").addClass("active")
    }
}


// search submit
$(".search .icon").click(function(){
    if($(".search input").val() == ""){
        alert("Please Enter Text To search it")
    }else{
        $(".search").submit();
    }

})

// footer year
let data  =  new Date();
let year = data.getFullYear();
document.querySelector("#this-year").innerHTML = year;