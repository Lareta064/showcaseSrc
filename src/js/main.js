$(document).ready(function () {
	/*  header category menu*/
	const bodyEl = document.querySelector('body');
	const catMenuBtns = document.querySelectorAll('.catalogy-btn-desktop');
	const headerCatMenu = document.getElementById('header-catalogy');
	const catalogyCategory = document.querySelectorAll('.catalogy-category');
	const showCatSlider = document.querySelectorAll('.show-catslider');
	
	/* показать кат меню по клику на кнопку Каталог Сайтов */
	if (catMenuBtns.length > 0) {

		for (let item of catMenuBtns) {
			item.addEventListener('click', function () {
				if (!item.classList.contains('active')) {

					for (let i = 0; i < catMenuBtns.length; i++) catMenuBtns[i].classList.add('active');
					headerCatMenu.classList.add('active');
					bodyEl.classList.add('lock');

				} else {
					for (let i = 0; i < catMenuBtns.length; i++) catMenuBtns[i].classList.remove('active');
					headerCatMenu.classList.remove('active');
					bodyEl.classList.remove('lock');
				}
			})
		}
	}
	/* показать кат меню по клику пункт меню в модальном меню*/
	if (showCatSlider.length > 0) {
		for (let item of showCatSlider){
			item.addEventListener('click', function(e){
				e.preventDefault();
				e.stopPropagation();
				headerCatMenu.classList.add('active');
				headerCatMenu.classList.add('catslider');
			})
		}
	}
	/*  показать подменю в виде отдельной страницы с кнопкой Назад */
	if (catalogyCategory.length > 0){
		const catalogyList = headerCatMenu.querySelectorAll('.catalog-menu-submenu');
		for(let item of catalogyCategory){
			const itemList = item.querySelector('.catalog-menu-submenu');
			item.addEventListener('click', function(){
				for (let i = 0; i < catalogyList.length; i++){
					catalogyList[i].classList.remove('active');
					
				}
				item.querySelector('.catalog-menu-submenu').classList.add('active');
			})
		}
	}	
	
	$(function(){
			const card = $('.possibl-card');
			
			card.on('mousemove', function (e) {
				
				var x = e.clientX - $(this).offset().left + $(window).scrollLeft();
				var y = e.clientY - $(this).offset().top + $(window).scrollTop();
				
				var rY = map(x, 0, $(this).width(), -17, 17);
				var rX = map(y, 0, $(this).height(), -17, 17);
			
				$(this).css("transform", "perspective(1200px)  rotateY(" + rY + "deg)" + " " + "rotateX(" + -rX + "deg) ");
			});
			
			card.on('mouseenter', function () {
				$(this).css({
					transition: "all " + 0.05 + "s" + " linear",
				});
			});
		
			card.on('mouseleave', function () {
				$(this).css({
					transition: "all " + 0.2 + "s" + " linear",
				});
		
				$(this).css("transform", "rotateY(" + 0 + "deg)" + " " + "rotateX(" + 0 + "deg)");
			});
				
			function map(x, in_min, in_max, out_min, out_max)
			{
				return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
			}
		
	});
	// const possiblShowBtn = document.querySelector('#show-possibDesk-btn');
	// const possiblHideBtn = document.querySelector('#hide-possiblDesk-btn')
	
	// const possibilityText = document.querySelector('#possibility-text');
	// const possibilityCards = document.querySelector('#possibility-cards');
	
	// possiblShowBtn.addEventListener('click', function(){
	// 	possibilityText.classList.add('active');
	// 	possibilityCards.classList.add('hide');
	// });
	// possiblHideBtn.addEventListener('click', function(){
	// 	possibilityText.classList.remove('active');
	// 	possibilityCards.classList.remove('hide');
	// });
	// ====== СЛАЙДЕР ПРОЕКТА ========
	$('.project-carousel-wrapper').owlCarousel({
		items: 1,
		autoplay: true,
		autoplayTimeout:6000,
		nav: false,
		dots: true,
		loop: true,
		animateOut: 'fadeOut',
		margin:15
	});
	$('.project-carousel-arrow__left').click(function () {
		$('.project-carousel-wrapper').trigger("next.owl.carousel")
	});
	$('.project-carousel-arrow__right').click(function () {
		$('.project-carousel-wrapper').trigger("prev.owl.carousel")
	});

	// ====== ЭФФЕКТ ДО/ПОСЛЕ ======
	$("#beforeAfter-container").twentytwenty({
		before_label: '',
        after_label: ''
	});

	// ПОКАЗАТЬ ФИКС МЕНЮ НА Десктопах
	window.addEventListener('scroll', function () {
		const fixMenu = document.querySelector('.header-fix');
		if (this.pageYOffset > 100) {
			fixMenu.classList.add('active');
			headerCatMenu.classList.add('top-offset');
		} else {
			fixMenu.classList.remove('active');
			headerCatMenu.classList.remove('top-offset');
		}
	})
	// показать скрыть модальные окна поиска и моб меню
	const openSearch = document.querySelector('#show-search');
	const searchModal = document.querySelector('#search-modal');
	if(searchModal){
		const searchFormInput = searchModal.querySelector('form input');
		const searchFormButton = searchModal.querySelector('form button');


		const openMobMenu = document.querySelector('#mob-btn');
		const openMobMenu2 = document.querySelector('#mob-btn2');
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
		
		openMobMenu2.addEventListener('click', function (e) {
			e.preventDefault();
			mobMenu.classList.add('active');
		});

		mobMenu.addEventListener('click', function (e) {
			this.classList.remove('active');
		});
	}
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

		$("#video1 video").attr("src", youtube_src1 + "?autoplay=1");
	});
	$("#video1").on('hidden.bs.modal', function (e) {
		$("#video1 video").attr("src", youtube_src1 + "?autoplay=0");

	});
	$('#video2').on('show.bs.modal', function () {

		$("#video2 video").attr("src", youtube_src2 + "?autoplay=1");
	});
	$("#video2").on('hidden.bs.modal', function (e) {
		$("#video2 video").attr("src", youtube_src2 + "?autoplay=0");

	});

	/* КАСТОМНЫЙ ВЫБОР ФАЙЛА*/
	;
	(function (document, window, index) {
		var inputs = document.querySelectorAll('.inputfile');
		Array.prototype.forEach.call(inputs, function (input) {
			var label = input.nextElementSibling,
				labelVal = label.innerHTML;

			input.addEventListener('change', function (e) {
				var fileName = '';
				if (this.files && this.files.length > 1)
					fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);
				else
					fileName = e.target.value.split('\\').pop();

				if (fileName) {

					if (label.firstChild.nodeType === Node.ELEMENT_NODE) {
						label.querySelector('span').innerHTML = fileName;
					} else {
						label.nextElementSibling.innerHTML = fileName;
					}


				} else
					label.innerHTML = labelVal;
			});

			// Firefox bug fix
			input.addEventListener('focus', function () {
				input.classList.add('has-focus');
			});
			input.addEventListener('blur', function () {
				input.classList.remove('has-focus');
			});
		});
	}(document, window, 0));


	//
	const btnOpenBasketModal = document.querySelectorAll('.btn[ data-role="showBasketModal"]');
	if (btnOpenBasketModal) {
		for (let item of btnOpenBasketModal) {
			item.addEventListener('click', function () {
				basketModal.classList.add('active');

			});
		}

	}
	//закрыть модально окно Вы добавили товар в корзину
	const basketModal = document.querySelector('#basketModal');
	if (basketModal) {
		const btnCloseBasketModal = basketModal.querySelectorAll('.basketModal-close');
		for (let item of btnCloseBasketModal) {
			item.addEventListener('click', function () {
				basketModal.classList.remove('active');


			})
		}

	}
	// ПАРАЛЛАКС ДВИЖЕНИЯ ЗА МЫШКОЙ в модальном окне корзины
	let modalSection = document.querySelector('.basketModal-content')
	let prxItems = document.querySelectorAll('.decoreItem');
	window.addEventListener('mousemove', function (e) {
		let x = e.clientX / window.innerWidth;
		let y = e.clientY / window.innerHeight;
		for (let item of prxItems) {
			item.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
		}

	});

	//закрытие/открытие окна Презент
	const presentModal = document.querySelector('#presentModal');
	const btnClosePresentModal = document.querySelector('.presentModal-close');
	const btnOpenPresentModal = document.querySelectorAll('[data-role="openPresentModal"]');
	if (presentModal) {

		for (let item of btnOpenPresentModal) {
			item.addEventListener('click', function (e) {
				e.preventDefault();
				presentModal.classList.add('active');
			})
		}

		btnClosePresentModal.addEventListener('click', function (e) {
			e.preventDefault();
			presentModal.classList.remove('active');
		});
	}

	//  modal subcribe
	const btnOpenSubscribeModal = document.querySelectorAll('[data-role="openSubscribeModal"]');
	const btnSubscribeModalClose = document.querySelectorAll('.subscribeModal-close');
	if (btnOpenSubscribeModal) {
		for (let item of btnOpenSubscribeModal) {
			item.addEventListener('click', function (e) {
				e.preventDefault();
				subscribeModal.classList.add('active');
			});
		}
		for (let item of btnSubscribeModalClose) {
			item.addEventListener('click', function (e) {
				e.preventDefault();
				subscribeModal.classList.remove('active');
			});
		}

	}

	// clients slider
	let clientsSlider = $('.clients-slider');
	clientsSlider.owlCarousel({
		items: 1,
		loop: true,
		autoplay: true,
		autoplaySpeed: 4000,
		navSpeed: 1000,
		smartSpeed: 1000,
		autoplayTimeout: 4000,
		autoplayHoverPause: true,
		dots: false,
		margin: 15,
		nav: true,
		navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 2,
				stagePadding: 60
			},
			992: {
				items: 3
			},
			1200: {
				items: 3
			},
			1365: {
				items: 4,
				stagePadding: 0
			}
		}

	});
	/*Показать/скрыть текст редактора*/
	document.querySelector('#showDesk').addEventListener('click', function(){
		document.querySelector('#transform-block').classList.add('transform-block--hide');
		document.querySelector('#hide-deskription').classList.add('editor-text--visible');
	});
	document.querySelector('#hideDesk').addEventListener('click', function(){
		document.querySelector('#transform-block').classList.remove('transform-block--hide');
		document.querySelector('#hide-deskription').classList.remove('editor-text--visible');
	});
})