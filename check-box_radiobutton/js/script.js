$(document).ready(function (){

	$.each($('.checkbox-item'), function(){

		if($(this).find('input').prop('checked')==true){

			$(this).addClass('active');
		}

	});



	// Событие клик на дивы checkbox

	$(document).on('click',' .checkbox-item', function(){

		if($(this).hasClass('active')){

			$(this).find('input').prop('checked', false);

		} else{

			$(this).find('input').prop('checked', true);

		}

		$(this).toggleClass('active');

	});


	//Радиокнопки


	$.each($('.radiobutton-item'), function(){

		if($(this).find('input').prop('checked') == true){

			$(this).addClass('active');
		}

	});

	// Событие клик на див radiobutton-item

	$(document).on('click', ' .radiobutton-item', function(){

		$(this).parents('.radiobutton').find('.radiobutton-item').removeClass('active');
		$(this).parents('.radiobutton').find('.radiobutton-item input').prop('checked', false);

		$(this).addClass('active');
		$(this).find('input').prop('checked', true);



	});

});