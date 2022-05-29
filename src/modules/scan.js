import { textItem } from "./text";
import { createBoard } from "./createBoard";
import format from "date-fns/format";
import parseISO from "date-fns/parseISO";
import isToday from "date-fns/isToday";

function scan() {
  let cards = document.getElementsByClassName("card");
  let title = document.getElementsByClassName("title");
  let date = document.getElementsByClassName("date");
  let firstArray = [];

  for (let i = 0; i < cards.length; i++) {
    if (isToday(parseISO(date[i].innerHTML))) {
      let firstTask = new textItem(
        "milovan",
        title[i].innerHTML,
        date[i].innerHTML
      );
      firstArray.push(firstTask);
    } else {
      console.log("not today");
    }
  }
  createBoard(firstArray);
}

export { scan };
