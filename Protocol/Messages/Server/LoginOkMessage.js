const PiranhaMessage = require("../../PiranhaMessage")

class LoginOkMessage extends PiranhaMessage {
  constructor(client) {
    super()
    this.id = 21435
    this.client = client
    this.version = 0
  }

  async encode() {
    this.writeHex(
      "",
    )
  }
}

module.exports = LoginOkMessage