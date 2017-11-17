$( document ).ready(function() {
	function toggleIcon(e) {
    $(e.target)
        .prev('.panel-heading')
        .find(".more-less")
        .toggleClass('fa-angle-down faq-close');
	}
	$('.panel-group').on('hidden.bs.collapse', toggleIcon);
	$('.panel-group').on('shown.bs.collapse', toggleIcon);


	$('#quote-carousel').carousel({
	    pauseOnHover: true,
	    interval: 10000,
	});
});