const menuBtn = document.querySelector('.menu-btn');
const navBlock = document.querySelector('.navigation-panel');
const navText = document.querySelector('.navigation');
const navAndBurger=document.querySelector('.navigation-and-burger');
let menuOpen = false;
menuBtn.addEventListener('click', ()=>{
    if(!menuOpen){
        menuBtn.classList.add('open');
        navBlock.classList.add('show');
        navText.classList.add('show');
        navAndBurger.classList.add('show');
        menuOpen=true;
    }else{
        menuBtn.classList.remove('open');
        navBlock.classList.remove('show');
        navText.classList.remove('show');
        navAndBurger.classList.remove('show');
        menuOpen=false;
    }
});