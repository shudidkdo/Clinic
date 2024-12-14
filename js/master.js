

let navberslowbtn=document.querySelector(".navber-slow-btn")
let navbarcollapes=document.querySelector(".navbar-collapes")
let navbarhidebtn=document.querySelector(".navbar-hide-btn")

navberslowbtn.addEventListener("click",function(){
    navbarcollapes.classList.add("navbar-show")
})
navbarhidebtn.addEventListener("click",function(){
    navbarcollapes.classList.remove("navbar-show")
})

//   search color img
window.addEventListener("resize", changeSearchicon)
function changeSearchicon(){
    let winsize=window.matchMedia("(min-width:1200px)");
    if(winsize.matches){
        document.querySelector(".search-icon img").src="imgs/search-icon.png";
    }else{
        document.querySelector(".search-icon img").src="imgs/search-icon-dark.png";
    }
}
changeSearchicon()



let resizeTimer;
window.addEventListener("resize",()=>{
    document.body.classList.add("resize-animation-stopper")
    clearTimeout(resizeTimer)
    resizeTimer = setTimeout(() => {
        document.body.classList.remove("resize-animation-stopper")
    }, 400);
})

// bouutm

let bouutm=document.querySelector(".bouutm")

window.addEventListener("scroll", ()=>{
    if(window.scrollY >= 600){
        bouutm.style.display="block"
    }else{
        bouutm.style.display="none"
    }
})
bouutm.addEventListener("click",()=>{
    window.scrollTo({
        left:0,
        top:0,
        behavior:"smooth"
    })
})


var swiper = new Swiper(".pantrt", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
    delay: 7500,
    disableOnInteraction: false,
    },
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
    // loop:true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    });