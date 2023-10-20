import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

/* const composeEnhancer = window.
    _REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose; */ /* esta linea 
sirve para conectar nuestra app con la extension REDUX DEVTOOLS DEL NAVEGADOR */

/* const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(thunkMiddleware)) /* Esta linea sirve
    sirve para que podamos hacer peticiones a una Api/servidor */
    
    const store = createStore(
        reducer,
        applyMiddleware(thunk) /* Esta linea sirve
        sirve para que podamos hacer peticiones a una Api/servidor */
        
        );

export default store;