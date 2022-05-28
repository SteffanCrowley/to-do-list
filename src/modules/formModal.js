function buildModal() {
  //create the dialog Modal box and put it in #content div
  const container = document.querySelector(".task-area");
  const diag = document.createElement("dialog");
  diag.id = "dialogMod";
  container.appendChild(diag);

  // Create a form dynamically
  const form = document.createElement("form");
  form.setAttribute("method", "dialog");
  //   form.setAttribute("action", "submit.php");

  // Create an input element for to do text
  const input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("name", "todotask");
  input.setAttribute("id", "todotask");
  input.setAttribute("placeholder", "Task to complete");

  // Create an input element for to do date
  const dateInput = document.createElement("input");
  dateInput.setAttribute("type", "date");
  dateInput.setAttribute("id", "due");
  dateInput.setAttribute("name", "due");
  dateInput.setAttribute("min", "2022-01-01");

  // Create a label element for to do text
  const label = document.createElement("label");
  label.setAttribute("for", "todotask");
  label.innerHTML = "Add new task: ";

  // Create a label element for the due date
  const dateLabel = document.createElement("label");
  dateLabel.setAttribute("for", "due");
  dateLabel.innerHTML = "Due Date: ";

  //Create menu container for 'cancel' and 'submit'
  const menu = document.createElement("menu");

  //Create 'cancel' button
  const cancel = document.createElement("button");
  cancel.id = "cancel";
  cancel.setAttribute("value", "cancel");
  cancel.innerHTML = "CANCEL";

  //Create 'submit' button
  const submit = document.createElement("button");
  submit.id = "submit";
  cancel.setAttribute("value", "default");
  submit.innerHTML = "SUBMIT";

  diag.appendChild(form);
  form.appendChild(label);
  form.appendChild(input);
  form.appendChild(dateLabel);
  form.appendChild(dateInput);
  form.appendChild(menu);
  menu.appendChild(cancel);
  menu.appendChild(submit);
}

export { buildModal };
