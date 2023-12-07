import { TotalTypes } from "../action/ActionTypes";

//IMG IMPORTS
import perforator from "../../assets/img/homePage_IMG/Rectangle 22.png";
import circular from "../../assets/img/homePage_IMG/circular.png";
import drell from "../../assets/img/homePage_IMG/drell_gladiator.png";
import kley from "../../assets/img/homePage_IMG/kley.png";
import leska from "../../assets/img/homePage_IMG/leska.png";
import smesitel from "../../assets/img/homePage_IMG/smesitel.png";
import termostat from "../../assets/img/homePage_IMG/termostat.png";
import unitaz from "../../assets/img/homePage_IMG/unitaz.png";
import vodno_kley from "../../assets/img/homePage_IMG/vodno_kley.png";

//catalogGoods img
import betonomeshalka from "../../assets/img/catalogGOODS/betonomeshalka.png";
import bolgarka1 from "../../assets/img/catalogGOODS/bolgarka1.png";
import bolgarka2 from "../../assets/img/catalogGOODS/bolgarka2.png";
import bolgarka_makita from "../../assets/img/catalogGOODS/bolgarka_makita.png";
import circular_bosch from "../../assets/img/catalogGOODS/circular_pila_bosch.png";
import circular_zubr from "../../assets/img/catalogGOODS/circular_pila_zubr.png";
import mixer from "../../assets/img/catalogGOODS/constr_mixer.png";
import drell_PIT from "../../assets/img/catalogGOODS/drell_PIT.png";
import drell_makita_bez from "../../assets/img/catalogGOODS/drell_makita_bez_ruchki.png";
import drell_makita_bez2 from "../../assets/img/catalogGOODS/drell_makita_bez_ruchki_2.png";
import drell_makita_ruchka from "../../assets/img/catalogGOODS/drell_makita_s_ruchkoy.png";
import graver_zubr from "../../assets/img/catalogGOODS/graver_zubr.png";
import kley_pistolet_stayer from "../../assets/img/catalogGOODS/kley_pistolet_stayer.png";
import lobzik_makita from "../../assets/img/catalogGOODS/lobzik_makita.png";
import nabor from "../../assets/img/catalogGOODS/nabor.png";
import perforator1 from "../../assets/img/catalogGOODS/perforator.png";
import perforator_PIT from "../../assets/img/catalogGOODS/perforator_PIT.png";
import perforator_bosch from "../../assets/img/catalogGOODS/perforator_bosch.png";
import perforator_bosch_s from "../../assets/img/catalogGOODS/perforator_bosch_siniy.png";
import perforator_zubr from "../../assets/img/catalogGOODS/perforator_zubr.png";
import pilesos_zubr from "../../assets/img/catalogGOODS/pilesos_zubr.png";
import rubanok_makita from "../../assets/img/catalogGOODS/rubanok_makita.png";
import rubanok_vixr from "../../assets/img/catalogGOODS/rubanok_vixr.png";
import shlifovka_bosch from "../../assets/img/catalogGOODS/shlifovka.png";
import shlifovka_makita from "../../assets/img/catalogGOODS/shlifovka_makita.png";
import shlifovka_zubr from "../../assets/img/catalogGOODS/shlifovka_zubr.png";
import stanok_vixr from "../../assets/img/catalogGOODS/stanok_vixr.png";
import stroy_fen_zubr from "../../assets/img/catalogGOODS/stroy_fen_zubr.png";

//news img
import news1 from "../../assets/img/homePage_IMG/news1.png";
import news2 from "../../assets/img/homePage_IMG/news2.png";
import news3 from "../../assets/img/homePage_IMG/news3.png";
import news4 from "../../assets/img/homePage_IMG/news4.png";

