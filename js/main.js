let user = [];
user[0] = document.getElementById("formName");
user[1] = document.getElementById("formSurname");
user[2] = document.getElementById("formPhone");

let showName = document.querySelector("#name");
let showSurname = document.querySelector("#surname");
let showPhone = document.querySelector("#phone");

function showUpdates() {
  showName.textContent = user[0].value;
  showSurname.textContent = user[1].value;
  showPhone.textContent = user[2].value;
}
