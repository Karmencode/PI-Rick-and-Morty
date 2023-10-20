const {Favorite} = require('../DB_connection');

async function deleteFav (req, res){
    try {
        const {idUser} = req.query;
        const {id} = req.params;

        const fav = await Favorite.findByPk(id);

        // Quital de la tabla intermedia la relacion del id del favorito con el del usuario
        await fav.removeUser(idUser);

        const allFavorites = await Favorite.findAll({
            include:[{model: User, where: {id:idUser}}]
        });
        // await Favorite.destroy({where:{id}});
        // const allFavorites = await Favorite.findAll();
        return res.status(200).json(allFavorites);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = deleteFav;