//discInfo Img
import { toast } from "react-toastify";
import discInfo1 from "../../assets/img/QAImg/discInfo1.png";
import discInfo2 from "../../assets/img/QAImg/discInfo2.png";

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
      category: "Сантехника",
      brand: "MAKITA",
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
      category: "Сантехника",
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
      category: "Инстурмент",
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
      category: "Инструмент",
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
      category: "Набор",
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
      category: "Инструмент",
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
      category: "Инструмент",
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
      category: "Сантехника",
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
      category: "Инструмент",
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
      category: "Инструмент",
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
      category: "Инструмент",
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
      category: "Сантехника",
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
      category: "Инструмент",
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
      category: "Инструмент",
    },
    {
      catalog: "goodsArr",
      id: 25,
      img: lobzik_makita,
      art: "XJ89YHGO",
      prodName: "Унитаз подвесной Aragio с двойным сливом",
      price: 15999,
      like: false,
      color: "синий",
      hit: true,
      disc: 12,
      category: "Инструмент",
    },
    {
      catalog: "goodsArr",
      id: 26,
      img: shlifovka_makita,
      art: "XJ89YHGO",
      prodName: "Перфоратор универсальный Wander X645-46 GF 1450W",
      price: 15999,
      like: false,
      color: "синий",
      hit: false,
      disc: 15,
      category: "Сантехника",
    },
    {
      catalog: "goodsArr",
      id: 27,
      img: stroy_fen_zubr,
      art: "XJ89YHGO",
      prodName: "Триммерная леска «Спираль-100»",
      price: 312,
      like: false,
      color: "белый",
      hit: false,
      disc: 10,
      category: "Сантехника",
    },
    {
      catalog: "goodsArr",
      id: 28,
      img: graver_zubr,
      art: "XJ89YHGO",
      prodName: "Набор гравировальных насадок Nozzle-Tok",
      price: 15999,
      like: false,
      color: "красный",
      hit: false,
      disc: 15,
      category: "Набор",
    },
    {
      catalog: "goodsArr",
      id: 29,
      img: drell_makita_bez2,
      art: "XJ89YHGO",
      prodName: "Унитаз подвесной Aragio с двойным сливом",
      price: 15999,
      like: false,
      color: "синий",
      hit: true,
      disc: 12,
      category: "Инструмент",
    },
    {
      catalog: "goodsArr",
      id: 30,
      img: perforator_bosch_s,
      art: "XJ89YHGO",
      prodName: "Смеситель Faris G-120 для раковины",
      price: 1789,
      like: false,
      color: "синий",
      hit: true,
      disc: 0,
      category: "Инструмент",
    },
    {
      catalog: "goodsArr",
      id: 31,
      img: drell_PIT,
      art: "XJ89YHGO",
      prodName: "Перфоратор универсальный Wander X645-46 GF 1450W",
      price: 15999,
      like: false,
      color: "черный",
      hit: false,
      disc: 15,
      category: "Сантехника",
    },
    {
      catalog: "goodsArr",
      id: 32,
      img: perforator_zubr,
      art: "XJ89YHGO",
      prodName: "Унитаз подвесной Aragio с двойным сливом",
      price: 15999,
      like: false,
      color: "белый",
      hit: true,
      disc: 12,
      category: "Стойка",
    },
    {
      catalog: "goodsArr",
      id: 33,
      img: stanok_vixr,
      art: "XJ89YHGO",
      prodName: "Перфоратор универсальный Wander X645-46 GF 1450W",
      price: 15999,
      like: false,
      color: "оранжевый",
      hit: false,
      disc: 15,
      category: "Стойка",
    },
    {
      catalog: "goodsArr",
      id: 34,
      img: rubanok_vixr,
      art: "XJ89YHGO",
      prodName: "Триммерная леска «Спираль-100»",
      price: 312,
      like: false,
      color: "оранжевый",
      hit: false,
      disc: 10,
      category: "Набор",
    },
    {
      catalog: "goodsArr",
      id: 35,
      img: perforator_PIT,
      art: "XJ89YHGO",
      prodName: "Триммерная леска «Спираль-100»",
      price: 312,
      like: false,
      color: "черный",
      hit: false,
      disc: 10,
      category: "Сантехника",
    },
    {
      catalog: "goodsArr",
      id: 36,
      img: kley_pistolet_stayer,
      art: "XJ89YHGO",
      prodName: "Набор гравировальных насадок Nozzle-Tok",
      price: 15999,
      like: false,
      color: "черный",
      hit: false,
      disc: 15,
      category: "Сантехника",
    },
    {
      catalog: "goodsArr",
      id: 37,
      img: nabor,
      art: "XJ89YHGO",
      prodName: "Набор гравировальных насадок Nozzle-Tok",
      price: 15999,
      like: false,
      color: "желтый",
      hit: false,
      disc: 15,
      category: "Набор",
    },
    {
      catalog: "goodsArr",
      id: 38,
      img: rubanok_makita,
      art: "XJ89YHGO",
      prodName: "Смеситель Faris G-120 для раковины",
      price: 1789,
      like: false,
      color: "синий",
      hit: true,
      disc: 0,
      category: "Стойка",
    },
    {
      catalog: "goodsArr",
      id: 39,
      img: pilesos_zubr,
      art: "XJ89YHGO",
      prodName: "Смеситель Faris G-120 для раковины",
      price: 1789,
      like: false,
      color: "красный",
      hit: true,
      disc: 0,
      category: "Держатель",
    },
    {
      catalog: "goodsArr",
      id: 40,
      img: drell_makita_bez2,
      art: "XJ89YHGO",
      prodName: "Унитаз подвесной Aragio с двойным сливом",
      price: 15999,
      like: false,
      color: "синий",
      hit: true,
      disc: 12,
      category: "Адаптер",
    },
    {
      catalog: "goodsArr",
      id: 41,
      img: bolgarka2,
      art: "XJ89YHGO",
      prodName: "Унитаз подвесной Aragio с двойным сливом",
      price: 15999,
      like: false,
      color: "синий",
      hit: true,
      disc: 12,
      category: "Держатель",
    },
    {
      catalog: "goodsArr",
      id: 42,
      img: nabor,
      art: "XJ89YHGO",
      prodName: "Набор гравировальных насадок Nozzle-Tok",
      price: 15999,
      like: false,
      color: "желтый",
      hit: false,
      disc: 15,
      category: "Фильтр",
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
  discInfo: [
    {
      id: 1,
      img: discInfo1,
      title: "Все для отоплления",
      disc: 30,
    },
    {
      id: 2,
      img: discInfo2,
      title: "Лакокрасочные материалы",
      disc: 30,
    },
  ],
  qapage: [
    {
      catalog: "qapage",
      id: 1,
      quest:
        "Могу ли я сделать возврат материалов, не использованных в процессе строительства?",
      bool: false,
      answer:
        "Система кредитования и рассрочки действует в организации при обращении к кредитным специалистам, которые оформят вам договор по предложенным кредитным продуктам от банка, в который будет подана заявка.",
    },
    {
      catalog: "qapage",
      id: 2,
      quest: "Входит ли в стоимость доставки разгрузка машины?",
      bool: false,
      answer:
        "Система кредитования и рассрочки действует в организации при обращении к кредитным специалистам, которые оформят вам договор по предложенным кредитным продуктам от банка, в который будет подана заявка.",
    },
    {
      catalog: "qapage",
      id: 3,
      quest:
        "Продаются ли у вас в магазине товары под заказ, которые можно купить только по предоплате?",
      bool: false,
      answer:
        "Система кредитования и рассрочки действует в организации при обращении к кредитным специалистам, которые оформят вам договор по предложенным кредитным продуктам от банка, в который будет подана заявка.",
    },
    {
      catalog: "qapage",
      id: 4,
      quest: "Какая минимальная сумма заказа?",
      bool: false,
      answer:
        "Система кредитования и рассрочки действует в организации при обращении к кредитным специалистам, которые оформят вам договор по предложенным кредитным продуктам от банка, в который будет подана заявка.",
    },
    {
      catalog: "qapage",
      id: 5,
      quest: "Есть ли у вас бесплатная доставка?",
      bool: false,
      answer:
        "Система кредитования и рассрочки действует в организации при обращении к кредитным специалистам, которые оформят вам договор по предложенным кредитным продуктам от банка, в который будет подана заявка.",
    },
    {
      catalog: "qapage",
      id: 6,
      quest:
        "Есть ли возможность оформить рассрочку или кредит при покупке? Если есть, то какие условия?",
      bool: false,
      answer:
        "Система кредитования и рассрочки действует в организации при обращении к кредитным специалистам, которые оформят вам договор по предложенным кредитным продуктам от банка, в который будет подана заявка.",
    },
    {
      catalog: "qapage",
      id: 7,
      quest: "Возможно ли проверить инструмент или технику перед покупкой?",
      bool: false,
      answer:
        "Система кредитования и рассрочки действует в организации при обращении к кредитным специалистам, которые оформят вам договор по предложенным кредитным продуктам от банка, в который будет подана заявка.",
    },
    {
      catalog: "qapage",
      id: 8,
      quest: "Какие дополнительные услуги есть у вас?",
      bool: false,
      answer:
        "Система кредитования и рассрочки действует в организации при обращении к кредитным специалистам, которые оформят вам договор по предложенным кредитным продуктам от банка, в который будет подана заявка.",
    },
    {
      catalog: "qapage",
      id: 9,
      quest: "Как часто у вас проходят акции?",
      bool: false,
      answer:
        "Система кредитования и рассрочки действует в организации при обращении к кредитным специалистам, которые оформят вам договор по предложенным кредитным продуктам от банка, в который будет подана заявка.",
    },
  ],
  refundPage: [
    {
      catalog: "refundPage",
      id: 1,
      quest: "Куда обращаться в случае поломки в течении гарантийного срока?",
      bool: false,
      answer: "Проводится платная диагностика и ремонт товара",
    },
    {
      catalog: "refundPage",
      id: 2,
      quest: "Куда обращаться в случае поломки в течении гарантийного срока?",
      bool: false,
      answer: "Проводится платная диагностика и ремонт товара",
    },
    {
      catalog: "refundPage",
      id: 3,
      quest: "Есть ли гарантийный ремонт?",
      bool: false,
      answer: "Проводится платная диагностика и ремонт товара",
    },
    {
      catalog: "refundPage",
      id: 4,
      quest: "Какой срок действия гарантии?",
      bool: false,
      answer: "Проводится платная диагностика и ремонт товара",
    },
  ],
  cart: [],
  cartDisc: 0,
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
    case TotalTypes.openAns:
      state = {
        ...state,
        [payload.catalog]: state?.[payload.catalog]?.map((elem) =>
          elem.id === payload.id
            ? { ...elem, bool: !elem.bool }
            : { ...elem, bool: false }
        ),
      };
      return state;
    case TotalTypes.setCart:
      if (state.cart.filter((elem) => elem.id === payload.id).length === 0) {
        state = {
          ...state,
          cart: [
            ...state.cart,
            { ...payload, count: 1, stock: parseInt(Math.random() * 30) },
          ],
        };
        toast.success("Вы успещно добавили продукт в корзину");
      } else {
        toast.error("Этот продукт уже есть в корзине!");
      }
      return state;
    case TotalTypes.decrement:
      if (payload.count > 1) {
        state = {
          ...state,
          cart: state?.cart?.map((elem) =>
            elem?.id === payload?.id ? { ...elem, count: elem.count - 1 } : elem
          ),
        };
      } else {
        toast.warn("Нельзя купить товар меньше одного");
      }
      return state;
    case TotalTypes.increment:
      if (payload.count < payload.stock) {
        state = {
          ...state,
          cart: state?.cart?.map((elem) =>
            elem?.id === payload?.id ? { ...elem, count: elem.count + 1 } : elem
          ),
        };
      } else {
        toast.warn("На складе нету столько товаров");
      }
      return state;
    case TotalTypes.delete:
      if (window.confirm("Вы точно хотите убрать товар из корзины?")) {
        state = {
          ...state,
          cart: state?.cart?.filter((elem) => elem.id !== payload),
        };
        toast.success("Вы успешно удалили товар с корзины");
      } else {
        toast.warn("Вы отменили");
      }

      return state;
    default:
      return state;
  }
}
