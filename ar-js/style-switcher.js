const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click" , () =>{
    document.querySelector(".style-switcher").classList.toggle("open");
})
window.addEventListener("scroll" ,() =>{
    if(document.querySelector(".style-switcher").classList.contains("open"))
    {
        document.querySelector(".style-switcher").classList.remove("open");
    }
} )
/*-----------*/
const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color)
{
    alternateStyles.forEach((style) => {
        if(color == style.getAttribute("title"))
        {
            style.removeAttribute("disabled");
        }
        else
        {
            style.setAttribute("disabled", "true");
        }

    })
}
const daynight =document.querySelector(".day-night");
daynight.addEventListener("click", () =>{ 
    daynight.querySelector("i").classList.toggle("fa-sun");
    daynight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})
window.addEventListener("Load", () =>{
if(document.body.classList.contains("dark"))
{
    daynight.querySelector("i").classList.add("fa-sun");
    
}
else
{
    daynight.querySelector("i").classList.add("fa-moon");
}
})

const asidenav=document.getElementById('aside-nav'),
openNav=document.getElementById('nav-toggler'),
closeNav=document.getElementById('nav-close')


/*===== nav =====*/
/*  */
if(openNav){
    loginButton.addEventListener("click" , () =>{
        asidenav.classList.add('show-nav')
    })
}


/*===== nav =====*/
/*  */
if(closeNav){
    loginClose.addEventListener("click" , () =>{
        asidenav.classList.remove('show-nav')
    })
}




