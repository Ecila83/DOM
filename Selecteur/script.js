let title = document.querySelectorAll('.important');
for(let elem of title){
 elem.setAttribute("title", "This is an important item");
}

let img = document.querySelectorAll('img');
for(let imgElem of img){
    if(!imgElem.classList.contains('important')){
        imgElem.style.display = "none";
    }
}

let p =document.querySelectorAll('p');
for(let para of p){
    console.log(para.innerHTML);
    if(para.classList != ""){
        console.log(para.classList.value);
    }
}

for(let paragraphe of p){
    if(paragraphe.classList != ""){}
    else{
        let myRandomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        paragraphe.style.color = myRandomColor;
    }
}