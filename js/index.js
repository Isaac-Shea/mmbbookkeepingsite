window.onscroll = function() {scrollCheck()};

// NAV SCROLL
function scrollCheck() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("nav").classList.add("on-scroll");
    } else {
        document.getElementById("nav").classList.remove("on-scroll");
    }
}

function openNav() {
    document.getElementById("fullPageNav").style.width = "100%";
    document.getElementById("navContent").style.display = "flex";
}

function closeNav() {
    document.getElementById("fullPageNav").style.width = "0%";
    document.getElementById("navContent").style.display = "none";
}