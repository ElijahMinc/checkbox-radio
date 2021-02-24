const checkboxs = document.body.querySelectorAll('.checkbox')
const radiobuts = document.querySelectorAll('.radiobuttons__item')
const inputs = document.body.querySelectorAll('input')

//Функция, созданная для поиска всех элементов
function cicle(e) {
	for (let i = 0; i < e.length; i++) {
		var element = e[i]
		return element
	}
}


// АКТИВНОСТЬ ДЛЯ Чекбоксов 
function checkbox() {
	var checkbox = cicle(checkboxs)
	var getChildCheck = checkbox.querySelector('input')

	if (getChildCheck.checked) {
		checkbox.classList.add('active')
	}
}
checkbox()


// АКТИВНОСТЬ ДЛЯ РАДИО-КНОПОК //
function radio() {
	var radiobutton = cicle(radiobuts)
	var getChildCheck = radiobutton.querySelector('input')

	if (getChildCheck.checked) {
		radiobutton.classList.add('active')
	}
}
radio()


// ЧЕК-БОКС 
checkboxs.forEach((e) => {

	e.addEventListener('click', () => {

		if (e.classList.contains('active')) {

			var child = e.firstElementChild
			child.removeAttribute('checked')
			e.classList.remove('active')
		}
		else {
			var child = e.firstElementChild
			child.setAttribute('checked', '')
			e.classList.add('active')
		}
	})
})
// РАДИОКНОПКИ

radiobuts.forEach((e) => {

	e.addEventListener('click', () => {

		if (!e.classList.contains('active')) {
			var child = e.firstElementChild
			radiobuts.forEach((e) => {
				var child = e.firstElementChild
				e.classList.remove('active')
				child.removeAttribute('checked')
			})
			e.classList.add('active')
			child.setAttribute('checked', '')


		}
	})
})

//          JQUERY
// $(document).ready(function(){

// 	$.each($('.checkbox'), function(index,val) {

// 		if($(this).find('input').prop('checked')==true){
// 			$(this).addClass('active');
// 		}

// 	});

// 		$(document).on('click', ' .checkbox', function(event) {
// 		if($(this).hasClass('active')){

// 			$(this).find('input').prop('checked', false);

// 		} else{

// 			$(this).find('input').prop('checked', true);

// 		}

// 		$(this).toggleClass('active');




// 		return false;
// 	});




// 	$.each($('.radiobuttons__item'), function(index,val) {
// 		if($(this).find('input').prop('checked')==true){
// 			$(this).addClass('active');
// 		}
// 	});
// 	$(document).on('click', ' .radiobuttons__item', function(event) {
// 		$(this).parents('.radiobuttons').find('.radiobuttons__item').removeClass('active');
// 		$(this).parents('.radiobuttons').find('.radiobuttons__item input').prop('checked', false);


// 		 $(this).addClass('active');
// 		  $(this).find('input').prop('checked', true);



// 		return false;
// 	});
// });
