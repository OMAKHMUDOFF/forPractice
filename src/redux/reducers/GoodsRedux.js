import perforator1 from "../../assets/img/catalogGOODS/perforator.png";
import { GoodsTypes } from "../action/ActionTypes";

let goodsData = {
  isOpenPrice: false,
  goodsType: false,
  brand: false,
  material: false,
  color: false,
  length: false,
  width: false,
  height: false,
  catalogData: {
    goodsType: [
      {
        title: "Набор",
        bool: false,
      },
      {
        title: "Стойка",
        bool: false,
      },
      {
        title: "Адаптер",
        bool: false,
      },
      {
        title: "Держатель",
        bool: false,
      },
      {
        title: "Фильтр",
        bool: false,
      },
      {
        title: "Инструмент",
        bool: false,
      },
    ],
    brand: [
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
    material: [
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
    color: [
      "",
      "Синий",
      "Черный",
      "Серый",
      "Белый",
      "Красный",
      "Оранжевый",
      "Желтый",
    ],
  },
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
    default:
      return state;
  }
}
