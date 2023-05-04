import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');

function getGalleryItemMarkup(galleryItems) {
   return galleryItems.reduce((acc, { preview, original, description }) => 
        acc + `
        <li class="gallery__item">
            <a class="gallery__link" href="large-image.jpg">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </li>`
    , '');
};
const galleryItemMarkup = getGalleryItemMarkup(galleryItems);
gallery.insertAdjacentHTML('beforeend', galleryItemMarkup)
 
gallery.addEventListener('click', onClickImage)

function onClickImage(e) {
    e.preventDefault();

    if (e.target.nodeName !== 'IMG') {
        return;
    } 

    const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="800" height="600">`)

    instance.show()
    
    gallery.addEventListener('keydown', (e) => {
    if (e.code !== 'Escape') {
            return;
        }
        instance.close();
}, { once: true });
}




console.log(galleryItems);

