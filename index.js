$(document).ready(function(){
	showVideo();
	resizeVideoSectionClick();
});

$(window).resize(function(){
	resizeVideoSectionResize();
});

var videoShown = false;

function showVideo(){
	$('#video').find('.play-button').on('click',function(){
		$('#video').find('.video-wrapper').fadeIn('slow');
	});
}

function resizeVideoSectionClick(){
	$('#video').find('.circle').on('click',function(){
		if (videoShown == false){
			videoShown = true;
			setTimeout(function(){
				var $height = $('body').find('iframe').height();
				$('#video').css({'height':$height,'min-height':$height});
			},250)
		}
	});
}

function resizeVideoSectionResize(){
	if (videoShown) {
		var $height = $('body').find('iframe').height();
		$('#video').css({'height':$height,'min-height':$height});
	}
}