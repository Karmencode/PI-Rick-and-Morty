const validation= (userData) => { /*  Esta funcion retornara un objeto al estado errors con los errores encontrados al validar userData  */
   const errors={};

//    Validar el email
   if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(userData.email)){  /* =si no es un email */
    errors.email ='El email ingresado no es válido'; /* Mandamos el error al estado errors */
  }
  if(!userData.email){
    errors.email='Debe ingresar un email valido';
  }
  if(userData.email.length > 35){
    errors.email='El email no puede superar los 35 caracteres';
  }

//   Validar la password
if(!/.*\d+.*/.test(userData.password)){
    errors.password ='La contraseña debe contener al menos un número';
}
if(userData.password.length < 6 || userData.password.length > 10){
    errors.password='La contraseña debe tener entre 6 y 10 caracteres';
}

  return errors;
}

export default validation;