import axios from 'axios'

export class Api {
    constructor() {
        const baseURL = 'https://api.deezer.com'
        this._api = axios.create({ baseURL })
        this._globalLimit = 10
    }

    async getChartTracks(pageIndex = 0) {
        const { data } = await this._api.get('/charts/0/tracks', {
            params: {
                index: pageIndex,
                limit: this._globalLimit
            }
        })

        return data
    }

    async getWithSearchTerm(searchTerm, pageIndex = 0) {
        const { data } = await this._api.get('/search/track', {
            params: {
                index: pageIndex,
                limit: this._globalLimit,
                q: searchTerm,
            }
        })

        return data
    }
}