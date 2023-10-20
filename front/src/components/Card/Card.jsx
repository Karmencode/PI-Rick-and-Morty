import style from './Card.module.css'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addFav, removeFav } from '../../redux/action';
import { useState, useEffect } from 'react';

function Card({ id, name, status, species, gender, origin, image, onClose, addFav, removeFav, myFavorites }) {

   const [isFav, setIsFav] = useState(false);  /* Estado para agregar o eliminar favoritos  */

   function handleFavorite() {
      if (isFav) {
         setIsFav(false);
         removeFav(id);
      } else {
         setIsFav(true)
         addFav({ id, name, species, gender, image });
      }
   }
// Código del readme de react redux  comprobará si el personaje que contiene la Card ya está dentro de tus favoritos. 
   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div className={style.contenedor}>

         <button onClick={() => onClose(id)} className={style.botonClose}>X</button>

         <img src={image} alt='' />
         <h5>{id}</h5>
         <Link to={`/detail/${id}`}>
            <h3>{name}</h3>  {/* Al hacer click en el nombre nos dirigira al datail del personaje por su id */}
         </Link>
         <h3>{species}</h3>
         <h3>{gender}</h3>
         {/* <h3>{status}</h3>
         <h3>{origin}</h3> */}

         {
            isFav ? (
               <button onClick={handleFavorite} className={style.botonFav}>❤️</button>
            ) : (
               <button onClick={handleFavorite} className={style.botonFav}>🤍</button>
            )
         } {/* codigo copiado del Readme de React Redux */}
      </div>
   );
}

// Funciones de react-redux
export function mapStateToProps (state){
   return{
      myFavorites: state.myFavorites,
   }
}

export function mapDispatchToProps (dispatch){
   return {
      addFav: (character) => dispatch(addFav(character)),
      removeFav: (id) => dispatch(removeFav(id))
   }
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Card);

// son las propiedades pasadas a card desde APP.JS
// Las props en el parametro estan destructuradas
//Renderizar es mostrar en pantalla o escribir dentro del return de la funcion contenedora