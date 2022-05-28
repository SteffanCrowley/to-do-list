//function that draws the current board by iterating through
//the current library array
function submitText(myList) {
  const container = document.querySelector(".card-area");
  // console.log(myList);
  // container.innerHTML = "";

  for (let i = myList.length - 1; i < myList.length; i++) {
    let p;
    let p1;
    let closeBtn;

    //creates card
    let div = document.createElement("div");
    div.classList.add(`card`);
    container.appendChild(div);

    //Adds task to card
    p = document.createElement("p");
    p.classList.add("title");
    p.textContent = myList[i].task;
    div.appendChild(p);

    // //Adds date status to card
    p1 = document.createElement("p");
    p1.classList.add("date");
    p1.textContent = myList[i].date;
    div.appendChild(p1);

    // //Adds close button to card
    closeBtn = document.createElement("button");
    closeBtn.classList.add("closeBtn");
    closeBtn.textContent = "x";
    div.appendChild(closeBtn);

    // //engage event listener for close button
    closeBtn.addEventListener("click", (event) => {
      container.removeChild(div);
    });
  }
}

export { submitText };
