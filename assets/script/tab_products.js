window.addEventListener('DOMContentLoaded', function () {

    'use strict'
	let tab = document.querySelectorAll('.info_header_tab'),
		info = document.querySelector('.info_header'),
		tabContent = document.querySelectorAll('.info_tabcontent');

	function hideTabContent(a) {
		for (let i = a; i < tabContent.length; i++) {
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
			tab[i].classList.remove('select_tab');
			tab[i].classList.add('not_select');
		}
	}

	hideTabContent(1);

	function showTabContent(b) {
		if (tabContent[b].classList.contains('hide')) {
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');
		}
		if (tab[b].classList.contains('not_select')) {
			tab[b].classList.remove('not_select');
			tab[b].classList.add('select_tab');
		}
	}

	info.addEventListener('click', function(event) {
		let target = event.target;
		if (target && target.classList.contains('info_header_tab')) {
			for(let i = 0; i < tab.length; i++) {
				if (target == tab[i]) {
					hideTabContent(0);
					showTabContent(i);
					break;
				}
			}
		}
	})
});