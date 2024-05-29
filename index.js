
// define grid size
let gridSize = 16;
function createGrid(size){

    // get the container element for the grid
    const gridContainer = document.querySelector("#grid");

    // create the grid:
    gridContainer.setAttribute("style", `grid-template-columns: repeat(${gridSize}, 1fr);`)
    for (let i=0; i<size; i++){
        for (let j=0; j<size; j++){
            const gridItem = document.createElement("div");
            gridItem.className = "grid-item";
            gridItem.setAttribute("style", "background-color: #ffffff;")
            
            // add color-changing event to the new grid-item
            // gridItem.addEventListener("mouseover", (e) => {
            //     e.target.style.backgroundColor = "blue";
            // });

            /* either method works (top or bottom) */

            gridItem.addEventListener("mouseover", () => {
                gridItem.setAttribute("style", `background-color: rgb(${getRandomRGB()}, ${getRandomRGB()}, ${getRandomRGB()});`);
            });

            gridContainer.appendChild(gridItem);
        }
    }
}

function getRandomRGB(){
    // Returns a random integer from 0 to 255:
    return Math.floor(Math.random() * 256);
}

const adjustGrid = document.querySelector(".grid-adjuster");
adjustGrid.addEventListener("click", () => {
    let newSize = prompt("Enter new grid size: ");  // prompting for user input

    if (newSize > 100){
        while (newSize > 100){
            newSize = prompt("ERROR size too big: ")
        }
    }

    const gridContainer = document.querySelector("#grid");  // getting refrence to the grid

    // delete the current grid that we have
    for (let i=0; i<gridSize; i++){
        for (let j=0; j<gridSize; j++){
            const tempNode = document.querySelector(".grid-item")
            gridContainer.removeChild(tempNode);
        }
    }

    // update the grid size to the new and create a new grid
    gridSize = newSize
    createGrid(gridSize);
});

const cleanGrid = document.querySelector(".clean-grid");
cleanGrid.addEventListener("click", () => {
    const gridContainer = document.querySelector("#grid");  // getting refrence to the grid

    // delete the current grid that we have
    for (let i=0; i<gridSize; i++){
        for (let j=0; j<gridSize; j++){
            const tempNode = document.querySelector(".grid-item")
            gridContainer.removeChild(tempNode);
        }
    }

    // update the grid size to the new and create a new grid
    createGrid(gridSize);
});

createGrid(gridSize);