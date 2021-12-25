const igdb = require('igdb-api-node').default
const {YOUR_TWITCH_CLIENT_ID, YOUR_TWITCH_APP_ACCESS_TOKEN} = require("../keys")

class Games{
  async getGame (req, res){
    try{
      const {name} = req.body
      const response = await igdb(YOUR_TWITCH_CLIENT_ID, YOUR_TWITCH_APP_ACCESS_TOKEN)
      .fields(["name"])
      .search(name)

      .request('/games')
      // .fields(["name"])
      // .search(name)
      // .require('/games')
      res.status(200).json(response.data)
    //  return req.status(200).json(response.data)
    }
    catch(err) {
      console.log(err)
    }
  }
}

module.exports = new Games()