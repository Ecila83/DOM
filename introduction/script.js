console.log(document.title);

document.title = "Modifying the DOM";
document.body.style.backgroundColor = "#FF69B4";
document.body.style.backgroundColor = "rgb(120,120,99)";
let twoChildren = document.body.children;
for(let child of twoChildren){
    console.log(child);
}