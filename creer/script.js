/**
 * @returns [r, g, b]
 */
function generateColor() {
    const getComposant = () => Math.floor(Math.random() * (255 + 1))

    const r = getComposant() // 0-255
    const g = getComposant() // 0-255
    const b = getComposant() // 0-255

    return [r, g, b]
}

/**
 * Converti une couleur en "gris".
 * @param {number} r Composante rouge (0-255)
 * @param {number} g Composante verte (0-255)
 * @param {number} b Composante bluee (0-255)
 * @returns L'équivalent "gris" (0-255)
 */
function toGrey(r, g, b) {
    // Noir et blanc du mode de TV NTSC.
    return (0.299 * r) + (0.587 * g) + (0.114 * b)
}

function choisirTextColor(r, g, b) {
    const grey = toGrey(r, g, b)

    // Si on est dans la partie 127-255 -> c'est un couleur "claire" -> donc texte "sombre".
    if (grey > (255 / 2)) {
        return 'black'
    } else { // Sinon c'est un couleur foncée donc texte "clair".
        return 'white'
    }
}

function creationDiv(nom) {
    let newparagraphe = document.createElement('p');
    newparagraphe.innerHTML = nom;

    let newsection = document.createElement('section');
    newsection.appendChild(newparagraphe);

    // Point 1 : Choisir la couleur d'arrière plan.
    const color = generateColor()
    const newcolor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`
    newsection.style.backgroundColor = newcolor;

    /*
        Equivalent CSS :

        section--x {
            background-color: rgb(123, 123, 123);
            
        }
    */

    // Point 2 : Choisir la couleur du texte.
    const textColor = choisirTextColor(...color)
    newsection.style.color = textColor;

    let article = document.querySelector('article');
    article.appendChild(newsection);
}

let tab = ["alice", "julien", "alexis", "cassidy", "winona", "hanen", "jeremy"];

for (let i = 0; i < tab.length; i++) {
    creationDiv(tab[i]);
}



// ----- V2 -----------------------------------------------------------------------

function generateColor2() {
    return new Array(3).fill(null).map(() => Math.floor(Math.random() * (255 + 1)))
}

// The Fisher-Yates algorithm
const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    return array
}

const nomToSection = (nom) => {
    const elm = document.createElement('section')
    elm.innerHTML = `<p>${nom}</p>`

    const color = generateColor2()
    elm.style.backgroundColor = `rgb(${color.join(', ')})`
    elm.style.color = choisirTextColor(...color)

    return elm
}

document.querySelector('article').append(document.createElement('hr'))
document.querySelector('article').append(...shuffleArray(tab.map(nomToSection)))
