let deleteBtn = document.getElementsByClassName("btn-danger");

for (let del of deleteBtn) {
    del.addEventListener("click", doSomething)
}

function doSomething(e) {
    e.preventDefault();
    confirm("estas seguro?")
    
}

