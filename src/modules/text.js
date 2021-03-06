import parseISO from "date-fns/parseISO";
import isToday from "date-fns/isToday";
import isThisWeek from "date-fns/isThisWeek";

const LOCAL_STORAGE_LIST_KEY = "task.lists";

let myList = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [];

//function that adds task to class textItem and adds it to array
function addTextToClass(prjId, task, date) {
  const newTask = new textItem(prjId, task, date);
  if (newTask.task !== "") {
    myList.push(newTask);
    save();
    if (prjId == 0) {
      submitText("all");
    } else {
      submitText("project", newTask.prjId);
    }
  }
  console.log(newTask);
}

//constructor function for making task entries
class textItem {
  constructor(prjId, task, date) {
    this.task = task;
    this.date = date;
    this.prjId = prjId;
    this.info = function () {
      if (readStatus == true) {
        return "read";
      } else {
        return "unread";
      }
    };
  }
}

function submitText(action, pId) {
  const container = document.querySelector(".card-area");
  container.innerHTML = "";

  if (action == "all") {
    for (let i = 0; i < myList.length; i++) {
      let p;
      let p1;
      let closeBtn;
      let editBtn;

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

      // //Adds edit button to card
      editBtn = document.createElement("button");
      editBtn.classList.add("editBtn");
      editBtn.textContent = "E";
      div.appendChild(editBtn);

      // //engage event listener for edit button
      editBtn.addEventListener("click", (event) => {
        let edit = prompt("Please edit your task", `${myList[i].task}`);
        p.textContent = edit;
      });

      // //Adds close button to card
      closeBtn = document.createElement("button");
      closeBtn.classList.add("closeBtn");
      closeBtn.textContent = "x";
      div.appendChild(closeBtn);

      // //engage event listener for close button
      closeBtn.addEventListener("click", (event) => {
        container.removeChild(div);
        myList.splice(i, 1);
        submitText("all");
      });
    }
  } else if (action == "today") {
    for (let i = 0; i < myList.length; i++) {
      if (isToday(parseISO(myList[i].date))) {
        let p;
        let p1;

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
      }
    }
  } else if (action == "week") {
    for (let i = 0; i < myList.length; i++) {
      if (isThisWeek(parseISO(myList[i].date))) {
        let p;
        let p1;

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
      }
    }
  } else if (action == "project") {
    for (let i = 0; i < myList.length; i++) {
      if (myList[i].prjId == pId) {
        let p;
        let p1;

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
      }
    }
  }
}

function save() {
  localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(myList));
}

export { addTextToClass, textItem, submitText };
