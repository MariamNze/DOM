document.body.addEventListener("mousemove", function (event) {
    const cursorPosition = document.querySelector("#title-cursor-position");
    cursorPosition.innerHTML = `Position: X: ${event.clientX}, Y: ${event.clientY}`;
});
