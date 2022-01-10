const Router = require("express").Router
const Games = require('../controllers/games')
const Users = require('../controllers/users')
const router = new Router()

router.post("/games", Games.getGames)

router.post("/added-user", Users.addUsers)

router.post("/about-data-game", Games.aboutGame)

router.post("/genres-game", Games.getShowGenresGames)

router.post("/genres-all-game", Games.getGenresGames)

module.exports = router