const PORT = 3001;
const server = require ('./app');
const { conn } = require('./DB_connection');

// sincronizar sequelize con la base de datos antes que se levante el servidor para que se carguen los modelos y sus actulizaciones si es que hay
conn.sync({force: true}).then(() =>{
   server.listen(PORT, () => {
      console.log('Server raised in port: ' + PORT);
   });
});


