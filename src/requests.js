import Axios from 'axios'

const url = 'https://api.hackerti.me'

export default {
    get(route, callback) {
        Axios.get(url + route).then((response) => {
            callback(response)
        })
    },
    post(route, body, callback) {
        Axios.post(url + route, body, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            }
        }).then((response) => {
            callback(response)
        }).catch((err)=> {
            console.log(err);
            callback({
                data: {
                    status: "error",
                    code: 500
                }
            })
        })
    },
    put(route, body, callback) {
        Axios.put(url + route, body, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            }
        }).then((response) => {
            callback(response)
        }).catch((err)=> {
            console.log(err);
            callback({
                data: {
                    status: "error",
                    code: 500
                }
            })
        })
    }
}