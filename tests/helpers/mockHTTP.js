export default class mockHttp {
    constructor() {
        this.stack = [];
        this.mocks = {
            post: [],
            get: [],
            put: [],
            patch: [],
            delete: []
        }
    }

    post(url, payload) {
        this.stack.push({
            method: 'post',
            url: url,
            payload: payload
        });

        return new Promise((resolve, reject) => {
            resolve({token:'SOMETOKEN'});
            reject()
        })
    }

    addResponse(method, url, response) {
        this.mocks[method].push({
            url: url,
            response: response
        })
    }

};
