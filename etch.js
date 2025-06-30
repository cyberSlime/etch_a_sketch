
const theEtch = document.querySelector(".theEtch");
let height = prompt("Please enter the number of squares you would like lengthwise ", 50);
if (height > 100) {
    height = 100;
}
let width = prompt("Please enter the number of squares you would like crosswise",50);
if (width > 100) {
    width = 100;
} 

 


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
        square.addEventListener('mouseenter', () => {
            console.log("entered square " + i + j);
            square.classList.add("colored");

            let r = Math.floor(Math.random() * 256);
            let g =  Math.floor(Math.random() * 256);
            let b =  Math.floor(Math.random() * 256);

            square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;


        });
    }
}

 