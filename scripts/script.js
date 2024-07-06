const product = document.querySelector('.product')
const menu = document.querySelector('.menu')
product.addEventListener('click', (e)=>{
    e.preventDefault();
    menu.classList.toggle('on')
})
/* header */
const head = document.querySelector('header')
window.addEventListener('scroll',function(){
    if(window.pageYOffset < 100){
        head.style.backgroundColor = 'rgba(0,0,0,0)'
        head.style.transition = 'background-color 0.3s'
    }
    if(window.pageYOffset >= 100){
        head.style.backgroundColor = 'rgba(0,0,0,0.9)'
        head.style.transition = 'background-color 0.3s'
    }
})