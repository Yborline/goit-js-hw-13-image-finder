import './sass/main.scss';
import NewApiService from './js/apiService'
import liCard from './tampletes/list-photo.hbs'

const refs = {
    formContainer: document.querySelector('#search-form'),
    searchButton: document.querySelector('.js-search-butt'),
    inputCard: document.querySelector('.input-search'),
    loadMoreButt: document.querySelector('.js-more-butt'),
    gallery: document.querySelector('.gallery')
}
console.log(refs.gallery)

// console.log(refs.searchButton)

// const element = document.getElementById('.card-container');

const newApiService = new NewApiService


refs.formContainer.addEventListener('submit', onSearch);
refs.loadMoreButt.addEventListener('click', onLodeMore);


function onSearch(e) {
    e.preventDefault();
    
    newApiService.query = e.currentTarget.elements.query.value
    //     console.log(newApiService.query)
    // newApiService.query = refs.inputCard.value
    // console.log(newApiService.query)
    newApiService.resetPage()
    newApiService.fetchCard().then(createMarkup)
    clearArticlesContainer()

}

function onLodeMore() {

    newApiService.fetchCard().then(createMarkup).then(scrollCard)

}


function createMarkup(card) {
    refs.gallery.insertAdjacentHTML('beforeend',liCard(card))
}

function clearArticlesContainer() {
    refs.gallery.innerHTML = '';
    
}
function scrollCard(){
refs.gallery.scrollIntoView({
  behavior: 'smooth',
  block: 'end',
});
}