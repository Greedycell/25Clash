const PiranhaMessage = require("../../PiranhaMessage")

class OwnHomeDataMessage extends PiranhaMessage {
  constructor(client) {
    super()
    this.id = 25865
    this.client = client
    this.version = 0
  }

  async encode() {
    this.writeHex(
      "",
    )
  }
}

module.exports = OwnHomeDataMessage