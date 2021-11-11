import './sass/main.scss';

const KEY = '24295658-d33a4cb7a7ba959c48fb9a807'

fetch(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=cat&page=1&per_page=12&key=${KEY}`).then(response=>response.json).then(console.log)