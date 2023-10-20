import { useState } from "react";
import validation from "../validation/validation";
import style from './Form.module.css';

function Form({login}){
    // Estado para controlar y almacenar la password y email 
    const [userData,setUserData] = useState({
        email:'',
        password:''
    });
    const [errors,setErrors]=useState({}); /* se usa para encontrar errores en el formulario */

    function handleChange(event){
    // Usar esta funcion para igualar el valor en la input al del estado, la funcion se ejecutara con el onChange de la input 
    // onChange se queda escuchando los cambios eso genera el evento del que sacaremos el value del target
        setUserData({
            ...userData,
            [event.target.name]:event.target.value  /* usar braket notation xq no sabemos que input se va a modificar si tenemos muchas, es un dato variable */
            // es como [email]: value del input (email)
        })
        setErrors(validation({ /* se hace dentro del handleChange para que cadaa que se haga una modificación se valide lo que se escriba */
            ...userData,
            [event.target.name]:event.target.value 
        }))
    }

    function handleSubmit(event){
        event.preventDefault(); /* para que no se recargue la pag si doy click en submit  */
        login(userData);

    }

    return(  /* Lo que se renderiza en pantalla */
        <div className={style.navForm}>
            <form onSubmit={handleSubmit}> {/* onSubmit es un evento de la etiqueta Form por lo tanto va aquí */}
                <h1 className={style.h1F}>Inicio de sesión</h1>

                <label htmlFor="email">Email: </label>
                <input type="email" name='email' value={userData.email} onChange={handleChange} />
                {errors.email && <p>{errors.email}</p>}
                <hr/>

                <label htmlFor="password"> Password: </label>
                <input type="text" name='password' value={userData.password} onChange={handleChange}/>
                {errors.password && <p>{errors.password}</p>}

                <hr/>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Form;