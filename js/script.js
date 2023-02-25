const tabsBtns = document.querySelectorAll('.tabs-btns__link');
const tabsItems = document.querySelectorAll('.tabs-items__item');
const burger = document.querySelector('.header__burger');
const burgerMenu = document.querySelector('.header__menu');

tabsBtns.forEach(function(item){
	item.addEventListener("click", function(){
		tabsBtns.forEach(function(item){
			item.classList.remove('active');
		});
		item.classList.add('active');

		let ElementId = item.getAttribute('data-tab');
		let currentItem = document.querySelector(ElementId);

		tabsItems.forEach(function(item){
			item.classList.remove('active');
		});
		currentItem.classList.add('active');
	});
});

burger.addEventListener("click", function(){
	burger.classList.toggle('active');
	burgerMenu.classList.toggle('active');
});

