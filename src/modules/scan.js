function scan() {
  let cards = document.getElementsByClassName("card");
  let title = document.getElementsByClassName("title");
  let date = document.getElementsByClassName("date");

  for (let i = 0; i < cards.length; i++) {
    console.log(cards[i]);
    console.log(title[i]);
    console.log(date[i]);
  }
}

export { scan };
