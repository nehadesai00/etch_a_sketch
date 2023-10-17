let size_button = document.querySelector("#size");
let size_input;
let grid_container = document.querySelector("#grid-container");

size_button.addEventListener('click', () => {
    size_input = Number(prompt("Please enter a size:"));

    let total_squares = size_input * size_input;

    for (let i = 1; i <= total_squares; i++) {
        let one_square = document.createElement("div");
        grid_container.appendChild(one_square);
    }
});
