// <=============== MENU =================>
function menu(){
    document.querySelector('.navbar-nav').classList.toggle('end-0');
}
// < ====== blue_border ======= >
let blue_border = document.querySelectorAll('.blue_border'),
    h4 = document.querySelectorAll('.capsul h4');
for(let i = 0; i < h4.length; i++){
    blue_border[i].style.width = h4[i].innerHTML
};
// shadow-sm
// < ================ shadow navbar && Scroll UP ================== >
let btnScroll = document.getElementById('btnScroll'),
    nav = document.querySelector('nav');
onscroll = ()=>{
    if (scrollY >= 250) {
        btnScroll.classList.add('bottom-0')
        nav.classList.add('shadow-sm')
    }else{
        btnScroll.classList.remove('bottom-0')
        nav.classList.remove('shadow-sm')
    }
}
btnScroll.onclick = ()=> scroll({top:0})
// < ================ ScrollReveal ================== >
let commun = {
    distance :'90px',
    duration :1000,
    reset :true,
}
let scrX = ScrollReveal({
    origin :'top',
    ...commun
});
scrX.reveal('.home h1, #svg',{delay:200});
scrX.reveal('.work .image, .contact input, .contact textarea, .contact .btn, .home a',{interval:150});
let scrY = ScrollReveal({
    origin :'right',
    ...commun
});
scrY.reveal('.about h3, .about p',{interval:200});
scrY.reveal('.skill img',{delay:150});
let scr_Y = ScrollReveal({
    origin :'left',
    ...commun
});
scr_Y.reveal('.skill h3, .skill p, .capsul, .about img',{interval:150});
scr_Y.reveal('.blue_title',{delay:200})