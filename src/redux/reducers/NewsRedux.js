import news1 from "../../assets/img/newsPageImg/news1.png";
import news2 from "../../assets/img/newsPageImg/news2.png";
import news3 from "../../assets/img/newsPageImg/news3.png";
import news4 from "../../assets/img/newsPageImg/news4.png";
import news5 from "../../assets/img/newsPageImg/news5.png";
import news6 from "../../assets/img/newsPageImg/news6.png";
import news7 from "../../assets/img/newsPageImg/news7.png";
import news8 from "../../assets/img/newsPageImg/news8.png";
import news9 from "../../assets/img/newsPageImg/news9.png";
import news10 from "../../assets/img/newsPageImg/news10.png";
import news11 from "../../assets/img/newsPageImg/news11.png";
import news12 from "../../assets/img/newsPageImg/news12.png";

let NewsData = {
  news: [
    {
      id: 1,
      img: news1,
      newsTitle: "Масштабное обновление каталога инструментов",
      newsDesc:
        "С радостью сообщаем вам о крупном пополнении нашего каталога инструментов.",
      newsData: "5 Августа 2023",
    },
    {
      id: 2,
      img: news2,
      newsTitle: "Масштабное обновление каталога инструментов",
      newsDesc:
        "С радостью сообщаем вам о крупном пополнении нашего каталога инструментов.",
      newsData: "5 Августа 2023",
    },
    {
      id: 3,
      img: news3,
      newsTitle: "Масштабное обновление каталога инструментов",
      newsDesc:
        "С радостью сообщаем вам о крупном пополнении нашего каталога инструментов.",
      newsData: "5 Августа 2023",
    },
    {
      id: 4,
      img: news4,
      newsTitle: "Масштабное обновление каталога инструментов",
      newsDesc:
        "С радостью сообщаем вам о крупном пополнении нашего каталога инструментов.",
      newsData: "5 Августа 2023",
    },
    {
      id: 5,
      img: news5,
      newsTitle: "Масштабное обновление каталога инструментов",
      newsDesc:
        "С радостью сообщаем вам о крупном пополнении нашего каталога инструментов.",
      newsData: "5 Августа 2023",
    },
    {
      id: 6,
      img: news6,
      newsTitle: "Масштабное обновление каталога инструментов",
      newsDesc:
        "С радостью сообщаем вам о крупном пополнении нашего каталога инструментов.",
      newsData: "5 Августа 2023",
    },
    {
      id: 7,
      img: news7,
      newsTitle: "Масштабное обновление каталога инструментов",
      newsDesc:
        "С радостью сообщаем вам о крупном пополнении нашего каталога инструментов.",
      newsData: "5 Августа 2023",
    },
    {
      id: 8,
      img: news8,
      newsTitle: "Масштабное обновление каталога инструментов",
      newsDesc:
        "С радостью сообщаем вам о крупном пополнении нашего каталога инструментов.",
      newsData: "5 Августа 2023",
    },
    {
      id: 9,
      img: news9,
      newsTitle: "Масштабное обновление каталога инструментов",
      newsDesc:
        "С радостью сообщаем вам о крупном пополнении нашего каталога инструментов.",
      newsData: "5 Августа 2023",
    },
    {
      id: 10,
      img: news10,
      newsTitle: "Масштабное обновление каталога инструментов",
      newsDesc:
        "С радостью сообщаем вам о крупном пополнении нашего каталога инструментов.",
      newsData: "5 Августа 2023",
    },
    {
      id: 11,
      img: news11,
      newsTitle: "Масштабное обновление каталога инструментов",
      newsDesc:
        "С радостью сообщаем вам о крупном пополнении нашего каталога инструментов.",
      newsData: "5 Августа 2023",
    },
    {
      id: 12,
      img: news12,
      newsTitle: "Масштабное обновление каталога инструментов",
      newsDesc:
        "С радостью сообщаем вам о крупном пополнении нашего каталога инструментов.",
      newsData: "5 Августа 2023",
    },
  ],
  headingCatalog: ["", "Новости", "Статьи", "Советы", "Обзоры"],
  setHeadingCat: "",
};

export default function NewsRedux(state = NewsData, { type, payload }) {
  switch (type) {
    default:
      return state;
  }
}
