$(document).ready (function() {

	$(".primary_background").waypoint(function() {
		$(".header1").css("animation-name", "something")
		$(".header1").css("animation-duration", "3s")
		$(".header1").css("opacity", "1")
		$(".sub-header").css("animation-name", "something")
		$(".sub-header").css("animation-duration", "7s")
		$(".sub-header").css("opacity", "1")
});

	$('.secondary_background').waypoint(function(direction) {
		$('.main-content').css("animation-name", "something")
		$(".main-content").css("animation-duration", "5s")
		$(".main-content").css("opacity", "1")
		$('.header2').css("animation-name", "something")
		$('.header2').css("animation-duration", "5s")
		$(".header2").css("opacity", "1")
		}, 
		{ offset: "40%"});

	$('.tertiary_background').waypoint(function(direction) {
		$('#dom-container').css("animation-name", "something")
		$("#dom-container").css("animation-duration", "5s")
		$("#dom-container").css("opacity", "1")
		$('.header3').css("animation-name", "something")
		$('.header3').css("animation-duration", "3s")
		$(".header3").css("opacity", "1")
		}, 
		{ offset: "40%"});

	$('.tertiary_background').waypoint(function(direction) {
		$('#john-container').css("animation-name", "something")
		$("#john-container").css("animation-duration", "5s")
		$("#john-container").css("opacity", "1")
		}, 
		{ offset: "20%"});

	$('.tertiary_background').waypoint(function(direction) {
		$('#mateo-container').css("animation-name", "something")
		$("#mateo-container").css("animation-duration", "5s")
		$("#mateo-container").css("opacity", "1")
	});

});//End of document.ready