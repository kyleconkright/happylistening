$(document).ready(() => {

	var login = $('.login');
	var loginModal = $('#login-modal');
	var loginModalContent = $('#login-modal div');
	var close = $('#login-modal .close');

	login.on('click', () => {
		if(login.hasClass('show')) {
			login.removeClass('show');
			loginModal.fadeOut(50, () => {
				loginModalContent.css({'marginTop': '-10px'});
			});
			
		} else {
			login.addClass('show');
			loginModalContent.animate({'marginTop':'0px'}, 350);
			loginModal.slideDown(100);
		}
	});

	close.on('click', () => {
		if(login.hasClass('show')) {
			login.removeClass('show');
			loginModal.fadeOut(50, () => {
				loginModalContent.css({'marginTop': '-10px'});
			});
		}
	});

}); //jquery