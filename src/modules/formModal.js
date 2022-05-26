function buildModal() {
  //create the dialog Modal box and put it in #content div
  const container = document.querySelector(".task-area");
  const diag = document.createElement("dialog");
  diag.id = "dialogMod";
  document.body.appendChild(diag);

  // Create a form dynamically
  const form = document.createElement("form");
  form.setAttribute("method", "post");
  form.setAttribute("action", "submit.php");

  // Create an input element for Full Name
  const input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("name", "FullName");
  input.setAttribute("placeholder", "Full Name");

  //Create menu container for 'cancel' and 'submit'
  const menu = document.createElement("menu");

  //Create 'cancel' button
  const cancel = document.createElement("button");
  cancel.id = "cancel";
  cancel.setAttribute("type", "reset");
  cancel.innerHTML = "CANCEL";

  //Create 'submit' button
  const submit = document.createElement("button");
  submit.id = "cancel";
  submit.innerHTML = "SUBMIT";

  diag.appendChild(form);
  form.appendChild(input);
  form.appendChild(menu);
  menu.appendChild(cancel);
  menu.appendChild(submit);
}

export { buildModal };
