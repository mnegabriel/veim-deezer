const FAVE_KEY = 'deezer_favorites'

export function setFavoritesData(data) {
    const dataString = JSON.stringify(data)
    localStorage.setItem(FAVE_KEY, dataString)
}

export function getFavoritesData() {
    const dataString = localStorage.getItem(FAVE_KEY)
    return dataString ? JSON.parse(dataString) : []
}