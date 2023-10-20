import style from './Nav.module.css'
import SearchBar from '../search/SearchBar'
import { Link } from 'react-router-dom';

function Nav({onSearch}){
    return(
        <nav className={style.navBar}>

        <button className={style.buttonsLink}>
          <Link  to ='/about'  className={style.linkS}> About </Link>
          </button>

         <button className={style.buttonsLink}>
          <Link to ='/home'  className={style.linkS}> Home </Link>
          </button>
          
         <button className={style.buttonsLink}>
          <Link to ='/favorites'  className={style.linkS}> Favorites </Link>
          </button>
          

          <SearchBar onSearch={onSearch}/>  
          
        </nav>
    )
}

export default Nav;