
const btn= document.getElementById('menu-btn');

btn.addEventListener('click',navtoggle);

const menu=document.getElementById('menu');


function navtoggle(){
    btn.classList.toggle('open')
    menu.classList.toggle('flex')
    menu.classList.toggle('hidden')
}