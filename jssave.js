
$("#Get").click(function() {
    
    var input1 = $("#name").val();

    var input2 = $("#food").val();

    var input3 = $("#color").val();
	
   		$('#output').append(`<tr> <td>${input1}</td> <td>${input2}</td> <td>${input3}</td> </tr>`);


	}
)