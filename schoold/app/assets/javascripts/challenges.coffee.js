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
})
