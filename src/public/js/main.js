let deleteBtn = document.getElementsByClassName("btn-danger");

let alertMsg = document.getElementById("alert");
let dismissBtn = document.getElementById("close-alert");


for (let del of deleteBtn) {
  del.addEventListener("click", confirmAction);
}

function confirmAction(e) {
  let opt = confirm("Are you sure you want to delete entry?");
  if (opt == false) {
    e.preventDefault();
  }
}

dismissBtn.addEventListener("click", dismissAlert);

function dismissAlert() {
  alertMsg.style.display = "none";
}