(function facebookShareing() {
	window.fbAsyncInit = function () {
		FB.init({
			appId: '616842465000848',
			status: true, // check login status
			cookie: true, // enable cookies to allow the server to access the session
			xfbml: true  // parse XFBML
		});
	};

	(function () {
		var e = document.createElement('script');
		e.src = document.location.protocol + '//connect.facebook.net/en_US/all.js';
		e.async = true;
		document.getElementById('fb-root').appendChild(e);
	}());

	$(document).ready(function () {
		$('#share_button').on('click', function (e) {
			e.preventDefault();
			FB.ui(
			{
				method: 'feed',
				name: 'Team Apple rulz',
				link: 'http://team-apple-telerik.tk/',
				picture: 'http://sharper.telerik-students.org/hangman/images/team-apple-logo.jpg',
				caption: 'Team Apple - Telerik',
				description: 'We are a team of highly trained and skillful ninjas.<br/>You will love our products!',
				message: 'Ho!'
			});
		});
	});
})();