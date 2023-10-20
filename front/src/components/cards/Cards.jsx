import style from './CardRest.module.css'
import Card from '../Card/Card'; //Se importa Card para utilizarala de plantilla para las demas cards

export default function Cards({characters, onClose}) { //Characters es un arreglo de obj que contiene la info de los personajes
   return <div className={style.contenedor}>
      {
      characters.map(({id,name,status,species,gender,origin,image}) => { // Colocamos las props que requiere ( son pasadas a) card para crear una card
         return ( //Siempre lleva Return
            <Card
               key={id} //Para uso interno de React para identificar cada Card
               id={id}
               name={name}
               status={status}
               species={species}
               gender={gender}
               origin={origin.name}
               image={image}
               onClose={onClose}
            />
         )
      })
      }
   </div>;
}
