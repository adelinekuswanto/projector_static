$(function() {
	// cache the window object

	var $window = $(window);

	// Parallax background effect
	$('section[data-type="background"]').each(function() {

		var $bgobj = $(this);

		$(window).scroll(function() {

			//scroll the background at var speed
			// the y pos is a negative value because we are scrolling it u

			var yPos = -($window.scrollTop() / $bgobj.data('speed'));

			// put together our final background position
			var coords = '50% ' + yPos + 'px';

			// move the background
			$bgobj.css({backgroundPosition: coords});
			
		}); // end window scroll
	});
});