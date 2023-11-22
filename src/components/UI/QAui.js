import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { answerOpen } from "../../redux/action/TotalAction";

function QAui({ elem }) {
  let dispatch = useDispatch();
  return (
    <div className="qa-card">
      <div className="qa-quest-btn">
        <div className="qa-card-quest">{elem.quest}</div>
        <button onClick={() => dispatch(answerOpen(elem))}>
          {elem.bool ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </div>
      <div className={elem.bool ? "open-card-answer" : "close-card-answer"}>
        <p style={{ minHeight: 0 }}>{elem.answer}</p>
      </div>
    </div>
  );
}

export default QAui;
