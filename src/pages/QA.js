import React from "react";
import TitleNavigation from "../components/UI/TitleNavigationUI";
import { useDispatch, useSelector } from "react-redux";
import { answerOpen } from "../redux/action/QA.Action";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import DiscInfoUi from "../components/UI/DiscInfoUi";

function QA() {
  let { qadata } = useSelector((state) => state.QARedux);
  let dispatch = useDispatch();
  return (
    <div className="QA-page">
      <TitleNavigation
        path={"/quest-answer"}
        pathName={"Вопрос-ответ"}
        title={"Вопрос-ответ"}
      />
      <div className="main-qa-page">
        <div className="quest-answers">
          {qadata.map((elem) => {
            return (
              <div className="qa-card" key={elem.id}>
                <div className="qa-quest-btn">
                  <div className="qa-card-quest">{elem.quest}</div>

                  <button onClick={() => dispatch(answerOpen(elem))}>
                    {elem.bool ? <AiOutlineMinus /> : <AiOutlinePlus />}
                  </button>
                </div>
                <div
                  className={
                    elem.bool ? "open-card-answer" : "close-card-answer"
                  }
                >
                  <p style={{ minHeight: 0 }}>{elem.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="news-subs-mailing">
          <DiscInfoUi />
        </div>
      </div>
    </div>
  );
}

export default QA;
