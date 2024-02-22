// preloader
const loader = document.getElementById("preloder");
window.addEventListener("load", ()=>{

    loader.style.display = "none";
})

let nav = document.querySelector(".navbar");
    let lastScrollY = window.scrollY;

    window.addEventListener("scroll",()=>{

        if(lastScrollY < window.scrollY){
            nav.classList.add("Nav-hidden");

        }else{
          nav.classList.remove("Nav-hidden");
        }
        lastScrollY = window.scrollY;
    });

// mobile nav
const sidebar = document.getElementsByClassName("sidebar")[0];
const bar1 = document.getElementsByClassName("bar1")[0];
const bar2 = document.getElementsByClassName("bar2")[0];
const bar3 = document.getElementsByClassName("bar3")[0];

const showSidebar = () => {
    nav.classList.remove("Nav-hidden");
    const classRemove = sidebar.classList.contains("sidebarClicked");
    if(classRemove){
        sidebar.classList.remove("sidebarClicked");
        bar1.classList.remove("bar1Tranform");
        bar2.classList.remove("bar2Tranform");
        bar3.classList.remove("bar3Tranform");
    }
    else{
        sidebar.classList.add("sidebarClicked");
        bar1.classList.add("bar1Tranform");
        bar2.classList.add("bar2Tranform");
        bar3.classList.add("bar3Tranform");
    }
};
sidebar.addEventListener("click", showSidebar);

// hotel map
const HotelMap =document.querySelector(".HotelMap");

HotelMap.addEventListener("click", ()=>{

    const classRemove = HotelMap.classList.contains("HotelMapZoon");

    if(classRemove){
        HotelMap.classList.remove("HotelMapZoon");
    }
    else{
        HotelMap.classList.add("HotelMapZoon");
    }
})