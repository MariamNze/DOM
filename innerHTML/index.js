const nameOfUser = prompt("Quel est votre nom ?");

const title = document.querySelector('.title');

title.innerHTML = `Hello, ${nameOfUser} !`;