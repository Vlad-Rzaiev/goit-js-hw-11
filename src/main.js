import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import xmarkSvg from './img/xmark.svg';
import { getImages } from './js/pixabay-api';

export function getUserInput(value) {
  return value;
}

const searchForm = document.querySelector('.search-form');

searchForm.addEventListener('submit', ev => {
  ev.preventDefault();

  const userInputValue = ev.target.elements.search.value.trim().toLowerCase();
  const userInput = getUserInput(userInputValue);

  if (userInput === '') {
    iziToast.show({
      message: 'Input field can not be empty. Please enter your message.',
      messageColor: '#ffffff',
      iconUrl: xmarkSvg,
      backgroundColor: '#ef4040',
      position: 'topRight',
    });
  }

  // getImages()
  //   .then(images => renderGallery(images))
  //   .catch(error => console.log(error));

  searchForm.reset();
});
