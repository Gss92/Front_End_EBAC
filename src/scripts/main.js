document.addEventListener('DOMContentLoaded', function() {

    document.getElementById('form-converter').addEventListener('submit', function(event) {
        event.preventDefault()

        let inputDolar = document.getElementById('dolar').value
        inputDolar = parseFloat(inputDolar)
        let result = inputDolar * 4.96

        document.getElementById('result-value').innerText = result
        document.querySelector('.result').style.display = 'block'
    })
})