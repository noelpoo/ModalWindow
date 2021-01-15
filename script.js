'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnClsModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModalOverlay = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModalOverlay = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (var i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', function () {
    openModalOverlay();
  });
}

btnClsModal.addEventListener('click', closeModalOverlay);
overlay.addEventListener('click', closeModalOverlay);

// adding "esc" close modal window
document.addEventListener('keydown', function (e) {
  if (
    e.key === 'Escape' &&
    !modal.classList.contains('hidden') &&
    !overlay.classList.contains('hidden')
  ) {
    closeModalOverlay();
  }
});

document.addEventListener('keypress', function (e) {
  console.log(e.key);
});
