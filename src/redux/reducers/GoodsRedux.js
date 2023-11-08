import betonomeshalka from "../../assets/img/catalogGOODS/betonomeshalka.png";
import bolgarka1 from "../../assets/img/catalogGOODS/bolgarka1.png";
import bolgarka2 from "../../assets/img/catalogGOODS/bolgarka2.png";
import circular_bosch from "../../assets/img/catalogGOODS/circular_pila_bosch.png";
import circular_zubr from "../../assets/img/catalogGOODS/circular_pila_zubr.png";
import drell_makita_ruchka from "../../assets/img/catalogGOODS/drell_makita_s_ruchkoy.png";
import nabor from "../../assets/img/catalogGOODS/nabor.png";
import perforator1 from "../../assets/img/catalogGOODS/perforator.png";
import shlifovka_bosch from "../../assets/img/catalogGOODS/shlifovka.png";

import { GoodsTypes } from "../action/ActionTypes";

let goodsData = {
  isOpenPrice: false,
  isOpenGoods: false,
  isOpenBrand: false,
  material: false,
  color: false,
  length: false,
  width: false,
  height: false,
  goodsTypeArr: [
    {
      title: "Набор",
      bool: false,
      catalog: "goodsTypeArr",
    },
    {
      title: "Стойка",
      bool: false,
      catalog: "goodsTypeArr",
    },
    {
      title: "Адаптер",
      bool: false,
      catalog: "goodsTypeArr",
    },
    {
      title: "Держатель",
      bool: false,
      catalog: "goodsTypeArr",
    },
    {
      title: "Фильтр",
      bool: false,
      catalog: "goodsTypeArr",
    },
    {
      title: "Инструмент",
      bool: false,
      catalog: "goodsTypeArr",
    },
  ],
  brandArr: [
    {
      title: "STAYER",
      bool: false,
      catalog: "brandArr",
    },
    {
      catalog: "brandArr",
      title: "HOMEPROFEE",
      bool: false,
    },
    {
      catalog: "brandArr",
      title: "PECAHTA",
      bool: false,
    },
    {
      title: "MAKITA",
      bool: false,
      catalog: "brandArr",
    },
    {
      title: "HUNTER",
      bool: false,
      catalog: "brandArr",
    },
    {
      title: "Зубр",
      bool: false,
      catalog: "brandArr",
    },
  ],
  materialArr: [
    {
      title: "Латунь",
      bool: false,
      catalog: "materialArr",
    },
    {
      title: "Медь",
      bool: false,
      catalog: "materialArr",
    },
    {
      title: "Металл",
      bool: false,
      catalog: "materialArr",
    },
    {
      title: "Металл, пластик",
      bool: false,
      catalog: "materialArr",
    },
    {
      title: "Бумага",
      bool: false,
      catalog: "materialArr",
    },
  ],
  colorArr: [
    "",
    "Синий",
    "Черный",
    "Серый",
    "Белый",
    "Красный",
    "Оранжевый",
    "Желтый",
  ],
  goods: [
    {
      id: 11,
      img: perforator1,
      art: "XJ89YHGO",
      prodName: "Перфоратор универсальный Wander X645-46 GF 1450W",
      price: 15999,
      like: false,
      hit: false,
      disc: 15,
      color: "синий",
    },
    {
      id: 12,
      img: bolgarka1,
      art: "XJ89YHGO",
      prodName: "Смеситель Faris G-120 для раковины",
      price: 1789,
      like: false,
      hit: true,
      disc: 0,
      color: "серый",
    },
    {
      id: 13,
      img: circular_bosch,
      art: "XJ89YHGO",
      prodName: "Триммерная леска «Спираль-100»",
      price: 312,
      like: false,
      hit: false,
      color: "серый",
      disc: 10,
    },
    {
      id: 14,
      img: shlifovka_bosch,
      art: "XJ89YHGO",
      prodName: "Унитаз подвесной Aragio с двойным сливом",
      price: 15999,
      like: false,
      color: "синий",
      hit: true,
      disc: 12,
    },
    {
      id: 15,
      img: nabor,
      art: "XJ89YHGO",
      prodName: "Набор гравировальных насадок Nozzle-Tok",
      price: 15999,
      like: false,
      hit: false,
      color: "желтый",
      disc: 15,
    },
    {
      id: 16,
      img: circular_zubr,
      art: "XJ89YHGO",
      prodName: "Перфоратор универсальный Wander X645-46 GF 1450W",
      price: 15999,
      like: false,
      hit: false,
      color: "красный",
      disc: 15,
    },
    {
      id: 17,
      img: bolgarka2,
      art: "XJ89YHGO",
      prodName: "Смеситель Faris G-120 для раковины",
      price: 1789,
      like: false,
      color: "серый",
      hit: true,
      disc: 0,
    },
    {
      id: 18,
      img: drell_makita_ruchka,
      art: "XJ89YHGO",
      prodName: "Триммерная леска «Спираль-100»",
      price: 312,
      like: false,
      color: "синий",
      hit: false,
      disc: 10,
    },
    {
      id: 19,
      img: betonomeshalka,
      art: "XJ89YHGO",
      prodName: "Набор гравировальных насадок Nozzle-Tok",
      price: 15999,
      like: false,
      color: "оранжевый",
      hit: false,
      disc: 15,
    },
    {
      id: 20,
      img: betonomeshalka,
      art: "XJ89YHGO",
      prodName: "Унитаз подвесной Aragio с двойным сливом",
      price: 15999,
      like: false,
      color: "черный",
      hit: true,
      disc: 12,
    },
  ],
};

export default function GoodsRedux(state = goodsData, { type, payload }) {
  switch (type) {
    case GoodsTypes.catalogOpen:
      state = { ...state, [payload]: !state?.[payload] };
      return state;
    case GoodsTypes.checkBool:
      state = {
        ...state,
        [payload.catalog]: state?.[payload.catalog].map((elem) =>
          elem.title === payload.title ? { ...elem, bool: !elem.bool } : elem
        ),
      };
      return state;
    default:
      return state;
  }
}
