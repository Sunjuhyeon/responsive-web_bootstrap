$(document).ready(function(){
    const navidb =[
        ["Best Items", "#Best Items", "nav-item", "nav-link"]
        , ["Event", "#Event", "nav-item", "nav-link"]
        , ["회사소개", "#회사소개", "nav-item", "nav-link"]
        , ["고객리뷰", "#고객리뷰", "nav-item", "nav-link"]
        , ["대표홈페이지", "#대표홈페이지", "nav-item", "nav-link"]
    ]

    let nav =""
    for(c in navidb){
        nav += `<li class=${navidb[c][2]}><a href=${navidb[c][1]} class=${navidb[c][3]}>${navidb[c][0]}</a></li>`
        $(".navbar-nav").html(nav)
    }
})