const igdb = require('igdb-api-node').default
const {YOUR_TWITCH_CLIENT_ID, YOUR_TWITCH_APP_ACCESS_TOKEN} = require("../keys")

class Games{
  async getGames (req, res){
    try{
      const {games} = req.body
      const response = await igdb(YOUR_TWITCH_CLIENT_ID, YOUR_TWITCH_APP_ACCESS_TOKEN)
      .fields(["name", "screenshots.*"])
      .search(games.games)
      .limit(games.limit)
      .request('/games')
     return res.send(response.data)
    }
    catch(err) {
      console.log(err)
    }
  }

  async aboutGame(req, res) {
    try{
      const {id} = req.body
      const response = await igdb(YOUR_TWITCH_CLIENT_ID, YOUR_TWITCH_APP_ACCESS_TOKEN)
      .fields(["*"])
      .where([`id = ${id}`])
      .limit(100)
      .request('/games')

      return res.send(response.data[0])
    }
    catch(err) {
      console.log("err")
    }
  }

  async getShowGenresGames(req, res) {
    try{
      const {idList} = req.body
      const response = await igdb(YOUR_TWITCH_CLIENT_ID, YOUR_TWITCH_APP_ACCESS_TOKEN)
      .fields(["*"])
      .limit(100)
      .where(idList)
      .request(`/genres`)
      return res.send(response.data)
    }
    catch(err) {
      console.log("err")
    }
  }

  async getGenresGames(req, res) {
    try{
      const {id} = req.body
      console.log(id)
      const response = await igdb(YOUR_TWITCH_CLIENT_ID, YOUR_TWITCH_APP_ACCESS_TOKEN)
      .fields(["*"])
      .limit(100)
      .where([`genres = ('${id}')`])
      .request(`/games`)

      console.log(response.data)
      return res.send(response.data)
    }
    catch(err) {
      console.log("err")
    }
  }

}

module.exports = new Games()