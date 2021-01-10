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
// inputs.forEach((e) => {

// 	if (e.checked) {

// 		e.closest('.checkbox').classList.add('active')

// 	}
// })

// АКТИВНОСТЬ ДЛЯ Чекбоксов ///////////////////////////
function checkbox() {
	var checkbox = cicle(checkboxs)
	var getChildCheck = checkbox.querySelector('input')

	if (getChildCheck.checked) {
		checkbox.classList.add('active')
	}
}
checkbox()
// for (let i = 0; i < checkboxs.length; i++) {
// 	var checkbox = checkboxs[i]
// 	var getChildCheck = checkbox.querySelector('input')
// 	if (getChildCheck.checked) {
// 		checkbox.classList.add('active')
// 	}
// }

// АКТИВНОСТЬ ДЛЯ РАДИО-КНОПОК //
function radio() {
	var radiobutton = cicle(radiobuts)
	var getChildCheck = radiobutton.querySelector('input')

	if (getChildCheck.checked) {
		radiobutton.classList.add('active')
	}
}
radio()
// for (let i = 0; i < radiobuts.length; i++) {
// 	var radio = radiobuts[i]
// 	var getChildCheck = radio.querySelector('input')
// 	if (getChildCheck.checked) {
// 		radio.classList.add('active')
// 	}
// }




// for (let i = 0; i < inputs.length; i++) {
// 	let input = inputs[i]
// 	let inputActive = input.checked
// 	let parentCheckbox = input.closest('.checkbox')
// 	let parentButton = input.closest('.radiobuttons__item')

// 	if () {
// 		parentCheckbox.classList.add('active')
// 	}

// }

// active Checkbox
// for (let input of inputs) {
// 	if (input.checked) {
// 		input.closest('.checkbox').classList.add('active')
// 	}
// }

// АКТИВНОСТЬ 


// for (let i = 0; i > inputs.length; i++) {
// 	const input = inputs[i];
// 	const parentChek = input.closest('.checkbox')
// 	const parentButton = input.closest('.radiobuttons__item')


// 	if (input.checked) {
// 		parentChek.classList.add('active')
// 		parentButton.classList.add('active')
// 	}
// }

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

			// function clearClass() {
			// 	next: for (let i = 0; i < radiobuts.length; i++) {
			// 		var element = radiobuts[i]
			// 		if (element.classList.contains('active')) {
			// 			continue next;
			// 		}
			// 	}
			// }
			// clearClass()
		}
	})
})