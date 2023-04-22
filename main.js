$(document).ready(function() {

    $("form").on("submit", function(e){
        e.preventDefault()
    
        const taskName = $("#input-task").val()
        const taskAdded = $("<li style='display:none'></li>")
    
        $(taskName).appendTo(taskAdded)
        $(`<li style='list-style:disc'>${taskName}</li>`).appendTo(taskAdded)
        $(taskAdded).appendTo("ul")
        $(taskAdded).fadeIn(1000)
    
        $("#input-task").val("")
    })

    $("ul").on("click", "li", function() {
        $(this).toggleClass("lineThrough");
    });
})