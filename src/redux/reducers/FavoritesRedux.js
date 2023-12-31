import { FavoriteTypes } from "../action/ActionTypes";
let FavoriteData = {
  categoryBtns: [
    "",
    "Шуруповерты",
    "Электродрели",
    "Напольные покрытия",
    "Отделочные материалы",
  ],
  setCategor: "",
};

export default function FavoritesRedux(
  state = FavoriteData,
  { type, payload }
) {
  switch (type) {
    case FavoriteTypes.setCategory:
      state = { ...state, setCategor: payload };
      return state;
    default:
      return state;
  }
}
