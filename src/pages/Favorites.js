import { useDispatch, useSelector } from "react-redux";
import { favoriteCategory } from "../redux/action/FavoriteAction";

import sadHeart from "../assets/img/sadHeart.png";
import CardUi from "../components/UI/CardUi";
import EmptyUi from "../components/UI/EmptyUi";
import TitleNavigation from "../components/UI/TitleNavigationUI";

function Favorites() {
  let state = useSelector((state) => state.FavoritesRedux);
  let totalState = useSelector((state) => state.TotalRedux);
  let { bestSellers, bestOffers, goodsArr } = totalState;
  let data = [...bestSellers, ...bestOffers, ...goodsArr];
  let favorites = data.filter((elem) => elem.like === true);

  let { categoryBtns, setCategor } = state;
  let dispatch = useDispatch();
  return (
    <div className="LikedGoods">
      <TitleNavigation
        path={"/favorites"}
        pathName={"Избранное"}
        title={"Избранное"}
      />
      {favorites.length > 0 ? (
        <div className="main-liked">
          <div className="category-bar-card">
            <div className="categoryBtns">
              {categoryBtns.map((elem, i) => {
                return (
                  <button
                    key={i}
                    onClick={() => dispatch(favoriteCategory(elem))}
                    style={{
                      color: elem === setCategor ? "#186FD4" : "#373B3F",
                      fontWeight: elem === setCategor ? "700" : "500",
                    }}
                  >
                    {elem === "" ? "Все категории" : elem}
                    <span>{elem === "" ? favorites.length : "0"}</span>
                  </button>
                );
              })}
            </div>
            <div className="add-all-cart">
              <button>Добавить все в корзину</button>
            </div>
            <div className="clear-list">
              <button>Очистить список</button>
            </div>
          </div>
          <div className="favorite-cards">
            {favorites.map((elem) => {
              return (
                <div className="favorite-card" key={elem.id}>
                  <CardUi elem={elem} />
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <EmptyUi
          img={sadHeart}
          inTitle={"список желаний"}
          emptyTitle={"Ваш список желаний пуст"}
        />
      )}
    </div>
  );
}
export default Favorites;
