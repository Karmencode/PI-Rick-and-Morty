import { connect, useDispatch } from "react-redux";
import Card from "../Card/Card";
import style from './Favorites.module.css';
import { filterCards, orderCards } from "../../redux/action";

function Favorites({ myFavorites }) {

    const dispatch = useDispatch();

    function handleOrder(event) {
        dispatch(orderCards(event.target.value))
    }
    function handleFilter(event) {
        dispatch(filterCards(event.target.value))
    }

    return (
        <div className={style.divForm}>

            <select onChange={handleOrder}>
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option>
            </select>

            <select onChange={handleFilter}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">unknown</option>
                <option value="allCharacters">AllCharacters</option>
            </select>

            {
                myFavorites?.map(fav => {
                    return (
                        <Card
                            key={fav.id}
                            id={fav.id}
                            name={fav.name}
                            species={fav.species}
                            gender={fav.gender}
                            image={fav.image}
                        />
                    )
                })
            }
        </div>
    )
}

export const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(
    mapStateToProps,
    null
)(Favorites);