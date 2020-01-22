//when an li is clicked inside a ul, check off todos
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

//click on X to delete todo
$("ul").on("click", "span", function(event){
    //remove the li(span's parent)
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    })
    //stop bubbling up
    event.stopPropagation();
});

//press ENTER to add new todo
$("input[type='text']").keypress(function(event){
    //ENTER key code
    if(event.which === 13){
        //grab new todo text from input
        var todoText = $(this).val();
        //make input empty
        $(this).val("");
        //create new li & append to ul
        $("ul").append("<li>" + "<span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
    }
});

//toggle input box when plus icon is clicked
$("#plus").click(function(){
    $("input[type='text']").fadeToggle();
})