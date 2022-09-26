

const submit = document.getElementById("submit");


submit.addEventListener("click", function(e) {
    if (confirm("Ви дійсно хочете відправити цю форму?")){
        alert("Форму надіслано")
    }
    else {
        alert("Форму не надіслано");
    }
});
