const cont = document.querySelector(".container");

let row = 0;
while (row < 16) {
  const divRow = document.createElement("div");
  divRow.classList.add("row");
  cont.appendChild(divRow);

  let column = 0;
  while (column < 16) {
    const divColumn = document.createElement("div");
    divColumn.classList.add("column");
    divRow.appendChild(divColumn);
    column++;
  }
  row++;
}
