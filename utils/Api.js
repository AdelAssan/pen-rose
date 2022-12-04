/* class Api {
    constructor({baseUrl, headers}) {
        this._headers = headers;
        this._baseUrl = baseUrl;
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`);
    }

    getCitation() {
        return fetch(`${this._baseUrl}`, {
            headers: this._headers
        }).then(this._checkResponse);

    }
}

export const api = new Api({
    baseUrl: 'https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});*/