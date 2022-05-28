//function that draws the current board by iterating through
//the current library array
function submitText(myList) {
  const container = document.querySelector(".task-area");
  console.log(myList);

  for (let i = myList.length - 1; i < myList.length; i++) {
    let p;
    let p1;
    let closeBtn;
    let readBtn;

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

    // //Adds read button to card
    // readBtn = document.createElement("button");
    // readBtn.classList.add("readBtn");
    // readBtn.textContent = "Read";
    // div.appendChild(readBtn);

    // //Adds close button to card
    closeBtn = document.createElement("button");
    closeBtn.classList.add("closeBtn");
    closeBtn.textContent = "x";
    div.appendChild(closeBtn);

    // //engage event listener for close button
    closeBtn.addEventListener("click", (event) => {
      container.removeChild(div);
    });

    // let x = myLibrary[i].readStatus;
    // //engage event listener for read button
    // readBtn.addEventListener("click", (event) => {
    //   x = !x;
    //   if (x == true) {
    //     p1.textContent = "read";
    //   } else {
    //     p1.textContent = "unread";
    //   }
    // });
  }
}

export { submitText };
