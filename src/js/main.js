$(document).ready(function() {


	// burger

	$(".open-menu-js").on("click", function() {

		$(".mobileMenu-overlay").addClass("open");
		$("body, html").css("overflow-y", "hidden");

	});

	// burger close

	$(".mobileMenu__close").on("click", function() {

		$(".mobileMenu-overlay").removeClass("open");
		$("body, html").css("overflow-y", "");

	});

});