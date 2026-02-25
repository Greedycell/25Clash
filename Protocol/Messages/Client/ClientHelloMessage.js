const PiranhaMessage = require('../../PiranhaMessage')
const LoginFailedMessage = require('../Server/LoginFailedMessage')
const LoginOkMessage = require('../Server/LoginOkMessage')
const OwnHomeDataMessage = require('../Server/OwnHomeDataMessage')

class ClientHelloMessage extends PiranhaMessage {
  constructor (bytes, client) {
    super(bytes)
    this.client = client
    this.id = 10100
    this.version = 0
  }

  async decode () {}

  async process () {
    setTimeout(() => {
      new LoginOkMessage(this.client).send()
      new OwnHomeDataMessage(this.client).send()
    }, 2000)
  }
}

module.exports = ClientHelloMessage