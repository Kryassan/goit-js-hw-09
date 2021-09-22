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

// modal

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

// slider__
window.addEventListener('keydown', slideGallery);

function slideGallery(e) {
  let nextIndex = 0;
  const currentIndex = galleryItems.indexOf(
    galleryItems.find(i => i.description === originalImageEl.alt),
  );
  
  if (e.key == 'ArrowRight') {
    nextIndex = currentIndex < galleryItems.length - 1 ? currentIndex + 1 : 0;
  }
  if (e.key == 'ArrowLeft') {
    nextIndex = currentIndex > 0 ? currentIndex - 1 : galleryItems.length - 1;
  }

  originalImageEl.src = galleryItems[nextIndex].original;
  originalImageEl.alt = galleryItems[nextIndex].description;
}




