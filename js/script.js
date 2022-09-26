let buttons = document.getElementsByClassName('button');
let form = document.getElementsByClassName('form');


const submit = document.getElementById("submit");

submit.addEventListener("click", function(e) {
    if (confirm("Дійсно відправити цю форму?")){
        alert("Форму відправлено")
    }
    else {
    alert("Форму не відправлено");
}
});
