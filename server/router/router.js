const Router = require("express").Router
const Games = require('../controllers/games')
const router = new Router()

router.post("/game", Games.getGame)

module.exports = router