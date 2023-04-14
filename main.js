const form = document.getElementById("formulary")
const lineA = document.getElementById("campoA")
const lineB = document.getElementById("campoB")
const sucessMessage = document.querySelector(".sucess-message")
const errorMessage = document.querySelector(".error-message")
const sucess = "Correto! O valor do <b>Campo A</b> é menor que o valor do <b>Campo B</b>."
const error = "Atenção! O valor do <b>Campo A</b> deve ser menor que o valor do <b>Campo B</b>" 
let formValid = false

form.addEventListener("submit", function(e) {
    e.preventDefault();
    if (formValid) {
        sucessMessage.innerHTML = sucess;
        sucessMessage.style.display = "block";
        errorMessage.style.display = "none";
    } else {
        errorMessage.innerHTML = error;
        errorMessage.style.display = "block";
        sucessMessage.style.display = "none";
    }
});

lineA.addEventListener("input", () => {
    if (parseInt(lineA.value) > parseInt(lineB.value)) {
        lineA.classList.add("has-error");
        formValid = false;
    } else {
        lineA.classList.remove("has-error");
        formValid = true;
    }
    if (lineA.value === "" || lineB.value === "") {
        errorMessage.style.display = "none";
        sucessMessage.style.display = "none";
    }
});

lineB.addEventListener("input", () => {
    if (parseInt(lineA.value) > parseInt(lineB.value)) {
        lineB.classList.add("has-error");
        formValid = false;
    } else {
        lineB.classList.remove("has-error");
        formValid = true;
    }
    if (lineA.value === "" || lineB.value === "") {
        errorMessage.style.display = "none";
        sucessMessage.style.display = "none";
    }
});

lineA.addEventListener("input", () => {
    if (parseInt(lineA.value) <= parseInt(lineB.value)) {
        lineA.classList.remove("has-error");
    }
});

lineB.addEventListener("input", () => {
    if (parseInt(lineB.value) >= parseInt(lineA.value)) {
        lineB.classList.remove("has-error");
    }
});

