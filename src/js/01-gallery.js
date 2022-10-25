import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);


const galleryRef = document.querySelector(".gallery");

const markup = galleryItems
	.map(
		({ preview, original, description }) => `

<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`,
	)
	.join("");

galleryRef.insertAdjacentHTML("beforeend", markup);
// console.log(markup);

galleryRef.addEventListener("click", onGalleryClick);

function onGalleryClick(evt) {
	evt.preventDefault();
}

const lightbox = new SimpleLightbox(".gallery a", { captionsData: `alt`, captionDelay: `250` });