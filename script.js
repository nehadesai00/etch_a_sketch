let size_button = document.querySelector("#size");
let size_input;
let grid_container = document.querySelector("#grid-container");
let black = document.querySelector("#black");
let multicolor = document.querySelector("#multicolor");
let grid_squares = document.getElementsByClassName("squares");
let clear = document.querySelector("#clear");
let is_multicolor = false;
let size_clicked_once = false;
let GRID_SIZE = 500;

size_button.addEventListener('click', () => {
    if (!size_clicked_once) {
        size_input = Number(prompt("Please enter a size:"));

        let total_squares = size_input * size_input;

        for (let i = 1; i <= total_squares; i++) {
            let one_square = document.createElement("div");

            one_square.className = "squares";
        
            one_square.style.width = GRID_SIZE/(size_input) + "px";
            one_square.style.height = GRID_SIZE/(size_input) + "px";
        
            one_square.addEventListener('mouseover', () => {
                one_square.style.backgroundColor = getColor();
            });

            grid_container.appendChild(one_square);
        }
        size_clicked_once = true;
    }

    else {
        let nodes_to_clear = Array.from(grid_squares);
        
        for (let i = 0; i < nodes_to_clear.length; i++) {
            nodes_to_clear[i].remove();
        }

        size_input = Number(prompt("Please enter a size:"));

        let total_squares = size_input * size_input;

        for (let i = 1; i <= total_squares; i++) {
            let one_square = document.createElement("div");

            one_square.className = "squares";
        
            one_square.style.width = GRID_SIZE/(size_input) + "px";
            one_square.style.height = GRID_SIZE/(size_input) + "px";
        
            one_square.addEventListener('mouseover', () => {
                one_square.style.backgroundColor = getColor();
            });

            grid_container.appendChild(one_square);
        }
    }
});


black.addEventListener('click', () => {
    is_multicolor = false;
});


multicolor.addEventListener('click', () => {
    is_multicolor = true;
});


function getColor() {
    if (is_multicolor) {
        return "#" + randomColor();
    }
    else {
        return "black";
    }
}


function randomColor() {
    return Math.floor(Math.random()*0xffffff).toString(16).padStart(6,"0");
}


clear.addEventListener('click', () => {
    let nodes_to_white = Array.from(grid_squares);

    for (let i = 0; i < nodes_to_white.length; i++) {
        nodes_to_white[i].style.backgroundColor = "white";
    }
});
