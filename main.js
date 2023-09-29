const buttonStart = document.querySelector('.begin');
const background = document.querySelectorAll('.background-images2 > div, .background-images1 > div');
const pikachu = document.querySelector('.pikachu');
const pokeball = document.querySelector('.pokeball');
const scenarios = document.querySelectorAll('.scenario p');
const root = document.documentElement;
console.log(background);

buttonStart.addEventListener('click', () => {
    pikachu.style.animationPlayState = "running";
    buttonStart.style.display='none';
    runBackground();
    setTimeout(affichageText, 7000);
    setTimeout(affichagePokeball, 8000);
    setTimeout(stopBackground, 8000);
});

function affichageText() {
    scenarios.forEach(scenario => {
        scenario.style.animationPlayState = 'running';
    });
};

function affichagePokeball() {
    pokeball.style.animationPlayState = 'running';
};

function runBackground() {
    background.forEach(element => {
        element.style.animationPlayState = 'running';
    });
};

function stopBackground() {
    background.forEach(element => {
        element.style.animationPlayState = 'paused';
    });
};

let isDragging = false;
let offset = { x: 0, y: 0 };

// pokeball.addEventListener('mousedown', (event) => {
//     isDragging = true;
//     offset.x = event.clientX - maDiv.offsetLeft;
//     offset.y = event.clientY - maDiv.offsetTop;
// });

// root.addEventListener('mousemove', (event) => {
//     if (isDragging) {
//         pokeball.style.left = (event.clientX - offset.x) + 'px';
//         pokeball.style.top = (event.clientY - offset.y) + 'px';
//     };
// });


pokeball.addEventListener('click', () => {
    pokeball.style.left = 'var(--mouse-x)';
    pokeball.style.top = 'var(--mouse-y)';
    // pokeball.style.animation = 'roll linear 1s running';
});

root.addEventListener('mousemove', (event) => {
    root.style.setProperty('--mouse-x', event.clientX -200 + "px");
    root.style.setProperty('--mouse-y', event.clientY -1000 + "px");
});