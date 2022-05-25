let myList = [];

//this function creates the block to accept the task
function addTextToDom() {
  const container = document.querySelector("#content");
  const element = document.createElement("div");
  element.classList.add("item");
  container.appendChild(element);
}

//function that adds task to class textItem and adds it to array
function addTextToClass(checkBox, task, date) {
  const newTask = new textItem(checkBox, task, date);
  myList.push(newTask);
  console.log(myList);
}

//constructor function for making task entries
class textItem {
  constructor(checkBox, task, date) {
    this.task = task;
    this.date = date;
    this.checkBox = checkBox;
    this.info = function () {
      if (readStatus == true) {
        return "read";
      } else {
        return "unread";
      }
    };
  }
}
