let r = 20;
let c = 20;
let rainbowToggle = 0;

const screen = document.querySelector(".screen");

function grid(r,c) {
    screen.style.setProperty('--grid-rows',r);
    screen.style.setProperty('--grid-cols',c);

    for (i = 0; i < (r * c); i++) {
        let cell = document.createElement("div");
        screen.appendChild(cell).className = "cell";
    }

    const cells = document.querySelectorAll(".cell");
    cells.forEach(cell => cell.addEventListener('mouseover',draw));
}

function draw(e) {
    this.classList.add('drawn');
    if (rainbowToggle === 1) {
        this.style.setProperty('--cell-color','rgb(' + Math.floor(Math.random()*255) + "," + Math.floor(Math.random()*255) + "," + + Math.floor(Math.random()*255));
    } else {
        this.style.setProperty('--cell-color','black');
    }
}

grid(r,c);
const cells = document.querySelectorAll(".cell");
cells.forEach(cell => cell.addEventListener('mouseover',draw));

const layout = document.querySelector(".layout");
layout.addEventListener('click',setLayout);

function setLayout(e) {
    r = prompt('Enter number of rows (max = 100): ');
    c = r;
    if (r > 100|| c > 100) {
        alert('Exceeded maximum settings!');
        return;
    }
    clearGrid();
    grid(r,c);
    const cells = document.querySelectorAll(".cell");
    cells.forEach(cell => cell.addEventListener('mouseover',draw));
}

function clearGrid() {
    while (screen.firstChild) {
        screen.removeChild(screen.firstChild);
    }
}

const clear = document.querySelector(".clear");
clear.addEventListener('click',() => {
    clearGrid();
    grid(r,c);
});

const rainbow = document.querySelector(".rainbow");
rainbow.addEventListener('click',() => {
    if (rainbowToggle === 0) {
        rainbowToggle = 1;
    } else {
        rainbowToggle = 0;
    }
});

setInterval(
    function() {
    if(rainbowToggle===1) {
        rainbow.style.setProperty('background-color','rgb(' + Math.floor(Math.random()*255) + "," + Math.floor(Math.random()*255) + "," + + Math.floor(Math.random()*255))
    } else {
        rainbow.style.setProperty('background-color','paleturquoise')
    }
},500);