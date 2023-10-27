import hardware from "../../assets/img/homePage_IMG/Rectangle 31.png";
import varnishes from "../../assets/img/homePage_IMG/Rectangle 31 (1).png";
import coverings from "../../assets/img/homePage_IMG/Rectangle 31 (2).png";
import heating from "../../assets/img/homePage_IMG/Rectangle 31 (3).png";

import perforator from "../../assets/img/homePage_IMG/Rectangle 22.png";
import smesitel from "../../assets/img/homePage_IMG/smesitel.png";
import leska from "../../assets/img/homePage_IMG/leska.png";
import unitaz from "../../assets/img/homePage_IMG/unitaz.png";
import kley from "../../assets/img/homePage_IMG/kley.png";
import { HomeTypes } from "../action/ActionTypes";
let HomeData = {
  discInfo: [
    {
      id: 1,
      img: hardware,
      title: "Метизные изделия",
      disc: 15,
    },
    {
      id: 2,
      img: varnishes,
      title: "Лакокрасочные материалы",
      disc: 30,
    },
    {
      id: 3,
      img: coverings,
      title: "Наполные покрытия",
      disc: 25,
    },
    {
      id: 4,
      img: heating,
      title: "Все для отопления",
      disc: 30,
    },
  ],
  bestSellers: [
    {
      id: 1,
      art: "XJ89YHGO",
      prodName: "Перфоратор универсальный Wander X645-46 GF 1450W",
      price: 15999,
      like: false,
      disc: 15,
      category: "Инструменты",
      img: perforator,
    },
    {
      id: 2,
      art: "XJ89YHGO",
      prodName: "Смеситель Faris G-120 для раковины",
      price: 1789,
      like: false,
      disc: 0,
      category: "Сантехника",
      img: smesitel,
    },
    {
      id: 3,
      art: "XJ89YHGO",
      prodName: "Триммерная леска «Спираль-100»",
      price: 312,
      like: false,
      disc: 10,
      category: "Для дома",
      img: leska,
    },
    {
      id: 4,
      art: "XJ89YHGO",
      prodName: "Унитаз подвесной Aragio с двойным сливом",
      price: 15999,
      like: false,
      disc: 12,
      category: "Для дома",
      img: unitaz,
    },
    {
      id: 5,
      art: "XJ89YHGO",
      prodName: "Клей для напольных покрытий Porret",
      price: 15999,
      like: false,
      disc: 12,
      category: "Инструменты",
      img: kley,
    },
  ],
  categories: ["", "Инструменты", "Сантехника", "Для дома", "Для сада"],
  setCategory: "",
};

export default function MainRedux(state = HomeData, { type, payload }) {
  switch (type) {
    case HomeTypes.category:
      state = { ...state, setCategory: payload };
      console.log(state.setCategory);
      return state;
    default:
      return state;
  }
}
