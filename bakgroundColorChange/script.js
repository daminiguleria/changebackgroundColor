const btn=document.querySelector('button');
const body=document.querySelector('body');

const color=["red","blue","green","black"];

function clr(){
    const index=parseInt(Math.random()*color.length);
    body.style.backgroundColor=color[index];
}
btn.addEventListener("click",clr);
