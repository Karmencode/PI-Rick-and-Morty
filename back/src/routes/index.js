// Importar todos los controladores para usarlos en el router
const getCharById = require("../controllers/getCharById");
const login = require ("../controllers/login");
const postUser  = require('../controllers/postUser');
const deleteFav = require ('../controllers/deleteFav');
const postFav = require ('../controllers/postFav');
const {Router} = require ('express');
const router = Router();

router.get("/character/:id", getCharById);
router.get ( "/login", login);
router.post ("/login", postUser);
router.post ( "/fav", postFav);
router.delete ( "/fav/:id", deleteFav);
// Tabien se puede:
// router.get('/login', (req, res) => { login(req, res);}) ---> forma larga

module.exports= router;
