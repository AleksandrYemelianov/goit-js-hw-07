import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');

function getGalleryItemMarkup(galleryItems) {
   return galleryItems.reduce((acc, { preview, original, description }) => 
        acc + `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
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
    <img src="${e.target.dataset.source}" width="800" height="600">`, {
        onShow: () => {
            gallery.addEventListener('keydown', onEscapePress)
        },
        onClose: () => {
            gallery.removeEventListener('keydown', onEscapePress)
        }
     })

    instance.show()
    
    function onEscapePress(e) {
        if (e.code !== 'Escape') {
            return;
        }
        instance.close();
    };
    }







