import { useSelector } from "react-redux";
import DiscInfoUi from "../components/UI/DiscInfoUi";
import QAui from "../components/UI/QAui";
import SubsMainlingUi from "../components/UI/SubsMainlingUi";
import TitleNavigation from "../components/UI/TitleNavigationUI";

export default function Refund() {
  let { refundPage } = useSelector((state) => state.TotalRedux);
  return (
    <div className="refund-page">
      <TitleNavigation
        path={"/refund"}
        pathName={"Возврат"}
        title={"Возврат"}
      />
      <div className="main-refund-page">
        <div className="left-refund-info">
          <div className="top-of-refund">
            <div className="refund-info">
              <p>
                Возврат или обмен товара надлежащего качества, возможен в
                течение 14 дней с момента покупки в соответствие со ст.26.1
                Закона «О защите прав потребителей», сохранивший товарный вид и
                потребительские свойства при наличии документов:
              </p>
              <ul>
                <li>
                  <span className="marker"></span>
                  подтверждающих покупку и оплату товара;
                </li>
                <li>
                  <span className="marker"></span>
                  документа подтверждающего личность.
                </li>
              </ul>
            </div>
            <div className="refund-steps">
              <ul>
                <li>
                  <p>
                    Для этого достаточно приехать в часы работы наших складов и
                    ТЦ и оформить возврат.
                  </p>
                </li>
                <li>
                  <p>
                    Возврат товара возможен без упаковки, но при условии
                    сохранения всей комплектации и потребительских свойств
                    товара.
                  </p>
                </li>
                <li>
                  <p>
                    Возврат денежных средств за товар оплаченных банковской
                    картой, осуществляется на ту же карту.
                  </p>
                </li>
                <li>
                  <p>
                    При заказе товара с доставкой вы можете отказаться от заказа
                    до его передачи. Если же машина с вашим заказом уже выехала
                    на адрес, мы вернем вам стоимость товара за исключением
                    расходов на доставку.
                  </p>
                </li>
                <li>
                  <p>Ограничения по возврату товара</p>
                </li>
                <li>
                  <p>
                    Мы не принимаем на возврат товары, имеющие
                    индивидуально-определенные свойства, если указанный товар
                    может быть использован исключительно потребителем, который
                    купил его.
                  </p>
                </li>
                <li>
                  <p>
                    Например, товары под заказ, колерованная краска,
                    строительные и отделочные материала отпускаемые на метраж,
                    уцененный товар, а так же все виды заказного материала.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="warranty-claim">
            <div className="warranty-claim-title">
              <h3>Обращение по гарантии</h3>
            </div>
            <div className="warraty-quests">
              {refundPage?.map((elem) => {
                return <QAui key={elem.id} elem={elem} />;
              })}
            </div>
          </div>
        </div>
        <div className="news-subs-mailing">
          <DiscInfoUi />
          <SubsMainlingUi />
        </div>
      </div>
    </div>
  );
}
