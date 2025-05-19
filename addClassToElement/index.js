const newBox = document.createElement('div');

newBox.classList.add('box');


const container = document.querySelector('.container-boxes');

container.appendChild(newBox);


/* To remove the new box that was created:

newBox.classList.remove('box');

*/