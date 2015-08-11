$(function() {
	var width = $(window).width();
	var height = $(window).height();
	var screennozoomwidthff = width * window.devicePixelRatio;
	var screennozoomheightff = height * window.devicePixelRatio;
	$( document ).ready(function() {
		if(bowser.name=="Firefox"){
			if (screennozoomwidthff !== width){
				var newzoom = width / screennozoomwidthff;
				$('body').css('MozTransform','scale(' + newzoom + ')');
				var bodycont = document.getElementById('mainbodybb');
				var footer = document.getElementById('footerbb');
				var menu = document.getElementById('menubb');
				menu.style.cssText = 'width:' + screennozoomwidthff + 'px!important';
				bodycont.style.cssText = 'width:' + screennozoomwidthff + 'px!important';
				footer.style.cssText = 'width:' + screennozoomwidthff + 'px!important;bottom:-' + (screen.availHeight + 126.5) + 'px!important;';
			}
		}
		if(bowser.name=="Internet Explorer") {
			var newwidthzoom = screen.logicalXDPI / screen.deviceXDPI;
			var widthzoom = screen.deviceXDPI / screen.logicalXDPI;
			if (newwidthzoom !== 1) {
				$('body').css('Transform','scale(' + newwidthzoom + ')');
				$('body').css('width','0px');
				var menu = document.getElementById('menubb');
				var bodycont = document.getElementById('mainbodybb');
				var footer = document.getElementById('footerbb');
				menu.style.cssText = 'width:' + widthzoom * width + 'px!important;';
				bodycont.style.cssText = 'width:' + widthzoom * width + 'px!important;';
				footer.style.cssText = 'width:' + widthzoom * width + 'px!important;'+'bottom:-' + ($(window).height() - 320.5) + 'px!important;';
			}
		}
	});
});