import { submitText } from "./submitText";

let myList = [];

//function that adds task to class textItem and adds it to array
function addTextToClass(checkBox, task, date) {
  const newTask = new textItem(checkBox, task, date);
  myList.push(newTask);
  submitText(myList);
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

export { addTextToClass };
