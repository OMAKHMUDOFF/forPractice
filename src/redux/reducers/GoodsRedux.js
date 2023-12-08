import { GoodsTypes } from "../action/ActionTypes";

let goodsData = {
  isOpenPrice: false,
  isOpenGoods: false,
  isOpenBrand: false,
  isOpenMaterial: false,
  isOpenColor: false,
  isOpenLength: false,
  isOpenWidth: false,
  isOpenHeight: false,
  goodsTypeArr: [
    {
      id: 1,
      title: "Набор",
      bool: false,
      catalog: "goodsTypeArr",
    },
    {
      id: 2,
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
    {
      color: "Синий",

      translation: "blue",
    },
    {
      color: "Черный",

      translation: "black",
    },
    {
      color: "Серый",

      translation: "silver",
    },
    {
      color: "Белый",
      translation: "white",
    },
    {
      color: "Красный",
      translation: "red",
    },
    {
      color: "Оранжевый",
      translation: "orange",
    },
    {
      color: "Желтый",
      translation: "yellow",
    },
  ],
  sliceCounts: [9, 12, 18, 24],
  sliceCount: null,
  categoryArr: [],
  colorType: "",
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
    case GoodsTypes.setSliceCount:
      return { ...state, sliceCount: payload };
    case GoodsTypes.setCategoryArr:
      if (
        state.categoryArr.filter((elem) => elem === payload.title).length === 0
      ) {
        state = {
          ...state,
          categoryArr: [...state.categoryArr, payload.title],
        };
      } else {
        state = {
          ...state,
          categoryArr: state.categoryArr.filter(
            (elem) => elem !== payload.title
          ),
        };
      }
      return state;
    case GoodsTypes.delCategoryArr:
      state = {
        ...state,
        categoryArr: state?.categoryArr?.filter((elem) => elem !== payload),
      };
      return state;
    case GoodsTypes.setColorType:
      state = { ...state, colorType: payload };
      return state;
    default:
      return state;
  }
}
