import style from './search.module.css'
import { useState } from 'react';

export default function SearchBar({onSearch}) {

   let [id,setId]= useState('');

   function handleChange(evento){
      setId(evento.target.value); 
   }

   return (
      <div className={style.divBar}>
         <input type='search' className={style.searchInput} onChange={handleChange} value={id} />
         <button onClick={() =>{onSearch(id); setId=('')}} className={style.searchBoton}>
            Agregar {/* Cuando se necesita pasar argumentos a una funcion como arriba se hace mediante una callback */}
         </button>
      </div>
   );
}
