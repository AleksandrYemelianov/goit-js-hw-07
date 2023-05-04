import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryImg = document.querySelector('.gallery');

const getItemGallery = (galleryItems) => {
 return galleryItems.reduce((acc, { preview, original, description }) => 
        acc + `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
        </li>`
    , '');
};
const createGalleryMarkup = getItemGallery(galleryItems);
galleryImg.insertAdjacentHTML('beforeend', createGalleryMarkup);

let gallery = new SimpleLightbox('.gallery a', {
    navText: ['&#10094;', '&#10095;'],
    captionsData: 'alt',
    captionDelay: 250,
    showCounter: false,
});
gallery.on('show.simplelightbox', function () {});

gallery.close()

console.log(galleryItems);
