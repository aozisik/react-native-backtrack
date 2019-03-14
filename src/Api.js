import axios from 'axios'

class Api {

    configure(publicKey, secretKey) {
        this.axios = axios.create({
            baseUrl: 'https://backtrack.sailbright.com/api/',
            headers: {
                // TODO: Set the proper headers
            }
        })
    }

}

export default new Api()