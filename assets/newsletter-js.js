/*
 * First Visit Popup jQuery Plugin version 1.2
 * Chris Cook - chris@chris-cook.co.uk
 * Edit by shaddam2011@gmail.com
 */

(function ($) {

	'use strict';

	$.fn.firstVisitPopup = function (settings) {

		var $var_popup_wrapper;
		var setCookie = function (name, value) {
			var date = new Date(),
				expires = 'expires=';
			date.setTime(date.getTime() + 86400000);
			expires += date.toGMTString();
			document.cookie = name + '=' + value + '; ' + expires + '; path=/';
		}
		var getCookie = function (name) {
			var allCookies = document.cookie.split(';'),
				cookieCounter = 0,
				currentCookie = '';
			for (cookieCounter = 0; cookieCounter < allCookies.length; cookieCounter++) {
				currentCookie = allCookies[cookieCounter];
				while (currentCookie.charAt(0) === ' ') {
					currentCookie = currentCookie.substring(1, currentCookie.length);
				}
				if (currentCookie.indexOf(name + '=') === 0) {
					return currentCookie.substring(name.length + 1, currentCookie.length);
				}
			}
			return false;
		}
		var showMessage = function () {
          setTimeout(function() {
			$var_popup_wrapper.css({"opacity": "1", "visibility": "visible", "transition": ".5s"}).fadeIn(500);
            }, 5000);
		}
		var hideMessage = function () {
			$var_popup_wrapper.fadeOut(500);
			setCookie('fvpp' + settings.cookieName, 'true');
		}

		$var_popup_wrapper = $('.popup_wrapper');

		if (getCookie('fvpp' + settings.cookieName)) {
			hideMessage();
		} else {
			showMessage();
		}

		$(".popup_off").on('click', hideMessage);

	};

})(jQuery);
