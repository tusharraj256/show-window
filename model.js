'use strict'

let modal = document.querySelector('.modal');
let overlay = document.querySelector('.overlay');
let btnClosemodal = document.querySelector('.close-modal');
let btnOpenModal = document.querySelectorAll('.show-modal');
console.log(btnOpenModal);


const closemodal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

const openmodal = function () {
    console.log('Button clicked');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');

}

const overlaymodal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

for (let i = 0; i < btnOpenModal.length; i++)

    btnOpenModal[i].addEventListener('click', openmodal)

btnClosemodal.addEventListener('click', closemodal);

overlay.addEventListener('click', overlaymodal);

document.addEventListener('keydown', function (e) {
    console.log(e.key);
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closemodal();
    }
})