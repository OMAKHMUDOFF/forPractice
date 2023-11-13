import React from "react";

function SubsMainlingUi() {
  return (
    <div className="subscribe-mailings">
      <div className="subs-mailing-title">
        <h4>Подпишитесь на рассылку</h4>
      </div>
      <div className="subs-mailing-subtitle">
        <p>Регулярные скидки и спецпредложения, а так же новости компании.</p>
      </div>
      <div className="subs-mailing-form">
        <form>
          <input type="email" placeholder="Email" required />

          <div className="subs-submit-btn">
            <button>Подписаться</button>
            <div className="subs-check-privpolicy">
              <input type="checkbox" required />
              <p>
                Согласен с обработкой персональных данных в соответствии с
                политикой конфиденциальности
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SubsMainlingUi;
