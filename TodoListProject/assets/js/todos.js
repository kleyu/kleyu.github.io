// check off specific todo by click
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

// click on x to delele todo line
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text'").keydown(function(event){
	if(event.which === 13){
		var todoText = $(this).val();
		$(this).val("");
		//create a new li and append to ul
		$("ul").append("<li><span><i class='fas fa-trash'></i></span>" + todoText + "</li>")
	}

})

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
})
