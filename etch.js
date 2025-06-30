
const theEtch = document.querySelector(".theEtch");
let height = 10;
let width = 30;

//ask user how big etch? get witdth and height variables
//generate the grid

for (let i = 0; i < height; ++i) {
    const row = document.createElement("div");
    row.classList.add("row");
    //row.classList.add("r" + i);
    theEtch.appendChild(row);
    for (let j = 0; j < width; ++j) {
        const square = document.createElement("div");
        square.classList.add("square");
        //square.textContent = " bob ";
        //square.classList.add("s" + i + "," + j);
        row.appendChild(square);
    }
}

 