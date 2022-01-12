const igdb = require('igdb-api-node').default
const {YOUR_TWITCH_CLIENT_ID, YOUR_TWITCH_APP_ACCESS_TOKEN} = require("../keys")
class Games{
  async getGames (req, res){
    try{
      const {games, limit} = req.body.games
      const response = await igdb(YOUR_TWITCH_CLIENT_ID, YOUR_TWITCH_APP_ACCESS_TOKEN)
      .fields(["name", "screenshots.*"])
      .search(games)
      .limit(limit)
      // .offset(10)
      .request('/games')
      console.log(response.data)
    
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
      // .limit(1)
      .request('/games')
      console.log(response.data[0].length)
      return res.send(response.data[0])
    }
    catch(err) {
      console.log("err")
    }
  }

  async getGenresOfGames(req, res) {
    try{
      const {idList} = req.body
      const response = await igdb(YOUR_TWITCH_CLIENT_ID, YOUR_TWITCH_APP_ACCESS_TOKEN)
      .fields(["*"])
      .limit(500)
      .where(idList)
      .request(`/genres`)
      return res.send(response.data)
    }
    catch(err) {
      console.log("err")
    }
  }

  async getGamesOnGenres(req, res) {
    try{
      const {id} = req.body
      console.log(id)
      const response = await igdb(YOUR_TWITCH_CLIENT_ID, YOUR_TWITCH_APP_ACCESS_TOKEN)
      .fields(["*"])
      .limit(500)
      .where([`genres = ('${id}')`])
      .request(`/games`)
      console.log('le', response.data.length)
      return res.send(response.data)
    }
    catch(err) {
      console.log("err")
    }
  }

}

module.exports = new Games()