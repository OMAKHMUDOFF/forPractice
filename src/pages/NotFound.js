import React from "react";
import { NavLink } from "react-router-dom";
import error_num from "../assets/img/notFound/error-404.png";

function NotFound() {
  return (
    <div className="notFound">
      <div className="navigation">
        <NavLink to={"/"}>Стройоптторг</NavLink>/
        <NavLink to={"*"}>Страница не найдена</NavLink>
      </div>
      <div className="error-title">
        <h1>Страница не найдена</h1>
      </div>
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
