$(function(){
	$('button').click(function(){
		var endValue = parseInt($('input').val());
		var output = "";
		
		if (isNaN(endValue)) {
			errorReturn('That is not a valid number. Try again.');
		} else {
			$('input').val(endValue);
			for(var i = 1; i <= endValue; i++) {
				if(i % 3 == 0) {
					output += "Fizz";
				}
				if(i % 5 == 0){
					output += "Buzz";
				}
				output === "" ? buildOutput(i) : buildOutput(output);
				output = ""
			}
		}
	})

	var errorReturn = function(message){
		alert(message);
		$('input').val('');	
	}
	var buildOutput = function(outputValue) {
		$('.results').append('<p>' + outputValue + '</p>');
	}
})