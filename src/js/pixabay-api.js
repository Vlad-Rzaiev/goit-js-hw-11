export function getImages(userInputValue) {
  const options = {
    key: '47679134-c77d37d01e499358209d43473',
    q: userInputValue,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  return fetch('https://pixabay.com/api/', options).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }

    return response.json();
  });
}
