$(document).ready(function () {
	// показать скрыть модальные окна поиска и моб меню
	const openSearch = document.querySelector('#show-search');
	const openMobMenu = document.querySelector('#mob-btn');

	const searchModal = document.querySelector('#search-modal');
	const mobMenu = document.querySelector('#mob-menu');

	const closeSearch = document.querySelector('button.close-search');
	const closeMobMenu = document.querySelector('button.close-menu');

	openSearch.addEventListener('click', function (e) {
		e.preventDefault();
		searchModal.classList.add('active');
	});
	closeSearch.addEventListener('click', function (e) {
		searchModal.classList.remove('active');
	});
	openMobMenu.addEventListener('click', function (e) {
		e.preventDefault();
		mobMenu.classList.add('active');
	});
	closeMobMenu.addEventListener('click', function (e) {
		mobMenu.classList.remove('active');
	});

	// ПАРАЛЛАКС ДВИЖЕНИЯ ЗА МЫШКОЙ
	let headerSection = document.querySelector('.header')
	let bg = document.querySelector('.parallax-item');
	window.addEventListener('mousemove', function (e) {
		let x = e.clientX / window.innerWidth;
		let y = e.clientY / window.innerHeight;
		bg.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
	});
})