import React from "react";
import { TfiClose } from "react-icons/tfi";
import { useDispatch, useSelector } from "react-redux";
import { closeOrderCall } from "../redux/action/NavbarAction";

function CallOrder() {
  let state = useSelector((state) => state.NavbarRedux);
  let { orderCall } = state;
  let dispatch = useDispatch();
  return (
    <div className={orderCall ? "order-call-opened" : "order-call-closed"}>
      <div className="call-order-bg">
        <div className="close-order-btn">
          <button onClick={() => dispatch(closeOrderCall())}>
            <TfiClose />
          </button>
        </div>
        <div className="call-order-form">
          <form>
            <div className="call-order-title">
              <h2>Заказать обратный звонок</h2>
            </div>
            <div className="order-call-input-label">
              <label htmlFor="yourName">
                Ваше имя <span>*</span>:
              </label>
              <input
                required
                type="text"
                id="yourName"
                placeholder="Как к вам обращаться?"
              />
            </div>
            <div className="order-call-input-label">
              <label htmlFor="yourPhone">
                Номер телефона <span>*</span>:
              </label>
              <input
                required
                type="number"
                id="yourName"
                placeholder="+7 (  )   -    -"
              />
            </div>
            <div className="agreement-checkbox">
              <input type="checkbox" />
              <p>
                Согласен с обработкой персональных данных в соответствии с
                политикой конфиденциальности
              </p>
            </div>
            <div className="call-me-back">
              <button>Перезвоните мне</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CallOrder;
