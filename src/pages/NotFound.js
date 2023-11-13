import React from "react";
import { NavLink } from "react-router-dom";
import error_num from "../assets/img/notFound/error-404.png";
import TitleNavigation from "../components/UI/TitleNavigationUI";

function NotFound() {
  return (
    <div className="notFound">
      <TitleNavigation path={"*"} title={"Страница не найдена"} pathName={"Страница не найдена"}/>
      <div className="error-main">
        <div className="error-num">
          <figure>
            <img src={error_num} alt="error 404" />
          </figure>
        </div>
        <div className="error-desc">
          <p>
            Запрашиваемая страница не найдена. Возможно она была удалена, либо
            её адрес был изменен. Попробуйте воспользоваться поиском.
          </p>
        </div>
        <div className="back-btns">
          <NavLink to={"/"}>
            <button>Вернуться назад</button>
          </NavLink>
          <NavLink to={"/"}>
            <button>На главную</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
