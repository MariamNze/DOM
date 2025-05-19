// fichier script.js
const bearsPictures = [
  "https://placebear.com/500/279",
  "https://placebear.com/500/280",
  "https://placebear.com/500/300",
  "https://placebear.com/500/302",
  "https://placebear.com/500/305",
];
// À toi de jouer ici 👇 

const allPictures = document.querySelectorAll('img');

for (let i = 0; i < allPictures.length; i++) {
  allPictures[i].src = bearsPictures[i];
}