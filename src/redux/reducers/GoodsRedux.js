import perforator1 from "../../assets/img/catalogGOODS/perforator.png";
import { GoodsTypes } from "../action/ActionTypes";

let goodsData = {
  isOpenPrice: false,
  isOpenGoods: false,
  brand: false,
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
      name: "STAYER",
      bool: false,
    },
    {
      name: "HOMEPROFEE",
      bool: false,
    },
    {
      name: "PECAHTA",
      bool: false,
    },
    {
      name: "MAKITA",
      bool: false,
    },
    {
      name: "HUNTER",
      bool: false,
    },
    {
      name: "Зубр",
      bool: false,
    },
  ],
  materialArr: [
    {
      type: "Латунь",
      bool: false,
    },
    {
      type: "Медь",
      bool: false,
    },
    {
      type: "Металл",
      bool: false,
    },
    {
      type: "Металл, пластик",
      bool: false,
    },
    {
      type: "Бумага",
      bool: false,
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
