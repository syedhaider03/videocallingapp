
class User {
    constructor() {
       this._token = '', 
            this._id = ''
    }

    setToken(token) {
        console.warn('Set Token ', token)
        this._token = token
    }
    getToken() {
        if (this._token) {
            console.warn('Get Token ', this._token)
            return this._token
        }
    }
    setData(id) {
        console.warn('Set Token ', id)
        this._id = id
    }
    getData() {
        return this._id
    }
}

export default user = new User