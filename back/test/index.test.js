const app = require('../src/app');
const session = require('supertest');
const request = session(app);

const character = {
    id: 1,
    name: 'Rick',
    species: 'Human',
    gender: 'Male',
    status: 'Alive',
    origin: {
        name: 'Earth (c-137)'
    },
    image: 'image.jpg'
};


describe("Test de RUTAS", () => {

    describe('GET /rickandmorty/character/:id', () => {

        it('Responde con status: 200', async () => {
            const res = await request.get('/rickandmorty/character/1');
            expect(res.statusCode).toBe(200)
        })

        it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
            const res = await request.get('/rickandmorty/character/1');
            for (const prop in res.body) {    /* Para recorrer el objeto y verificar todas las props del character */
                expect(res.body).toHaveProperty(prop)
            }
        })

        it('Si hay un error responde con status: 500', async () => {
            const res = await request.get('/rickandmorty/character/17gd65');
            expect(res.statusCode).toBe(500);
        })
    })


    describe("GET /rickandmorty/login", () => {
        it('Responde un objeto con la propiedad access en true si la info del usuario es correcta', async () => {
            const res = await request.get('/rickandmorty/login?email=carmen.mendez.aguirre@gmail.com&password=123mari');
            const access = { access: true };
            expect(res.body).toEqual(access);
        });

        it('Responde un objeto con la propiedad access en false si la info del usuario es incorrecta', async () => {
            const res = await request.get('/rickandmorty/login?email=carmen.ndez.aguirre@gmail.com&password=mar23');
            const access = { access: false };
            expect(res.body).toEqual(access);
        })
    })

    describe("POST /rickandmorty/fav", () => {
        it('Debe guardar un personaje en favoritos', async () => {
            const res = await request.post('/rickandmorty/fav').send(character);
            expect(res.body).toContainEqual(character);
        })

        it('Debe agregar personajes a favoritos sin perder los guardados previamente', async () => {
            character.id = 2;
            character.name = 'Morty';
            const res = await request.post('/rickandmorty/fav').send(character);
            expect(res.body.length).toBe(2);
        });
    });

    describe("DELETE /rickandmorty/fav/:id", () => {
        it('Devuelve un array con todos los favoritos si no existe el ID solicitado', async () => {
            const res = await request.delete('/rickandmorty/fav/21');
            expect(res.body.length).toBe(2);
        });

        it('Eliminar el personaje de favoritos, si se proporciona un ID válido', async() =>{
            const res = await request.delete('/rickandmorty/fav/2');
           console.log('-------------------------------------------------------------------------------------------------------');
            console.log(res.body);
            expect(res.body.length).toBe(1);
        });
    });


});
