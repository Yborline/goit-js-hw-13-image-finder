export default class NewApiService {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
}

    
  async  fetchCard() {

        const KEY = '24295658-d33a4cb7a7ba959c48fb9a807'
        const basyUrl = 'https://pixabay.com/api/'
        const url = `${basyUrl}?image_type=photo&orientation=horizontal&q=${this.query}&page=${this.page}&per_page=12&key=${KEY}`
        
        const search = await fetch(url)
      const rJson = await search.json();
        const hits = await   rJson.hits
                this.page += 1;
                
                return hits
           
    }
    
    resetPage() {
        this.page = 1;
    }

    get query() {
        return this.earchQuery;

    }
    
    set query(newQuery) {
        return this.earchQuery = newQuery;
        
    }



}