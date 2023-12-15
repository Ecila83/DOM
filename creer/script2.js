let tab = ["alice", "julien", "alexis", "cassidy", "winona", "hanen", "jeremy"];
let article = document.body.appendChild(document.createElement('article'));

// Fonction pour mélanger aléatoirement un tableau
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Mélange aléatoire des noms des étudiants dans le tableau
let shuffledTab = shuffleArray(tab);

shuffledTab.forEach(studentName => {
    let section = document.createElement('section');
    let bgColor = getRandomRGBColor();
    section.style.backgroundColor = bgColor;

    let paragraph = document.createElement('p');
    paragraph.textContent = studentName;

    paragraph.classList.add(getContrastClass(bgColor));

    section.appendChild(paragraph);
    article.appendChild(section);
});

function getRandomRGBColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r},${g},${b})`;
}

function getContrastClass(bgColor) {
    let rgb = bgColor.substring(4, bgColor.length - 1).split(',');
    let luminance = 0.299 * parseInt(rgb[0]) + 0.587 * parseInt(rgb[1]) + 0.114 * parseInt(rgb[2]);

    return (luminance > 128) ? 'text-dark' : 'text-light';
}



