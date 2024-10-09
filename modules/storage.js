// functions to set and get data from local storage
function addFavorite(item) {
    const movies = JSON.parse(localStorage.getItem('movies')) || [];   
    
    if (movies.some(x => x.id === item.id)) 
        throw new FavoriteAddError();
        
    movies.push(item);
    localStorage.setItem('movies', JSON.stringify(movies));
    console.log(movies);
}

function removeFavorite(item) {
    localStorage.removeItem('movies', item);
    console.log(removeFavorite);
}

function getFavorites() {
    console.log(getFavorites);
    return localStorage.getItem('movies') || [];
}


class FavoriteAddError extends Error {
    constructor(message) {
        super(message);
        this.name = "FavoriteAddError";
    }
}

export { addFavorite, removeFavorite, getFavorites }