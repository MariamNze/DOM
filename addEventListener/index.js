const image = document.querySelector('.img-dogs');
const title = document.querySelector('.title');

image.addEventListener('click', function () {
  image.src = "https://placedog.net/502";
  image.alt = "picture of a cute dog";
});

title.addEventListener('mouseover', () => {
    title.style.color = "purple";
});

title.addEventListener('mouseout', () => {
    title.style.color = "black";
});