// import Card from './components/Card/Card.jsx';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Cards from './components/cards/Cards.jsx';
import style from './App.module.css'
import Nav from './components/nav/Nav.jsx';
import { useState, useEffect } from 'react';
import axios from 'axios'
import About from './components/about/About.jsx';
import Detail from './components/detail/Detail.jsx';
import Form from './components/forms/Form.jsx';
import Favorites from './components/favorites/Favorites.jsx';

function App() {

   const location = useLocation();
   const navigate = useNavigate(); /* para redirigirme ahome desde el login */
   let [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);

   //    function login (userData){
   //       if(userData.email=== email && userData.password=== password){
   //          setAccess(true);
   //          navigate('/home'); /* si todo esta bien (true) me redirige a home xq el acceso se habilita */
   //       }
   // // Si los valores en la base de datos coinciden con los ingresados el estado acces cambiara para dar el acceso
   //    }

   async function login(userData) {
      const { email, password } = userData;
         const URL = 'http://localhost:3001/rickandmorty/login/';
      try {

         const { data } = await axios.get(URL + `?email=${email}&password=${password}`);
         const { access } = data;

         setAccess(access);
         access && navigate('/home');

      } catch (error) {
         alert(error.message);
      }
   }

   useEffect(() => {
      !access && navigate('/') /*  si acces es "false" me deja en la ruta '/' para no ingresar manualmente a otra ruta  */
   }, [access])

   async function onSearch(id) {
      const key = 'henrym-karmencode';
      try {
         const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`);
         /*  https://rym2-production.up.railway.app/api/character/${id}?key=${key} */

         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         }

      } catch (error) {
         window.alert('¡No hay personajes con este ID!');
      }
   }

   function onClose(id) {
      const charactersFiltred = characters.filter(character =>
         character.id !== id);

      setCharacters(charactersFiltred);
   }

   return (
      <div className='App' >
         {
            location.pathname !== '/'
               ? <Nav onSearch={onSearch} />
               : null
         }
         <Routes>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
            {/* Arriba se coloco a Cards dento del element para que aparesca solo en la ruta Home */}
            <Route path='/about' element={<About />} />
            <Route path='/detail/:id' element={<Detail />} />
            <Route path='/' element={<Form login={login} />} />
            <Route path='/favorites' element={<Favorites />} />

         </Routes>

      </div>
   );
}

export default App;
