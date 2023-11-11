import React from "react";
import { CiPercent } from "react-icons/ci";
import { RiListCheck2 } from "react-icons/ri";
import { TbBoxSeam, TbCreditCard } from "react-icons/tb";
import { NavLink } from "react-router-dom";

import const_tools from "../assets/img/homePage_IMG/repairSetTools.png";
import today_bg from "../assets/img/aboutCompany/company-history-bg.png";
import NewsUi from "../components/UI/NewsUi";
import { useSelector } from "react-redux";

export default function AboutCompany() {
  let totalState = useSelector((state) => state.TotalRedux);
  let { news } = totalState;
  return (
    <div className="about-company-page">
      <div className="about-nav-title">
        <div className="navigation">
          <NavLink to={"/"}>Стройоптторг</NavLink>/
          <NavLink to={"/favorites"}>Избраные товары</NavLink>
        </div>
        <div className="about-page-title">
          <h1>О компании</h1>
        </div>
      </div>
      <div className="about-company-text">
        <div className="bot-about-text">
          <div className="left-about-text">
            <div className="left-about-title">
              <h4>
                «Стройоптторг» - крупнейшая оптово-розничная компания по продаже
                строительных и отделочных материалов.
              </h4>
            </div>
            <div className="left-about-descriptions">
              <p>
                Уже второе десятилетие мы готовы воплотить в реальность Вашу
                мечту о красивом, комфортабельном доме, благоустроенном
                современном офисе, уютной теплой даче, помочь реализовать любые
                строительные и дизайнерские фантазии и с минимальными затратами
                времени и денежных средств.
              </p>
              <p>
                Вы всегда можете прийти к нам, пройтись по нашим складским и
                торговым площадям, оценить, как мы храним, принимаем и продаем
                товары. Пообщаться с продавцами-консультантами, получить
                консультацию по товарам у менеджеров.
              </p>
              <p>
                Вы также можете всегда пожаловаться нам, спросить совета или
                вернуть не понравившийся товар. Если же Вам что- то не
                понравилось, и Вы остались недовольны нашим сервисом - не
                стесняйтесь сообщать нам об этом. Только так мы сможем понять,
                что делаем что-то не так. И только так мы сможем стать еще
                лучше!
              </p>
              <p>
                Все товары, представленные на сайте, гарантированно есть в
                наличии.
              </p>
              <p>
                Помимо материалов, мы предлагаем своим клиентам самый большой
                набор услуг, которые позволяют значительно упростить процесс
                строительства и ремонта и сделать его легким и комфортным.
              </p>
            </div>
          </div>
          <div className="right-about-text">
            <figure>
              <img src={const_tools} alt="const-set-tools" />
            </figure>
          </div>
        </div>
      </div>

      <div className="about-why-us">
        <div className="why-us-title">
          <h2>Почему иммено мы</h2>
        </div>

        <div className="why-us-cards">
          <div className="why-us-card">
            <div className="left-why-icon">
              <TbCreditCard />
            </div>
            <div className="right-why-text">
              <div className="right-why-title">
                <h4>Оплата любым удобным способом</h4>
              </div>
              <div className="right-why-descr">
                <p>
                  Выбирайте любой способ оплаты для максимального комфорта при
                  покупках у нас.
                </p>
              </div>
            </div>
          </div>
          <div className="why-us-card">
            <div className="left-why-icon">
              <RiListCheck2 />
            </div>
            <div className="right-why-text">
              <div className="right-why-title">
                <h4>Большой выбор товаров в каталоге</h4>
              </div>
              <div className="right-why-descr">
                <p>
                  Наш каталог насыщен разнообразными товарами, чтобы
                  удовлетворить ваши потребности.
                </p>
              </div>
            </div>
          </div>
          <div className="why-us-card">
            <div className="left-why-icon">
              <TbBoxSeam />
            </div>
            <div className="right-why-text">
              <div className="right-why-title">
                <h4>Осуществляем быструю доставку</h4>
              </div>
              <div className="right-why-descr">
                <p>
                  Мы оперативно доставим ваш заказ, чтобы вы могли насладиться
                  покупкой как можно скорее.
                </p>
              </div>
            </div>
          </div>
          <div className="why-us-card">
            <div className="left-why-icon">
              <CiPercent />
            </div>
            <div className="right-why-text">
              <div className="right-why-title">
                <h4>Делаем скидки на крупные покупки</h4>
              </div>
              <div className="right-why-descr">
                <p>
                  Наша система скидок работает для вашей выгоды, чем больше
                  купили - больше сэкономили.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="about-company-history">
          <div className="company-history-title">
            <h2>История ООО “Стройоптторг”</h2>
          </div>
          <div className="company-history-cards">
            <div className="company-history-card">
              <div className="history-pos-label">
                <p>2003</p>
              </div>
              <div className="history-card-subtitle">
                <h3>
                  Компания ООО «Стройоптторг» была зарегистрирована в реестре и
                  получила свидетельство о регистрации 1 октября 2003 года.
                </h3>
              </div>
              <div className="company-history-list">
                <ul>
                  <li>
                    <span className="marker"></span>
                    Общая площадь земельного участка составляла
                    <b>10 000 м².</b>
                  </li>
                  <li>
                    <span className="marker"></span>
                    площадь складских помещений <b>850 м².</b>
                  </li>
                  <li>
                    <span className="marker"></span>
                    численность сотрудников <b>10 человек.</b>
                  </li>
                </ul>
              </div>
            </div>
            <div className="company-history-card">
              <div className="history-pos-label">
                <p>2008</p>
              </div>
              <div className="history-card-subtitle">
                <h3>
                  С годами компания динамично росла и развивалась и уже к 2008
                  г. мы достигли более высоких результатов:
                </h3>
              </div>
              <div className="company-history-list">
                <ul>
                  <li>
                    <span className="marker"></span>
                    общая площадь базы составила<b>58 000 м².</b>
                  </li>
                  <li>
                    <span className="marker"></span>
                    площадь складских помещений<b>5 200 м²</b>
                  </li>
                  <li>
                    <span className="marker"></span>
                    численность коллектива возросла до <b>300 человек</b>
                  </li>
                </ul>
              </div>
            </div>
            <div className="company-history-card">
              <div className="history-pos-label">
                <p>2018</p>
              </div>
              <div className="history-card-subtitle">
                <h3>
                  К своему 15-ти летнему юбилею компания расширила торговые
                  площади до 17 805.3 м²
                </h3>
              </div>
              <div className="company-history-list">
                <ul>
                  <li>
                    <span className="marker"></span>
                    Торговый центр №1 - <b>5 545 м²</b>
                  </li>
                  <li>
                    <span className="marker"></span>
                    Торговый центр№2- <b>3 951,2 м²</b>
                  </li>
                  <li>
                    <span className="marker"></span>
                    Складские помещения - <b>8 308,6 м²</b>
                  </li>
                </ul>
              </div>
            </div>
            <div className="company-history-card company-history-today">
              <div className="history-today-bg">
                <img src={today_bg} alt="" />
              </div>
              <div className="history-card-title">
                <h3>сегодня</h3>
              </div>
              <div className="history-today-cards">
                <div className="history-today-card">
                  <div className="top-history">
                    <span>17 805,3 м²</span>
                  </div>
                  <div className="bot-history">
                    <p>- торговых и складских помещений</p>
                  </div>
                </div>
                <div className="history-today-card">
                  <div className="top-history">
                    <span>50 000+</span>
                  </div>
                  <div className="bot-history">
                    <p>- наименований товаров</p>
                  </div>
                </div>
                <div className="history-today-card">
                  <div className="top-history">
                    <span>2 500+</span>
                  </div>
                  <div className="bot-history">
                    <p>- постоянных клиентов</p>
                  </div>
                </div>
                <div className="history-today-card">
                  <div className="top-history">
                    <span>440</span>
                  </div>
                  <div className="bot-history">
                    <p>- опытных сотрудников</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="last-news">
          <div className="news-title-btn">
            <h2>Последние новости</h2>
            <NavLink to={"/news"}>
              <button>Больше новостей</button>
            </NavLink>
          </div>
          <div className="news-cards">
            {news.map((elem, i) => {
              return <NewsUi elem={elem} i={i} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
