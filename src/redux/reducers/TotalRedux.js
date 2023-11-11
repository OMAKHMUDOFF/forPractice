import { TotalTypes } from "../action/ActionTypes";

//IMG IMPORTS
import betonomeshalka from "../../assets/img/catalogGOODS/betonomeshalka.png";
import bolgarka1 from "../../assets/img/catalogGOODS/bolgarka1.png";
import bolgarka2 from "../../assets/img/catalogGOODS/bolgarka2.png";
import bolgarka_makita from "../../assets/img/catalogGOODS/bolgarka_makita.png";
import circular_bosch from "../../assets/img/catalogGOODS/circular_pila_bosch.png";
import circular_zubr from "../../assets/img/catalogGOODS/circular_pila_zubr.png";
import mixer from "../../assets/img/catalogGOODS/constr_mixer.png";
import drell_makita_bez from "../../assets/img/catalogGOODS/drell_makita_bez_ruchki.png";
import drell_makita_ruchka from "../../assets/img/catalogGOODS/drell_makita_s_ruchkoy.png";
import nabor from "../../assets/img/catalogGOODS/nabor.png";
import perforator1 from "../../assets/img/catalogGOODS/perforator.png";
import perforator_bosch from "../../assets/img/catalogGOODS/perforator_bosch.png";
import shlifovka_bosch from "../../assets/img/catalogGOODS/shlifovka.png";
import shlifovka_zubr from "../../assets/img/catalogGOODS/shlifovka_zubr.png";
import perforator from "../../assets/img/homePage_IMG/Rectangle 22.png";
import circular from "../../assets/img/homePage_IMG/circular.png";
import drell from "../../assets/img/homePage_IMG/drell_gladiator.png";
import kley from "../../assets/img/homePage_IMG/kley.png";
import leska from "../../assets/img/homePage_IMG/leska.png";
import smesitel from "../../assets/img/homePage_IMG/smesitel.png";
import termostat from "../../assets/img/homePage_IMG/termostat.png";
import unitaz from "../../assets/img/homePage_IMG/unitaz.png";
import vodno_kley from "../../assets/img/homePage_IMG/vodno_kley.png";
//news img
import news1 from "../../assets/img/homePage_IMG/news1.png";
import news2 from "../../assets/img/homePage_IMG/news2.png";
import news3 from "../../assets/img/homePage_IMG/news3.png";
import news4 from "../../assets/img/homePage_IMG/news4.png";

let totalData = {
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
      catalog: "bestSellers",
      hit: true,
    },
    {
      id: 2,
      art: "XJ89YHGO",
      prodName: "Смеситель Faris G-120 для раковины",
      price: 1789,
      like: false,
      disc: 0,
      category: "Сантехника",
      catalog: "bestSellers",
      img: smesitel,
      hit: true,
    },
    {
      id: 3,
      art: "XJ89YHGO",
      prodName: "Триммерная леска «Спираль-100»",
      price: 312,
      like: false,
      disc: 10,
      category: "Для дома",
      catalog: "bestSellers",
      img: leska,
      hit: true,
    },
    {
      id: 4,
      art: "XJ89YHGO",
      prodName: "Унитаз подвесной Aragio с двойным сливом",
      price: 15999,
      like: false,
      disc: 12,
      category: "Для дома",
      catalog: "bestSellers",
      img: unitaz,
      hit: true,
    },
    {
      id: 5,
      art: "XJ89YHGO",
      prodName: "Клей для напольных покрытий Porret",
      price: 15999,
      like: false,
      disc: 12,
      category: "Инструменты",
      catalog: "bestSellers",
      hit: true,
      img: kley,
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
      catalog: "bestOffers",
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
      catalog: "bestOffers",
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
      catalog: "bestOffers",
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
      catalog: "bestOffers",
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
      catalog: "bestOffers",
      new: false,
    },
  ],
  goodsArr: [
    {
      catalog: "goodsArr",
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
      catalog: "goodsArr",
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
      catalog: "goodsArr",
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
      catalog: "goodsArr",
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
      catalog: "goodsArr",
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
      catalog: "goodsArr",
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
      catalog: "goodsArr",
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
      catalog: "goodsArr",
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
      catalog: "goodsArr",
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
      catalog: "goodsArr",
      id: 20,
      img: perforator_bosch,
      art: "XJ89YHGO",
      prodName: "Унитаз подвесной Aragio с двойным сливом",
      price: 15999,
      like: false,
      color: "черный",
      hit: true,
      disc: 12,
    },
    {
      catalog: "goodsArr",
      id: 21,
      img: mixer,
      art: "XJ89YHGO",
      prodName: "Перфоратор универсальный Wander X645-46 GF 1450W",
      price: 15999,
      like: false,
      color: "серый",
      hit: false,
      disc: 15,
    },
    {
      catalog: "goodsArr",
      id: 22,
      img: drell_makita_bez,
      art: "XJ89YHGO",
      prodName: "Набор гравировальных насадок Nozzle-Tok",
      price: 15999,
      like: false,
      color: "синий",
      hit: false,
      disc: 15,
    },
    {
      catalog: "goodsArr",
      id: 23,
      img: bolgarka_makita,
      art: "XJ89YHGO",
      prodName: "Смеситель Faris G-120 для раковины",
      price: 1789,
      like: false,
      color: "синий",
      hit: true,
      disc: 0,
    },
    {
      catalog: "goodsArr",
      id: 24,
      img: shlifovka_zubr,
      art: "XJ89YHGO",
      prodName: "Триммерная леска «Спираль-100»",
      price: 312,
      like: false,
      color: "белый",
      hit: false,
      disc: 10,
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
export default function TotalRedux(state = totalData, { type, payload }) {
  switch (type) {
    case TotalTypes.totalLike:
      state = {
        ...state,
        [payload.catalog]: state?.[payload.catalog]?.map((elem) =>
          elem.id === payload.id ? { ...elem, like: !elem.like } : elem
        ),
      };
      return state;
    case TotalTypes.category:
      state = { ...state, setBSeller: payload };
      return state;
    default:
      return state;
  }
}
