let titles = document.querySelectorAll('.important');

titles.forEach(title =>{
    title.setAttribute('title','This is an important item');
})

let img =document.querySelectorAll('img:not(.important)');

img.forEach(image=>{
    image.style.display = 'none';
})

let p = document.querySelectorAll('p');

p.forEach(para=>{
    console.log(para.textContent);

    if(para.classList.length > 0){
        console.log('class: ',para.classList.value)
    }
})
let paragraphe = document.querySelectorAll('p');
paragraphe.forEach(para=>{
    let randomColors =getRandomRGBColor();
    para.style.color =randomColors
})

function getRandomRGBColor(){
   const r = Math.floor(Math.random()*256);
   const g = Math.floor(Math.random()*256);
   const b = Math.floor(Math.random()*256);

return `rgb(${r},${g},${b})`;

}