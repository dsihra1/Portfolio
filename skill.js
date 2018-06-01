jQuery(document).ready(function(){
	jQuery('.skillBox').each(function(){
		jQuery(this).find('.skill').animate({
			width:jQuery(this).attr('data-percent')
		},6000);
	});
});