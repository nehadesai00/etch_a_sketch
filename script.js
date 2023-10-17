let size_button = document.querySelector("#size");
let size_input;
let grid_container = document.querySelector("#grid-container");
let black = document.querySelector("#black");
let multicolor = document.querySelector("#multicolor");
let grid_squares = document.getElementsByClassName("squares");
let clear = document.querySelector("#clear");


size_button.addEventListener('click', () => {
    size_input = Number(prompt("Please enter a size:"));

    let total_squares = size_input * size_input;

    for (let i = 1; i <= total_squares; i++) {
        let one_square = document.createElement("div");

        one_square.className = "squares";
        
        one_square.style.width = 600/(size_input) + "px";
        one_square.style.height = 600/(size_input) + "px";
        
        grid_container.appendChild(one_square);
    }
});


black.addEventListener('click', () => {
    for (let i = 0; i < grid_squares.length; i++) {
        grid_squares[i].addEventListener('mouseover', () => {
            grid_squares[i].style.backgroundColor = "black";
        });
    }
});


multicolor.addEventListener('click', () => {
    for (let i = 0; i < grid_squares.length; i++) {
        grid_squares[i].addEventListener('mouseover', () => {
            grid_squares[i].style.backgroundColor = "#" + randomColor();
        });
    }
});


function randomColor() {
    return Math.floor(Math.random()*16777215).toString(16);
}


clear.addEventListener('click', () => {
    let nodes_to_delete = Array.from(grid_squares);

    for (let i = 0; i < nodes_to_delete.length; i++) {
        nodes_to_delete[i].remove();
    }
});
