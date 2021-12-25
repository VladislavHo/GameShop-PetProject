const Router = require("express").Router
const Games = require('../controllers/games')
const Users = require('../controllers/users')
const router = new Router()

router.post("/game", Games.getGame)

router.post("/added-user", Users.addUsers)

module.exports = router