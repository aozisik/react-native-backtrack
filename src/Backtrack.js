import Api from './Api'


class Backtrack {

    configure(publicKey, secretKey) {
        Api.configure(publicKey, secretKey)
    }

}

export default new Backtrack()