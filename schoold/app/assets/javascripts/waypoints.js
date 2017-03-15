$(document).ready (function() {

	$('.secondary_background').waypoint(function(direction) {
		$('.main-content').css("animation", "fadeIn 3s")
		$(".main-content").css("opacity", 1)
		$('.header2').css("animation", "fadeIn 3s")
		$('.header2').css("opacity", 1)
		}, 
		{ offset: "40%"});

	// $('.secondary_background').waypoint(function() {

	// },
	// { offset: "40%" });

});//End of document.ready