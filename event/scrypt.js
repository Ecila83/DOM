//calcul les millisecondes depuis le 1er janvier 1970
const _initTime = Date.now()

//va calculer le nombre de seconde ecoulée depuis l'initialisation de date.now() avec deux decimales
const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}
//e est l'évenement lorsque une action est produit sur la page il contient des action qui vont se produire
const clickOnSquare = (e) => {
  // va afficher la deuxième class de l'element : le e target est l'endroit ou l'evenement a ete declenché, 
  //le classList[1]: fait reference au deuxième element de class du tableau 
  console.log(e.target.classList[1]);
  //appel la fonction du point precedent 
  console.log(getElapsedTime());
}

const creationDiv = (e) =>{
  console.log(e);
  let div = document.createElement('div');
  div.className="displayedsquare";
  div.classList.add(e.target.classList[1])
  let wrapper = document.querySelector('.displayedsquare-wrapper')
  wrapper.appendChild(div);

}

//la constante va recuperer tout les elements de class de .actionsquare
const actionSquares = document.querySelectorAll('.actionsquare')
console.log(actionSquares);
//cette boucle parcourt tout les elements de la nodeList pour executer l'evenement dans les acolades pour chaque element 

for (let actionSquare of actionSquares) {
  //addEventListener sert a attendre que l'evenement entre les acolade se produise 
  //ici il attend que le clic soit fait pour effectuer l'action definie dans la const precedente
  actionSquare.addEventListener('click', clickOnSquare);
  actionSquare.addEventListener('click', creationDiv);

}

