$(document).ready(function(){
	$(".button-collapse").sideNav(); //Habilitar sidebar
	$('.slider').slider({full_width: true});
	$('select').material_select();
});

function sliderPrev(){
	$('.slider').slider('pause');
	$('.slider').slider('prev');
}

function sliderNext(){
	$('.slider').slider('pause');
	$('.slider').slider('next');
}