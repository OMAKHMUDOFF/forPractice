import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { clearList, favoriteCategory } from "../redux/action/FavoriteAction";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FiBarChart2 } from "react-icons/fi";
import { setLike } from "../redux/action/HomeAction";
import { HiOutlineShoppingCart } from "react-icons/hi";

import sadHeart from "../assets/img/sadHeart.png";

function Favorites() {
  let state = useSelector((state) => state.FavoritesRedux);
  let p = useSelector((state) => state.HomeRedux);
  let data = [...p.bestSellers, ...p.bestOffers];
  let favorites = data.filter((elem) => elem.like === true);

  let { categoryBtns, setCategor } = state;
  let dispatch = useDispatch();
  return (
    <div className="LikedGoods">
      <div className="navigation">
        <NavLink to={"/"}>Стройоптторг</NavLink>/
        <NavLink to={"/favorites"}>Избраные товары</NavLink>
      </div>
      <div className="liked-title">
        <h1>Избранные товары</h1>
      </div>
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
              <button onClick={() => dispatch(clearList())}>
                Очистить список
              </button>
            </div>
          </div>
          <div className="favorite-cards">
            {favorites.map((elem) => {
              return (
                <div className="favorite-card" key={elem.id}>
                  <div className="btitle-img">
                    <div className="bestTitle">
                      <span>Хит</span>
                    </div>
                    <div className="bSeller-card-img">
                      <img src={elem.img} alt={elem.prodName} />
                    </div>
                  </div>
                  <div className="bSeller-card-bottom">
                    <div className="bSeller-articul">
                      <span>{elem.art}</span>
                    </div>
                    <div className="bSeller-prod-name">
                      <h4>{elem.prodName}</h4>
                    </div>
                    {elem.disc > 0 ? (
                      <div className="bSeller-price">
                        <span>
                          <del>{elem.price} ₽</del>
                          {parseInt(
                            elem.price - (elem.price / 100) * elem.disc
                          )}
                          ₽
                        </span>
                        <div className="bSeller-disc">
                          <span>-{elem.disc}%</span>
                        </div>
                      </div>
                    ) : (
                      <div className="bSeller-price">
                        <span>{elem.price} ₽</span>
                      </div>
                    )}
                    <div className="bSeller-card-btns">
                      <div className="cart-btn">
                        <button>
                          <HiOutlineShoppingCart />
                          Купить
                        </button>
                      </div>
                      <div className="like-cart-btn">
                        <button onClick={() => dispatch(setLike(elem))}>
                          {elem.like ? <AiFillHeart /> : <AiOutlineHeart />}
                        </button>
                        <button>
                          <FiBarChart2 />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="no-favorites">
          <div className="sadHeart-img">
            <img src={sadHeart} alt="" />
          </div>
          <div className="no-fav-title">
            <h3>Ваш список желаний пуст</h3>
          </div>
          <div className="no-fav-subtitle">
            <p>У вас пока нет товаров в списке желаний.</p>
            <p>
              На странице "<span>Каталог</span>" вы найдете много интересных
              товаров.
            </p>
          </div>
          <div className="no-fav-gtc">
            <NavLink to={"/catalogGoods"}>
              <button>Перейти в каталог</button>
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
}
export default Favorites;
