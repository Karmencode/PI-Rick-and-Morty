import style from './Detail.module.css';
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect  } from "react";

function Detail(){

    const { id } = useParams();  /* Obtiene la info (id) del parametro variable de la url, se usará para controlar el array de dependencias */
    const [character,setCharacter]= useState({});  /* Estado Local */

    const key = 'henrym-karmencode';
    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
           /*  https://rym2-production.up.railway.app/api/character/${id}?key=${key} */
           /* Data es parte de la respuesta de la API se le hace destructiring xq axios devuelve un objeto y en el esta Data */
            if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

    return(
        <div > 
            <h3 className={style.h3d}>{character?.name}</h3>  {/* Con ? estamos haciendo un renderizado condicional para que el codigo no se rompa en lo que carga la info de la API */}
            <h3 className={style.h3d}>{character?.status}</h3>
            <h3 className={style.h3d}>{character?.species}</h3>
            <h3 className={style.h3d}>{character?.gender}</h3>
            <h3 className={style.h3d}>{character?.origin?.name}</h3>
            <img className={style.imgd} src={character?.image} alt={character?.name}/>
        </div>
    )
};

export default Detail; 