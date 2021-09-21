import galleryItems from './galleryItems.js';

const listEl = document.querySelector('.js-gallery');
const lightboxEl = document.querySelector('.lightbox');
const originalImageEl = document.querySelector('.lightbox__image');
const buttonEl = document.querySelector('.lightbox__button');

const itemEl = ({ preview, original, description }) => {
  return `<li class="gallery__item">
            <a
              class="gallery__link"
              href="${original}"
            >
              <img
                  class="gallery__image"
                  src="${preview}"
                  data-source="${original}"
                  alt="${description}"
              />
            </a>
          </li>`;
};

const addListElements = galleryItems.map(itemEl).join('');

listEl.insertAdjacentHTML('beforeend', addListElements);

listEl.addEventListener('click', onOpenModal);

function onOpenModal(e) {
  e.preventDefault();
  lightboxEl.classList.add('is-open');
  originalImageEl.src = e.target.dataset.source;
}

buttonEl.addEventListener('click', onCloseModal);

function onCloseModal() {
  lightboxEl.classList.remove('is-open');
  originalImageEl.src = '';
}

