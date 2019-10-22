$(document).ready(function(){
	"use strict";

	closePopupESC();

});


function Popup(e,x)
{
	if(x==true){	
		getPopup(e);
	}
}

function getPopup(e)
{
	if($('.popupBox[data-popup='+e+']').length>0)
	{
		$('.backPopup').addClass('backPopupOpen');
		$('.popupBox[data-popup='+e+']').addClass('popupBoxOpen');
		//Disable ScrollBar
		$('body').css('overflow','hidden');
	}else {
		console.log(e + " not found!");
		alert("This Param >> '"+ e +"' << not found!");
	}
}

function closePopup()
{
	$('.backPopup').removeClass('backPopupOpen');
	$('.popupBox').removeClass('popupBoxOpen');

	//Enable ScrollBar
	$('body').removeAttr('style');

	//Reset form
	$('.popupContent form').trigger("reset");

	// Disable event for <A> tag if you click or insert class
	return false;
}

function closePopupESC()
{
	$(document).keydown(function(e) {
	    if (e.keyCode == 27) {
	        closePopup()
	    }
	});
}