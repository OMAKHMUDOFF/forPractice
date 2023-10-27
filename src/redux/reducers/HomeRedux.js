import hardware from "../../assets/img/homePage_IMG/Rectangle 31.png";
import varnishes from "../../assets/img/homePage_IMG/Rectangle 31 (1).png";
import coverings from "../../assets/img/homePage_IMG/Rectangle 31 (2).png";
import heating from "../../assets/img/homePage_IMG/Rectangle 31 (3).png";

import perforator from "../../assets/img/homePage_IMG/Rectangle 22.png";
import smesitel from "../../assets/img/homePage_IMG/smesitel.png";
import leska from "../../assets/img/homePage_IMG/leska.png";
import unitaz from "../../assets/img/homePage_IMG/unitaz.png";
import kley from "../../assets/img/homePage_IMG/kley.png";

import keramin from "../../assets/img/homePage_IMG/image 22.png";
import electrolux from "../../assets/img/homePage_IMG/image 19.png";
import bosch from "../../assets/img/homePage_IMG/image 18.png";
import oasis from "../../assets/img/homePage_IMG/image 17.png";
import kinplast from "../../assets/img/homePage_IMG/image 20.png";
import ceresit from "../../assets/img/homePage_IMG/image 21.png";
import bauproffe from "../../assets/img/homePage_IMG/image 23.png";

import nabor from "../../assets/img/homePage_IMG/nabor.png";
import termostat from "../../assets/img/homePage_IMG/termostat.png";
import drell from "../../assets/img/homePage_IMG/drell_gladiator.png";
import circular from "../../assets/img/homePage_IMG/circular.png";
import vodno_kley from "../../assets/img/homePage_IMG/vodno_kley.png";

import news1 from "../../assets/img/homePage_IMG/news1.png";
import news2 from "../../assets/img/homePage_IMG/news2.png";
import news3 from "../../assets/img/homePage_IMG/news3.png";
import news4 from "../../assets/img/homePage_IMG/news4.png";

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
  popularBrands: [
    {
      id: 1,
      img: keramin,
    },
    {
      id: 2,
      img: electrolux,
    },
    {
      id: 3,
      img: bosch,
    },
    {
      id: 4,
      img: oasis,
    },
    {
      id: 5,
      img: kinplast,
    },
    {
      id: 6,
      img: ceresit,
    },
    {
      id: 7,
      img: bauproffe,
    },
    {
      id: 8,
      img: kinplast,
    },
  ],
  bestOffers: [
    {
      id: 6,
      art: "XJ89YHGO",
      prodName: "Набор гравировальных насадок Nozzle-Tok",
      price: 15999,
      like: false,
      disc: 15,
      category: "Инструменты",
      img: nabor,
      sale: false,
      new: false,
    },
    {
      id: 7,
      art: "XJ89YHGO",
      prodName: "Термостат для душа Torso V-6000",
      price: 1789,
      like: false,
      disc: 0,
      category: "Сантехника",
      img: termostat,
      sale: true,
      new: false,
    },
    {
      id: 8,
      art: "XJ89YHGO",
      prodName: "Аккумуляторный шуруповерт «Гладиатор»",
      price: 312,
      like: false,
      disc: 10,
      category: "Для дома",
      img: drell,
      new: false,
      sale: false,
    },
    {
      id: 9,
      art: "XJ89YHGO",
      prodName: "Унитаз подвесной Aragio с двойным сливом",
      price: 15999,
      like: false,
      disc: 12,
      category: "Для дома",
      img: circular,
      sale: false,
      new: true,
    },
    {
      id: 10,
      art: "XJ89YHGO",
      prodName: "Водно-дисперсионный клей Cob",
      price: 15999,
      like: false,
      disc: 15,
      category: "Инструменты",
      img: vodno_kley,
      sale: false,
      new: false,
    },
  ],
  news: [
    {
      img: news1,
      title: "Масштабное обновление каталога инструментов",
      description:
        "С радостью сообщаем вам о крупном пополнении нашего каталога инструментов.",
      date: "5 августа 2023",
    },
    {
      img: news2,
      title: "Масштабное обновление каталога инструментов",
      description:
        "С радостью сообщаем вам о крупном пополнении нашего каталога инструментов.",
      date: "5 августа 2023",
    },
    {
      img: news3,
      title: "Масштабное обновление каталога инструментов",
      description:
        "С радостью сообщаем вам о крупном пополнении нашего каталога инструментов.",
      date: "5 августа 2023",
    },
    {
      img: news4,
      title: "Масштабное обновление каталога инструментов",
      description:
        "С радостью сообщаем вам о крупном пополнении нашего каталога инструментов.",
      date: "5 августа 2023",
    },
  ],
  categories: ["", "Инструменты", "Сантехника", "Для дома", "Для сада"],
  setBSeller: "",
  setBOffer: "",
};

export default function MainRedux(state = HomeData, { type, payload }) {
  switch (type) {
    case HomeTypes.category:
      state = { ...state, setBSeller: payload };
      return state;
    default:
      return state;
  }
}
