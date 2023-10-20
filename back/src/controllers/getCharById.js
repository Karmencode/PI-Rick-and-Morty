const axios = require('axios');
const URL = "https://rickandmortyapi.com/api/character/";


async function getCharById(req, res) {

    const { id } = req.params;

    try {
        // petición a la API a partir del id que recibi por Params con async functions.
        const { data } = await axios(`${URL}${id}`);

// caso de que todo salga OK y se encuentre a un personaje
        if (data.name) {
            const character = {
                id: id,
                name: data.name,
                gender: data.gender,
                species: data.species,
                origin: data.origin,
                image: data.image,
                status: data.status,
            }
            return res.status(200).json(character);
        }else{
             // caso de que todo salga OK pero no se encuentre a un personaje
            throw new Error ('Not found')
        }

    } catch (error) {
        error.message.includes('Not found')
        ? res.status(404).send(error.message)
        :res.status(500).send(error.message)
    }
}

// Los controladores manejan toda la logica de las rutas

module.exports = getCharById;