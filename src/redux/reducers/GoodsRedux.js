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
      title: "Набор",
      bool: false,
      catalog: "goodsTypeArr",
      category: "typeCategory",
    },
    {
      title: "Стойка",
      bool: false,
      catalog: "goodsTypeArr",
      category: "typeCategory",
    },
    {
      title: "Адаптер",
      bool: false,
      catalog: "goodsTypeArr",
      category: "typeCategory",
    },
    {
      title: "Держатель",
      bool: false,
      catalog: "goodsTypeArr",
      category: "typeCategory",
    },
    {
      title: "Фильтр",
      bool: false,
      catalog: "goodsTypeArr",
      category: "typeCategory",
    },
    {
      title: "Инструмент",
      bool: false,
      catalog: "goodsTypeArr",
      category: "typeCategory",
    },
    {
      title: "Сантехника",
      bool: false,
      catalog: "goodsTypeArr",
      category: "typeCategory",
    },
  ],
  brandArr: [
    {
      title: "STAYER",
      bool: false,
      catalog: "brandArr",
      category: "brandCategory",
    },
    {
      catalog: "brandArr",
      title: "HOMEPROFEE",
      bool: false,
      category: "brandCategory",
    },
    {
      catalog: "brandArr",
      title: "PECAHTA",
      bool: false,
      category: "brandCategory",
    },
    {
      title: "MAKITA",
      bool: false,
      catalog: "brandArr",
      category: "brandCategory",
    },
    {
      title: "HUNTER",
      bool: false,
      catalog: "brandArr",
      category: "brandCategory",
    },
    {
      title: "Зубр",
      bool: false,
      catalog: "brandArr",
      category: "brandCategory",
    },
  ],
  materialArr: [
    {
      title: "Латунь",
      bool: false,
      catalog: "materialArr",
      category: "materialCategory",
    },
    {
      title: "Медь",
      bool: false,
      catalog: "materialArr",
      category: "materialCategory",
    },
    {
      title: "Металл",
      bool: false,
      catalog: "materialArr",
      category: "materialCategory",
    },
    {
      title: "Металл, пластик",
      bool: false,
      catalog: "materialArr",
      category: "materialCategory",
    },
    {
      title: "Бумага",
      bool: false,
      catalog: "materialArr",
      category: "materialCategory",
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
  typeCategory: [],
  brandCategory: [],
  materialCategory: [],
  colorType: "",
  priceValue: [0, 52000],
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
        state.typeCategory.filter((elem) => elem.title === payload.title)
          .length === 0
      ) {
        state = {
          ...state,
          typeCategory: [...state.typeCategory, payload],
        };
      } else {
        state = {
          ...state,
          typeCategory: state.typeCategory.filter(
            (elem) => elem.title !== payload.title
          ),
        };
      }
      return state;
    case GoodsTypes.setBrandCategory:
      if (
        state.brandCategory.filter((elem) => elem.title === payload.title)
          .length === 0
      ) {
        state = {
          ...state,
          brandCategory: [...state.brandCategory, payload],
        };
      } else {
        state = {
          ...state,
          brandCategory: state.brandCategory.filter(
            (elem) => elem.title !== payload.title
          ),
        };
      }
      console.log(state.brandCategory);
      return state;
    case GoodsTypes.delCategoryArr:
      state = {
        ...state,
        [payload.category]: state?.[payload.category]?.filter(
          (elem) => elem !== payload
        ),
      };
      state = {
        ...state,
        [payload.catalog]: state?.[payload.catalog].map((elem) =>
          elem.title === payload.title ? { ...elem, bool: !elem.bool } : elem
        ),
      };
      return state;
    case GoodsTypes.setColorType:
      state = { ...state, colorType: payload };
      return state;
    case GoodsTypes.changePriceValue:
      const { ev, index } = payload;
      state = {
        ...state,
        priceValue: state.priceValue.map((elem, ind) =>
          ind === index ? (elem = +ev.target.value) : elem
        ),
      };
      return state;
    case GoodsTypes.handleRangeValue:
      const { newValue } = payload;
      state = { ...state, priceValue: newValue };
      return state;
    default:
      return state;
  }
}
