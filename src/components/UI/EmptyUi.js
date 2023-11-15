import { NavLink } from "react-router-dom";

function EmptyUi({ img, inTitle, emptyTitle }) {
  return (
    <div className="no-favorites">
      <div className="sadHeart-img">
        <img src={img} alt="" />
      </div>
      <div className="no-fav-title">
        <h3>{emptyTitle}</h3>
      </div>
      <div className="no-fav-subtitle">
        <p>У вас пока нет товаров в {inTitle}.</p>
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
  );
}

export default EmptyUi;
