const ol = document.querySelector('ol');
const lastChild = ol.lastElementChild;

ol.insertBefore(lastChild,ol.firstChild);

//deuxième partie echanger titre section 2 et 3

const sectionTwo = document.querySelector('.secTwo h2');
const sectionThree = document.querySelector('.secThree div h2');

const echangeTwo = sectionTwo.cloneNode(true); 
const echangeThree = sectionThree.cloneNode(true);
document.querySelector('.secTwo').replaceChild(echangeThree, sectionTwo ); 
document.querySelector('.secThree div').replaceChild(echangeTwo, sectionThree); 

//troisième partie suprimer section 3
document.querySelector('.secThree').remove();





