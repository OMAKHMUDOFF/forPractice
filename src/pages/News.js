import { useSelector } from "react-redux";
import TitleNavigation from "../components/UI/TitleNavigationUI";
import { Pagination, Stack } from "@mui/material";
import SubsMainlingUi from "../components/UI/SubsMainlingUi";

function News() {
  let { news, headingCatalog, setHeadingCat } = useSelector(
    (state) => state.NewsRedux
  );
  return (
    <div className="news-page">
      <TitleNavigation path={"/news"} pathName={"Новости"} title={"Новости"} />
      <div className="main-news-pagination">
        <div className="news-pagination">
          <div className="news-cards-pagination">
            {news.map((item) => {
              return (
                <div className="news-card-pagination" key={item.id}>
                  <div className="news-card-img">
                    <img src={item.img} alt="" />
                  </div>
                  <div className="news-card-title">
                    <h3>{item.newsTitle}</h3>
                  </div>
                  <div className="news-card-descr">
                    <p>{item.newsDesc}</p>
                  </div>
                  <div className="news-card-data">
                    <p>{item.newsData}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <Stack spacing={2}>
            <Pagination count={10} variant="outlined" shape="rounded" />
          </Stack>
        </div>
        <div className="right-categories">
          <div className="headings">
            <div className="headings-title">
              <h4>Рубрики</h4>
            </div>
            <div className="headings-catalog">
              <ul>
                {headingCatalog?.map((item, i) => {
                  return (
                    <li
                      key={i}
                      style={{
                        color: item === setHeadingCat ? "#186FD4" : "#373B3F",
                        fontWeight: item === setHeadingCat ? "700" : "550",
                      }}
                    >
                      {item === "" ? "Все публикации" : item}
                      <span
                        className="news-length"
                        style={{
                          color: item === setHeadingCat ? "#186fd4" : "#373b3f",
                        }}
                      >
                        {item === "" ? `${news.length}` : "0"}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <SubsMainlingUi />
        </div>
      </div>
    </div>
  );
}

export default News;
