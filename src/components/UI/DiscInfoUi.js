import React from "react";
import { useSelector } from "react-redux";

function DiscInfoUi() {
  let { discInfo } = useSelector((state) => state.TotalRedux);
  return (
    <div className="disc-info-cards">
      {discInfo.map((item) => {
        return (
          <div className="disc-info-card" key={item.id}>
            <img src={item.img} alt="bg" />
            <div className="disc-text-ui">
              <span>{item.title}</span>
              <span>до -{item.disc}%</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default DiscInfoUi;
