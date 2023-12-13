import { Pagination, Stack } from "@mui/material";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import CardUi from "../components/UI/CardUi";
import DiscInfoUi from "../components/UI/DiscInfoUi";
import TitleNavigation from "../components/UI/TitleNavigationUI";
import SideBar from "../components/sidebar/SideBar";
import "../components/sidebar/sidebar.css";
import { delCategory, setSliceCount } from "../redux/action/GoodsAction";

function CatalogGoods() {
  let dispatch = useDispatch();
  let { goodsArr } = useSelector((state) => state.TotalRedux);
  let { sliceCounts, sliceCount, categoryArr, colorType } = useSelector(
    (state) => state.GoodsRedux
  );

  return (
    <div className="catalogGoods">
      <TitleNavigation
        path={"/catalogGoods"}
        pathName={"Электроинструмент"}
        title={"Электроинструмент"}
      />
      <div className="sidebar-rightSide">
        <div className="sidebar-discInfo">
          <SideBar />
          <DiscInfoUi />
        </div>
        <div className="rightSide">
          <div className="sort-filtersMap">
            <div className="sort-slice-func">
              <div className="sort-func">
                <p>Сортировать:</p>
                <select>
                  <option value="">По умолчанию</option>
                  <option value="ascending">Цена по возрастанию</option>
                  <option value="discending">Цена по убыванию</option>
                </select>
              </div>
              <div className="slice-func">
                <p>Показывать по:</p>
                {sliceCounts?.map((elem) => (
                  <button
                    key={elem}
                    onClick={() => dispatch(setSliceCount(elem))}
                    style={{
                      color: elem === sliceCount ? "#186FD4" : "#414141",
                      background: elem === sliceCount ? "#F6F8FB" : "#fff",
                    }}
                  >
                    {elem}
                  </button>
                ))}
              </div>
            </div>
            <div className="filtersMap">
              {categoryArr.length > 0
                ? categoryArr.map((elem) => {
                    return (
                      <div key={elem} className="filtersMap-button">
                        <button>
                          {elem}{" "}
                          <AiOutlineClose
                            onClick={() => dispatch(delCategory(elem))}
                          />
                        </button>
                      </div>
                    );
                  })
                : ""}
            </div>
          </div>
          <div className="goods-cards">
            {goodsArr
              // ?.filter((elem) => {
              //   if (
              //     elem.color.toLowerCase().includes(colorType.toLowerCase())
              //   ) {
              //     if (categoryArr.length > 0) {
              //       for (let item of categoryArr) {
              //         if (
              //           elem?.category?.includes(item) ||
              //           elem?.brand?.includes(item)
              //         ) {
              //           return elem;
              //         }
              //       }
              //     } else {
              //       return elem;
              //     }
              //   }
              // })
              ?.map((elem) => {
                return (
                  <div className="goods-card" key={elem.id}>
                    <CardUi elem={elem} />
                  </div>
                );
              })}
          </div>
          <Stack spacing={2}>
            <Pagination count={10} variant="outlined" shape="rounded" />
          </Stack>
          <div className="buy-elektro-tools">
            <div className="buy-elektro-title">
              <h2>Купить электроинструмент</h2>
            </div>
            <div className="buy-elektro-subtitle">
              <p>
                Здесь вы найдете самый широкий выбор высококачественных
                электроинструментов для любых задач. Независимо от того,
                являетесь ли вы профессиональным мастером или занимаетесь
                ремонтами и строительством в домашних условиях, у нас есть все
                необходимое, чтобы сделать вашу работу эффективной и комфортной.
              </p>
              <p>
                У нас представлены электроинструменты от ведущих мировых
                производителей, гарантирующие надежность, долгий срок службы и
                безупречное качество. В категории "Электроинструмент" вы найдете
                широкий ассортимент:
              </p>
            </div>
            <ul className="goods-info">
              <li>
                <span className="marker" />
                <p>
                  <strong>Дрели и Шуруповерты: </strong>
                  От мощных перфораторов для бурения бетона до удобных
                  шуруповертов для быстрой и точной забивки и вывинчивания
                  винтов. Все инструменты обладают разными скоростями,
                  настройками и функциями для наилучшего результата.
                </p>
              </li>
              <li>
                <span className="marker" />
                <p>
                  <strong>Пилы и Фрезеры: </strong>
                  Выбор пил и фрезеров позволит вам точно резать и обрабатывать
                  различные материалы, будь то древесина, пластик или металл.
                  Продуманные дизайны и системы пылеудаления обеспечивают
                  чистоту рабочей зоны.
                </p>
              </li>
              <li>
                <span className="marker" />
                <p>
                  <strong>Лобзики и Торцовочные Пилы: </strong>
                  Для максимально точной резки по контурам и наклонам, а также
                  для продольной резки длинных материалов, таких как доски или
                  трубы.
                </p>
              </li>
              <li>
                <span className="marker" />
                <p>
                  <strong>Шлифовальные машины: </strong>
                  От шлифования поверхности перед покраской до полировки, наши
                  инструменты позволят вам добиться гладкой и равномерной
                  отделки.
                </p>
              </li>
              <li>
                <span className="marker" />
                <p>
                  <strong>Сварочные аппараты: </strong>
                  Для профессиональных сварщиков и тех, кто нуждается в точной и
                  надежной сварке различных материалов.
                </p>
              </li>
              <li>
                <span className="marker" />
                <p>
                  <strong>Измерительные Приборы: </strong>
                  Широкий выбор лазерных дальномеров, электронных угломеров и
                  других инструментов для точных измерений и маркировки.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CatalogGoods;
