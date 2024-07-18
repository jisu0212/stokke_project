const product = document.querySelector('.product')
const menu = document.querySelector('.menu')
product.addEventListener('click', (e)=>{
    e.preventDefault();
    menu.classList.toggle('on')
})
/* header-background */
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
for(let i = 0; i<5; i++){
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
/* color_tab */
const color_tab = document.querySelectorAll ('.color span')
const color_img = document.querySelector ('.pdt_img img')
color_tab.forEach((obj, index)=>{
    obj.addEventListener('mouseover',()=>{
        color_img.src = `./images/best_pdt_00${index+1}_${obj.className}.jpg`
    })
})
for(let i of color_tab){
    i.addEventListener('mouseover',()=>{
        i.style.border = '3px solid #fff'
        i.style.boxShadow = '2px 2px 10px #5a5a5a'
    })
}
for(let i of color_tab){
    i.addEventListener('mouseout',()=>{
        i.style.border = 'none'
        i.style.boxShadow = 'none'
    })
}
const vid = document.querySelector('.part1 video')
vid.playbackRate = 0.6;
/* console.log(color_tab[0])
console.log(color_img)
color_tab[0].addEventListener('mouseover',()=>{
    color_img.src = './images/best_pdt_001_black.jpg'
    color_tab[0].style.border = '3px solid #fff'
    color_tab[0].style.boxShadow = '2px 2px 10px #5a5a5a'
})
color_tab[0].addEventListener('mouseout',()=>{
    color_tab[0].style.border = 'none'
    color_tab[0].style.boxShadow = 'none'
})
color_tab[1].addEventListener('mouseover',()=>{
    color_img.src = './images/best_pdt_002_khaki.jpg'
    color_tab[1].style.border = '3px solid #fff'
    color_tab[1].style.boxShadow = '2px 2px 10px #5a5a5a'
})
color_tab[1].addEventListener('mouseout',()=>{
    color_tab[1].style.border = 'none'
    color_tab[1].style.boxShadow = 'none'
}) */