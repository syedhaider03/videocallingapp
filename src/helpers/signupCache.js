
class Cache {
    constructor() {
      this.signupCache={}
    }

    setCache(data) {
        this.signupCache = data
        console.warn('Set cache ', this.signupCache)
    }
    getCache() {
        if (this.signupCache) {
            console.warn('Get cache ', this.signupCache)
            return this.signupCache
        }
    }
    resetCache() {
        if (this.signupCache) {
            this.signupCache={}
        }
    }
}

export default cache = new Cache