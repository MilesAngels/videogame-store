const nav = document.querySelector(".primary-nav");
const navToggle = document.querySelector(".toggle-nav");

navToggle.addEventListener("click", (e) => {
    e.preventDefault();
    const visible = nav.getAttribute("data-visible");
    //console.log(visible)
    if (visible === "false") {
        nav.setAttribute("data-visible", true);
        //console.log(visible);
        navToggle.setAttribute("aria-expanded", true);
    }
    else if (visible === "true") {
        nav.setAttribute("data-visible", false);
        //console.log(visible);
        navToggle.setAttribute("aria-expanded", false);
    }
    
});