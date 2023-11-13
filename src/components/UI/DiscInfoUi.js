import React from "react";
import { useSelector } from "react-redux";

function DiscInfoUi() {
  let { discInfo } = useSelector((state) => state.HomeRedux);
  return (
    <div>
      {discInfo.slice(0, 2).map((item) => {
        return(
          <div>
            <p>{item.title}</p>
          </div>
        )
      })}
    </div>
  );
}

export default DiscInfoUi;
