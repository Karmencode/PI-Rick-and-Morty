const {User} = require('../DB_connection');

async function postUser(req, res){
    try {
        const {email, password} = req.body;
        
        if(!email || !password) throw new Error ('Faltan datos');
        const user = await User.findOrCreate({where:{email, password}});
        return res.status(200).json(user);

    } catch (error) {
        error.message.includes('Faltan datos')
        ? res.status(400).send(error.message)
        :res.status(500).send(error.message) 
    }
};

module.exports = postUser;