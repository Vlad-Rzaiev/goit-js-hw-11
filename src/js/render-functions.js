const gallery = document.querySelector('.gallery');

export function renderGallery(images) {
  const markup = images
    .map(
      image => `
    <li class="gallery-item">
        <a class="gallery-link" href="${image.largeImageURL}">
        <img
            class="gallery-image"
            src="${image.webformatURL}"
            alt="${image.tags}"
            />
        </a>
        <div class="stat-container">
            <div>
                <span><b>Likes</b></span>
                <span>${image.likes}</span>
            </div>
            <div>
                <span><b>Views</b></span>
                <span>${image.views}</span>
            </div>
             <div>
                <span><b>Comments</b></span>
                <span>${image.comments}</b></span>
            </div>
             <div>
                <span><b>Downloads</b></span>
                <span>${image.downloads}</span>
            </div>
        </div>
    </li>
    `
    )
    .join('');
  gallery.innerHTML = markup;
}