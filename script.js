const cont = document.querySelector(".container");

function setBasicGrid(gridSize) {
  let row = 0;
  while (row < gridSize) {
    const divRow = document.createElement("div");
    divRow.classList.add("row");
    cont.appendChild(divRow);

    let column = 0;
    while (column < gridSize) {
      const divColumn = document.createElement("div");
      divColumn.classList.add("column");
      divRow.appendChild(divColumn);
      column++;
    }
    row++;
  }
}

setBasicGrid(16);

/*
const rows = document.querySelectorAll(".row");
const columns = document.querySelectorAll(".column"); 

rows.forEach((row) => {
  row.addEventListener("mouseover", () => {
    row.classList.add("hovered");
  });
});

columns.forEach((column) => {
  column.addEventListener("mouseover", () => {
    column.classList.add("hovered");
  });
});
-> code worked, but just one time - didn't work dynamically 
*/

cont.addEventListener("mouseover", (e) => {
  if (e.target.classList.contains("column")) {
    e.target.classList.add("hovered");
  }
});

const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  //   columns.forEach((column) => {
  //     column.remove();
  //   });
  //   rows.forEach((row) => {
  //     row.remove();
  //   }); // doesn't work dynamically, old NodeList is being removed

  let newGridSize = prompt("Enter a number between 1 and 100", 16);
  newGridSize = Math.min(100, Math.max(1, newGridSize));

  cont.innerHTML = "";
  setBasicGrid(newGridSize);
});
