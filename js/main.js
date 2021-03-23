const mySwiper = new Swiper('.swiper-container', {
	loop: true,

	// Navigation arrows
	navigation: {
		nextEl: '.slider-button-next',
		prevEl: '.slider-button-prev',
	},
});

// Cart

const buttonCart = document.querySelector('.button-cart');
const modalCart = document.querySelector('#modal-cart');
const modalClose = document.querySelector('.modal-close');

const openModal = () => {
	modalCart.classList.add('show');
}
const closeModal = () => {
	modalCart.classList.remove('show');
}

buttonCart.addEventListener('click', openModal);
modalClose.addEventListener('click', closeModal);

// Smooth scrolling

{
const scrollLinks = document.querySelectorAll('a.scroll-link');

for(let i = 0; i < scrollLinks.length; i++) {
	scrollLinks[i].addEventListener('click', function(e) {
		e.preventDefault();
		const linkID = scrollLinks[i].getAttribute('href');
		document.querySelector(linkID).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
			})
		});
	}
}
