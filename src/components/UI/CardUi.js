import { useDispatch } from "react-redux";
import { setTotalCart, setTotalLike } from "../../redux/action/TotalAction";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FiBarChart2 } from "react-icons/fi";
import { HiOutlineShoppingCart } from "react-icons/hi";

function CardUi({ elem }) {
  let dispatch = useDispatch();

  return (
    <>
      <div className="total-title-img">
        {elem.hit ? (
          <div className="total-cardTitle">
            <span>Хит</span>
          </div>
        ) : elem.sale | elem.new ? (
          <div className="sale-or-new">
            {elem.sale ? (
              <div className="sale-info">Распродажа</div>
            ) : elem.new ? (
              <div className="new-info">Новинка</div>
            ) : (
              ""
            )}
          </div>
        ) : (
          ""
        )}
        <div className="total-card-img">
          <img src={elem.img} alt={elem.prodName} />
        </div>
      </div>
      <div className="total-card-bottom">
        <div className="total-articul">
          <span>Артикул: {elem.art}</span>
        </div>
        <div className="total-prod-name">
          <h4>{elem.prodName}</h4>
        </div>
        {elem.disc > 0 ? (
          <div className="total-price">
            <span>
              <del>{elem.price} ₽</del>
              {parseInt(elem.price - (elem.price / 100) * elem.disc)}₽
            </span>
            <div className="total-disc">
              <span>-{elem.disc}%</span>
            </div>
          </div>
        ) : (
          <div className="total-price">
            <span>{elem.price} ₽</span>
          </div>
        )}
        <div className="total-card-btns">
          <div className="cart-btn">
            <button onClick={() => dispatch(setTotalCart(elem))}>
              <HiOutlineShoppingCart />
              Купить
            </button>
          </div>
          <div className="like-cart-btn">
            <button onClick={() => dispatch(setTotalLike(elem))}>
              {elem.like ? <AiFillHeart /> : <AiOutlineHeart />}
            </button>
            <button>
              <FiBarChart2 />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardUi;
