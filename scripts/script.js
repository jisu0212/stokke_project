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
//=================================tab
const categoryBtn = document.querySelectorAll ('.part4_tab a')
const contents = document.querySelectorAll ('.best .part4_contents')
for(let i = 0; i<7; i++){
    categoryBtn[i].addEventListener('click', function(e){
        e.preventDefault()
        contents[0].style = 'display:none';
        contents[1].style = 'display:none';
        contents[2].style = 'display:none';
        contents[3].style = 'display:none';
        contents[4].style = 'display:none';
        contents[i].style = 'display:flex';
        categoryBtn[0].style = 'text-decoration: none; font-weight:400';
        categoryBtn[1].style = 'text-decoration: none; font-weight:400';
        categoryBtn[2].style = 'text-decoration: none; font-weight:400';
        categoryBtn[3].style = 'text-decoration: none; font-weight:400';
        categoryBtn[4].style = 'text-decoration: none; font-weight:400';
        categoryBtn[i].style = 'text-decoration: underline; font-weight:600';
    })
}