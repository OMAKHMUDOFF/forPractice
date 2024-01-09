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
  bestSellers: [],
  bestOffers: [],
  goodsArr: [],
  news: [],
  discInfo: [],
  qapage: [],
  refundPage: [],
  categories: ["", "Инструменты", "Сантехника", "Для дома", "Для сада"],
  setBSeller: "",
  setBOffer: "",
  cart: [],
  cartDisc: 0,
  oneClickOrder: false,
  hurryUp: {},
};
export default function TotalRedux(state = totalData, { type, payload }) {
  switch (type) {
    case TotalTypes.getApi:
      const {
        bOffersApi,
        bSellersApi,
        goodsApi,
        apiNews,
        apiDiscInfo,
        apiQapage,
        apiRefundPage,
        apiHurryUp,
      } = payload;
      state = {
        ...state,
        goodsArr: goodsApi,
        bestSellers: bSellersApi,
        bestOffers: bOffersApi,
        news: apiNews,
        discInfo: apiDiscInfo,
        qapage: apiQapage,
        refundPage: apiRefundPage,
        hurryUp: apiHurryUp,
      };
      return state;
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
            { ...payload, stock: parseInt(Math.random() * 30) },
          ],
        };
        toast.success("Вы успешно добавили продукт в корзину");
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
    case TotalTypes.singleIn:
      if (payload.count < 10) {
        state = {
          ...state,
          [payload.catalog]: state?.[payload.catalog].map((elem) =>
            elem.id === payload.id ? { ...elem, count: elem.count + 1 } : elem
          ),
        };
      }
      return state;
    case TotalTypes.singleDec:
      if (payload.count > 1) {
        state = {
          ...state,
          [payload.catalog]: state?.[payload.catalog].map((elem) =>
            elem.id === payload.id ? { ...elem, count: elem.count - 1 } : elem
          ),
        };
      }
      return state;
    case TotalTypes.clickOrder:
      document.body.style.overflowY = "hidden";
      state = { ...state, oneClickOrder: true };
      return state;
    case TotalTypes.closeClickOrder:
      document.body.style.overflowY = "scroll";
      state = { ...state, oneClickOrder: false };
      return state;
    default:
      return state;
  }
}
