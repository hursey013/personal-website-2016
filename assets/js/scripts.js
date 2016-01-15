wow = new WOW({mobile:false});
wow.init();
$(document).ready(function(){
	$(".fa-angle-down").click(function() {
		return $('html, body').animate({
			scrollTop: $("#about").offset().top
		}, 1500);
	});		
	$(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {
		event.preventDefault();
		return $(this).ekkoLightbox({
			always_show_close: true
		});
	});
});		