// add click btn on each li to remove todos

// class Implimentation on toggling

// code doesn't work here because eventListener is added by jquery and intially we have only 3 li's.
// So eventListener is added to only existing li's.

// $("li").on("click", function(){
// 	$(this).toggleClass("completed");
// });

// modification on above code 
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});


// deleting todos
$("ul").on("click", "span", function(){
	$(this).parent().fadeOut(1000, function(){ 
		$(this).remove();
		event.stopPropagation();
	});	
});

// adding todos
$("input").on("keypress", function(event){
	// $("input").css("textTransform", "capitalize");  
	if(event.which === 13){
		var text = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + text + "</li>");
	}
});

// fadeout input 
$("h1 i").on("click", function(){
	$("input[type='text']").fadeToggle();
});

// Adding date 
// $("h1").append("<span> [ " + Date().slice(0, 16) + "]</span>");
$("h1").append("<span> [ " + getDateFormat() + " ]</span>");


//  function  Implimentation 
function getDateFormat(){
	var today = new Date();
	var day = today.getDate();
	var month = today.getMonth() + 1 ;
	var year = today.getFullYear();

	return day.toString() + "-" + month.toString() + "-" + year.toString() 
}

// Pending Tasks 

// add time to each li
// add calender
// Store data
// Create similar todos List

