$(document).ready(function () {

	// ПОКАЗАТЬ ФИКС МЕНЮ НА Десктопах
	window.addEventListener('scroll', function () {
		const fixMenu = document.querySelector('.header-fix');
		if (this.pageYOffset > 100) {
			fixMenu.classList.add('active')
		} else {
			fixMenu.classList.remove('active')
		}
	})
	// показать скрыть модальные окна поиска и моб меню
	const openSearch = document.querySelector('#show-search');
	const searchModal = document.querySelector('#search-modal');
	const searchFormInput = searchModal.querySelector('form input');
	const searchFormButton = searchModal.querySelector('form button');
	const openMobMenu = document.querySelector('#mob-btn');
	const mobMenu = document.querySelector('#mob-menu');

	openSearch.addEventListener('click', function (e) {
		e.preventDefault();
		searchModal.classList.add('active');
	});
	searchModal.addEventListener('click', function (e) {
		if (e.target != searchFormInput && e.target != searchFormButton) {
			searchModal.classList.remove('active');
		}

	});
	openMobMenu.addEventListener('click', function (e) {
		e.preventDefault();
		mobMenu.classList.add('active');
	});
	mobMenu.addEventListener('click', function (e) {
		this.classList.remove('active');
	});
	AOS.init({
		disable: "mobile"
	});
	// ПАРАЛЛАКС ДВИЖЕНИЯ ЗА МЫШКОЙ
	let headerSection = document.querySelector('.header')
	let bg = document.querySelectorAll('.parallax-item');
	window.addEventListener('mousemove', function (e) {
		let x = e.clientX / window.innerWidth;
		let y = e.clientY / window.innerHeight;
		for (let item of bg) {
			item.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
		}

	});

	//АНИМАЦИЯ ЗАПОЛНЕНИЯ ПРОГРЕСС-БАРА
	// Получаем нужный элемент
	let elements = document.querySelectorAll('.progress-item');
	let Visible = function (target) {
		// Все позиции элемента
		let targetPosition = {
				top: window.pageYOffset + target.getBoundingClientRect().top,
				left: window.pageXOffset + target.getBoundingClientRect().left,
				right: window.pageXOffset + target.getBoundingClientRect().right,
				bottom: window.pageYOffset + target.getBoundingClientRect().bottom
			},
			// Получаем позиции окна
			windowPosition = {
				top: window.pageYOffset,
				left: window.pageXOffset,
				right: window.pageXOffset + document.documentElement.clientWidth,
				bottom: window.pageYOffset + document.documentElement.clientHeight
			};

		if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
			targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
			targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
			targetPosition.left < windowPosition.right) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
			// Если элемент полностью видно, то запускаем следующий код
			let progressValue = target.querySelector('.val').textContent;
			let progressLine = target.querySelector('span');
			progressLine.style.width = progressValue;
		}
	};

	// Запускаем функцию при прокрутке страницы
	window.addEventListener('scroll', function () {
		for (let item of elements) {
			Visible(item);
		}
	});

	// А также запустим функцию сразу. А то вдруг, элемент изначально видно

	for (let item of elements) {
		Visible(item);
	}

	//аккордеон развернуть стрелку
	$('.collapsable').on('show.bs.collapse', function () {
		let tabIcon = $("#" + $(this).attr("aria-labelledby")).find(".arrow");
		tabIcon.addClass("rotate");
	});
	$('.collapsable').on('hide.bs.collapse', function () {
		let tabIcon = $("#" + $(this).attr("aria-labelledby")).find(".arrow");
		tabIcon.removeClass("rotate");
	});
	//video modal
	let youtube_src1 = $("#video1 video").attr("src");
	let youtube_src2 = $("#video2 video").attr("src");

	$('#video1').on('show.bs.modal', function () {
		console.log('555');
		$("#video1 video").attr("src", youtube_src1 + "?autoplay=1");
	});
	$("#video1").on('hidden.bs.modal', function (e) {
		$("#video1 video").attr("src", youtube_src1 + "?autoplay=0");

	});
	$('#video2').on('show.bs.modal', function () {
		console.log('555');
		$("#video2 video").attr("src", youtube_src2 + "?autoplay=1");
	});
	$("#video2").on('hidden.bs.modal', function (e) {
		$("#video2 video").attr("src", youtube_src2 + "?autoplay=0");

	});

})