const uri = 'http://localhost:8008'

export default class Service {
    static requisicaoGET = (method, uricompl) => {
        return fetch(uri + uricompl , {
            method: method,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        }).then((response) => response.json());
    }

    static requisicaoPOST = (method, uricompl, params) => {
        return fetch(uri + uricompl , {
            method: method,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(params)
        }).then((response) => response.json());
    }

     static requisicaoPOSTDATA = (method, uricompl, params) =>{
        return fetch(uri + uricompl , {
            method: method,
            headers: {
                Accept: 'multipart/form-data',
                'Content-Type': 'multipart/form-data'
            },  
            body: params
        }).then((response) => response.json());
    }
}
