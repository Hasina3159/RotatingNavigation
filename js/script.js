let container = document.getElementById("container");
let btn = document.getElementById("btn");
let nav = document.getElementById("nav");


btn.addEventListener("click", (e) => {
    container.classList.toggle("rotate")
    nav.classList.toggle("show")
    btn.classList.toggle("close");
    if(btn.classList.contains("close")){
        btn.innerHTML = " <span> &times; </span>"
    }else{
        btn.innerHTML = `<span> <i class="fa fa-bars" aria-hidden="true"></i> </span>`;
    }
})