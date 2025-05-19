const newCatImage = document.createElement('img');
newCatImage.src = "https://placecats.com/408/201";
newCatImage.alt = "cute cat";

const secondCard = document.querySelector('.second-card');
secondCard.appendChild(newCatImage);