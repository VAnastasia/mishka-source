var buttonOrder = document.querySelector('.top-product__order');
var modal = document.querySelector('.modal');
var buttonModal = document.querySelector('.modal__form');
var bgModal = document.querySelector('.modal__background');

buttonOrder.addEventListener('click', function() {
  if (modal.classList.contains('modal--hidden')) {
    modal.classList.remove('modal--hidden');
  }
});

buttonModal.addEventListener('submit', function(evt) {
  evt.preventDefault();
  modal.classList.add('modal--hidden');
});

bgModal.addEventListener('click', function() {
  modal.classList.add('modal--hidden');
});
