import axios from 'axios'

export class Api {
    constructor(paginationNumber = 10) {
        const corsProxy = import.meta.env.VITE_PROXY_URL || 'https://cors-anywhere.herokuapp.com/'

        const apiUrl = 'https://api.deezer.com'
        const baseURL = corsProxy + apiUrl

        this._api = axios.create({
            baseURL
        })

        this._globalLimit = paginationNumber
    }

    async getChartTracks(pageIndex = 0) {
        const { data } = await this._api.get('/chart/0/tracks', {
            params: {
                index: pageIndex,
                limit: this._globalLimit
            }
        })

        return data.data
    }

    async getWithSearchTerm(searchTerm, pageIndex = 0) {
        const { data } = await this._api.get('/search/track', {
            params: {
                index: pageIndex,
                limit: this._globalLimit,
                q: searchTerm,
            }
        })

        return data.data
    }
}

