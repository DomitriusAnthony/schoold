$("document").ready(function() {

	// Challenge one
	$("button").click(function() {

	    answer = $("#answer").val()
	    console.log(answer)
    
	$(".profile-picture")[0].src = answer
  	})

	// Challenge 2
	$("button").click(function() {

	    answer = $("#answer2").val()
	    console.log(answer)
    
	$(".heading_tag").text(answer)
  	})

	// Challenge 3 
  	$("button").click(function() {

	    answer = $("#answer3").val()
	    console.log(answer)
    
	$(".about").text(answer)
	})

  	// Challenge 4
  	$("button").click(function() {

	    answer = $("#answer4").val()
	    console.log(answer)
    
	$(".photo-1").src = answer
  	})

  	// Challenge 5
  	$("button").click(function() {

	    answer = $("#answer5").val()
	    console.log(answer)
    
	$(".photo-2").src = answer
  	})

  	// Challenge 5
  	$("button").click(function() {

	    answer = $("#answer6").val()
	    console.log(answer)
    
	$(".photo-2").src = answer
  	})

  	// Challenge 5
  	$("button").click(function() {

	    answer = $("#answer7").val()
	    console.log(answer)
    
	$(".video").src = answer
  	})

// ----------CSS Challenges---------

// ----------Challenge One----------
	$(".code_generator").click(function() {
	    answer = $("#answer").val()
	    console.log(answer)
	    $(".profile_picture").css("margin", answer)
	  })

// --------Challenge Two------------
	$(".code_generator").click(function() {
	    answer = $("#answer").val()
	    console.log(answer)
	    $(".custom_background").css("background-color", answer)
	  })

	// -----Challenge Three----------
		$(".code_generator").click(function() {
	    answer = $("#answer_1").val()
	    console.log(answer)
	    $(".main_content").css("margin", answer)
	  })
			$(".code_generator").click(function() {
	    answer = $("#answer_2").val()
	    console.log(answer)
	    $(".main_content").css("padding", answer)
	  })
			$(".code_generator").click(function() {
	    answer = $("#answer_3").val()
	    console.log(answer)
	    $(".main_content").css("text-align", answer)
	  })

}) // end of Document.ready