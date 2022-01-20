// open list
$(".program-list-title").click(function(){
    $(this).siblings(".program-list-content").toggleClass("open").slideToggle(200);
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
if($("body").css("direction") == "rtl"){
    headDom.append(linkDarkAr);
}
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
    
    localStorage.setItem("mode",mode);
}

window.onload = function(){
    if(localStorage.getItem("mode")=="light"){
        if(document.querySelector("head link[href='css/dark_mode.css']")){
            document.querySelector("head link[href='css/dark_mode.css']").remove();
            modeBtn.querySelector("i").className = "fas fa-moon"
        }
    }else{
        headDom.append(linkDark);
        modeBtn.querySelector("i").className = "mutaz mutaz-sun"
    }

}



// expand list 
$("#expand-lists").click(function(){
    if($(".program-list-content"))
    $(".program-list-content").slideToggle(200);
    $(".program-list-title").toggleClass('active');
})
$(".program-list-content").addClass("active")
console.log($(".program-list-content").hasClass("active"))


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