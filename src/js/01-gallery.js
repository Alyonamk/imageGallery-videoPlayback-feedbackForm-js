// Add imports above this line
import { galleryItems } from './gallery-items.js';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Change code below this line

console.log(galleryItems);

const refs = {
    gallery: document.querySelector(".gallery"),
};

function makeGallery({ preview, original, description }) {
    return `
    <a class="gallery__item" href="${original}">
        <img class="gallery__image"
            src="${preview}"
            alt="${description}"
            width="340"></img>
    </a>
    `;
}

const galleryList = galleryItems.map(makeGallery).join('');

refs.gallery.insertAdjacentHTML('afterbegin', galleryList);

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    captionPosition: 'bottom'
});