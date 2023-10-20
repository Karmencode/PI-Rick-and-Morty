const {Favorite, User} = require('../DB_connection');

async function postFav (req, res){
    try {
        const {name, origin, status, image, species, gender} = req.body;
        const {idUser} = req.query;
    
        if (!name || !origin || !status || !image || !species || !gender){
            return res.status(400).send('Faltan datos');  
        };

        const [fav, created] = await Favorite.findOrCreate({where:{name, origin, status, image, species, gender}});

        // Asociar el favorito a un usuario
        fav.addUser(idUser); 

        const allFavorites = await Favorite.findAll({
            include:[{model: User, where: {id:idUser}}]
        });
        return res.status(200).json(allFavorites);
        
    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports = postFav;