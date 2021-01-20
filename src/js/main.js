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

$(window).on("load resize", function() {

	let previousText = $(".nav-previous").find(".nav-title");
	let nextText = $(".nav-next").find(".nav-title");

	let previousTextForPc = previousText.attr("data");
	let previousTextForMobile = previousTextForPc.replace(" статья", "");

	let nextTextTextForPc = nextText.attr("data");
	let nextTextForMobile = nextTextTextForPc.replace(" статья", "");

	if( $(window).width() <= 767 ) {
		
		previousText.text(previousTextForMobile);
		nextText.text(nextTextForMobile);
  
	} else {
		previousText.text(previousTextForPc);
		nextText.text(nextTextTextForPc);
	}
  
  });