$(function(){
	'use strict';
	var month = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
	var option = [];
	for(var i=1; i <= 12; ++i)
	{
		option.push('<option value="'+month[i-1]+'">'+i+'월</option>');
	}
	$('.month-selector select').append(option.join(''));
});

$('.month-selector select').on('change', function(){
	var id = $(this).val();
	var target = $('#'+id).offset().top - 60;
	$('body').animate({ scrollTop : target },200);
});

$('#moveTop').on('click', function(){
	$('.month-selector select').focus();
});