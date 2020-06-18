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
})