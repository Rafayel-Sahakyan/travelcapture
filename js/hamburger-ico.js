var $a = 0;
function OpenClose() { 
	$a = 1 - $a;
	if ($a == 1) {
		$('.menu').slideDown('slow')
	} else {
		$('.menu').slideUp('slow')
	}
}