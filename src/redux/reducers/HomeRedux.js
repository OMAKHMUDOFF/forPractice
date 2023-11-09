import varnishes from "../../assets/img/homePage_IMG/Rectangle 31 (1).png";
import coverings from "../../assets/img/homePage_IMG/Rectangle 31 (2).png";
import heating from "../../assets/img/homePage_IMG/Rectangle 31 (3).png";
import hardware from "../../assets/img/homePage_IMG/Rectangle 31.png";

import oasis from "../../assets/img/homePage_IMG/image 17.png";
import bosch from "../../assets/img/homePage_IMG/image 18.png";
import electrolux from "../../assets/img/homePage_IMG/image 19.png";
import kinplast from "../../assets/img/homePage_IMG/image 20.png";
import ceresit from "../../assets/img/homePage_IMG/image 21.png";
import keramin from "../../assets/img/homePage_IMG/image 22.png";
import bauproffe from "../../assets/img/homePage_IMG/image 23.png";

import news1 from "../../assets/img/homePage_IMG/news1.png";
import news2 from "../../assets/img/homePage_IMG/news2.png";
import news3 from "../../assets/img/homePage_IMG/news3.png";
import news4 from "../../assets/img/homePage_IMG/news4.png";

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
};

export default function MainRedux(state = HomeData, { type, payload }) {
  switch (type) {
    default:
      return state;
  }
}
