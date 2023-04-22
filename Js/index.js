$(document).ready(function(){

    $("#cpf").mask("000.000.000-00",{
        placeholder: "000.000.000-000"
    })
    $("#cep").mask("00000-000",{
        placeholder: "00000-000"
    })

    $("form").validate({
        rules:{
            cpf:{
                required: true
            },
            cep:{
                required: true
            },
        },
        messages:{
            cpf: "Por favor, insira seu CPF",
            cep: "Por favor, insira seu CEP"
        }
    })
})
