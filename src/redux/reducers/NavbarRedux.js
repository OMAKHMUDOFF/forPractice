import { HiOutlineShoppingCart } from "react-icons/hi";
import { FiBarChart2 } from "react-icons/fi";
import { AiOutlineGift, AiOutlineHeart } from "react-icons/ai";
import { TbUserSquareRounded } from "react-icons/tb";

let NavData = {
  botRN: [
    {
      icon: <AiOutlineGift />,
      title: "Все Акции",
    },
    {
      icon: <TbUserSquareRounded />,
      title: "Войти",
    },
    {
      icon: <FiBarChart2 />,
      title: "Сравнение",
    },
    {
      icon: <AiOutlineHeart />,
      title: "Избранное",
    },
    {
      icon: <HiOutlineShoppingCart />,
      title: "Корзина",
    },
  ],
};

export default function NavbarRedux(state = NavData, { type, payload }) {
  switch (type) {
    default:
      return state;
  }
}
