let gridSize = 16;
let canErase = false;
let isRainbow = false;


let container = document.querySelector("#container");
let input = document.querySelector("#input");
input.placeholder = "Enter a grid size 16-100";
let enterButton = document.querySelector("#enter");
let body = document.querySelector("body");
let bottomContainer = document.querySelector("#bottom-container");
let erase = document.querySelector("#erase");
let rainbow = document.querySelector("#rainbow");
let click = document.querySelector("#clickto");

createGrid();


function createGrid() {

    for (let i = 0; i <gridSize; i++) {
        const rows = document.createElement("div");
        rows.style.cssText = "display: flex; flex: 1";

        for (let i = 0; i < gridSize; i++) {
            const grid = document.createElement("div");
            grid.classList.add("columns");
            grid.style.cssText = "border: 0.5px solid rgb(137, 109, 235,0.1); flex: 1; background-color: white"
        
            rows.appendChild(grid);
        }
        container.appendChild(rows);
    }
    
    container.addEventListener("mouseover", (e) => {
        if (canErase === false) {
             if (e.target.classList.contains("columns")) {
                    if (isRainbow === false) {
                        e.target.style.cssText = `border: 1px solid rgb(137, 109, 235,0.1); flex: 1; background-color: black`;
                    }
                    else {
                        e.target.style.cssText = "border: 1px solid rgb(137, 109, 235,0.1); flex: 1;";
                        e.target.style.backgroundColor = `${getRandomColor()}`;
                        console.log(e.target.style.backgroundColor);
                     }    
                }
        }
        else {
            if (e.target.classList.contains("columns")) {
                e.target.style.cssText = "border: 1px solid rgb(137, 109, 235,0.1); flex: 1; background-color: white"
            }
        }
    });
}



function updateGrid() {
    gridSize = input.value;
    gridSize = parseInt(gridSize)

    if (gridSize <= 100 && gridSize>= 16) {
        box.removeChild(container);
        container = document.createElement("div");
        container.id = "container";
        box.insertBefore(container, bottomContainer);
    
        createGrid();
    }

    container.addEventListener("mouseover", (e) => {
        if (canErase === false) {
            if (e.target.classList.contains("columns")) {
                if (isRainbow === false) {
                    e.target.style.cssText = "border: 1px solid rgb(137, 109, 235,0.1); flex: 1; background-color: black";
                }
                else {
                    e.target.style.cssText = "border: 1px solid rgb(137, 109, 235,0.1); flex: 1;";
                    e.target.style.backgroundColor = `${getRandomColor()}`;
                }
            }
        }
        else {
            if (e.target.classList.contains("columns")) {
                console.log("hello");
                e.target.style.cssText = "border: 1px solid rgb(137, 109, 235,0.1); flex: 1; background-color: white"
            }
        }
    });

     input.value ="";
     input.placeholder ="Enter a grid size 16-100";
}

function getRandomColor() {
    let randomNumber1 = Math.floor(Math.random() * 255);
    let randomNumber2 = Math.floor(Math.random() * 255)
    let randomNumber3 = Math.floor(Math.random() * 255)

    return "rgb(" + randomNumber1 + ", " + randomNumber2 + ", " + randomNumber3 + ")"
}



enterButton.addEventListener("click", updateGrid);

input.addEventListener("keyup", (e) => {
    if (e.keyCode === 13) {
        updateGrid();
    }
});

input.addEventListener("focus", () => {
    input.placeholder= "";
    console.log("hello");
})

erase.addEventListener("click", () => {
    canErase = !canErase;
    if (canErase === true) {
        erase.style.backgroundColor = "white";
    }
    else {
        erase.style.cssText = "background-color: (0, 0, 0, .89)";
    }
});

rainbow.addEventListener("click", () => {
    isRainbow = !isRainbow;
    if (isRainbow === true) {
        rainbow.style.backgroundColor = "white";
    }
    else {
        rainbow.style.cssText = "background-color: (0, 0, 0, .89)";
    }
});





