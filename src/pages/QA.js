import React from "react";
import { useSelector } from "react-redux";
import DiscInfoUi from "../components/UI/DiscInfoUi";
import QAui from "../components/UI/QAui";
import SubsMainlingUi from "../components/UI/SubsMainlingUi";
import TitleNavigation from "../components/UI/TitleNavigationUI";

function QA() {
  let { qapage } = useSelector((state) => state.TotalRedux);
  return (
    <div className="QA-page">
      <TitleNavigation
        path={"/quest-answer"}
        pathName={"Вопрос-ответ"}
        title={"Вопрос-ответ"}
      />
      <div className="main-qa-page">
        <div className="quest-answers">
          {qapage.map((elem) => {
            return <QAui key={elem.id} elem={elem} />;
          })}
        </div>
        <div className="news-subs-mailing">
          <DiscInfoUi />
          <SubsMainlingUi />
        </div>
      </div>
    </div>
  );
}

export default QA;
