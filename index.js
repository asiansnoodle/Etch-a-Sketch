
// define grid size
let gridSize = 16;
function createGrid(){

    // get the container element for the grid
    const gridContainer = document.querySelector("#grid");

    // create the grid:
    gridContainer.setAttribute("style", `grid-template-columns: repeat(${gridSize}, 1fr);`)
    for (let i=0; i<gridSize; i++){
        for (let j=0; j<gridSize; j++){
            const gridItem = document.createElement("div");
            gridItem.className = "grid-item";
            gridItem.setAttribute("style", "background-color: grey; outline: dotted purple;")
            
            // add color-changing event to the new grid-item
            // gridItem.addEventListener("mouseover", (e) => {
            //     e.target.style.backgroundColor = "blue";
            // });

            /* either method works (top or bottom) */

            gridItem.addEventListener("mouseover", () => {
                gridItem.setAttribute("style", "background-color: blue;");
            });

            gridContainer.appendChild(gridItem);
        }
    }
}

createGrid();