let deleteBtn = document.getElementsByClassName("btn-danger");

for (let del of deleteBtn) {
    del.addEventListener("click", doSomething)
}

function doSomething(e) {
    let opt = confirm("Are you sure you want to delete entry?");
    if (opt == false) {
        e.preventDefault();
    } 
    
}

