import { FiChevronRight } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
// import { NavLink } from "react-router-dom";
import { mappedCatalog, mappedTools } from "../redux/action/NavbarAction";
import { NavLink } from "react-router-dom";

function CatalogWindow({ isOpen }) {
  let state = useSelector((state) => state.NavbarRedux);
  let dispatch = useDispatch();
  let { catalogArr, mappedCatal, mappedTool } = state;

  return (
    <div className={isOpen ? "openedCatalogBar" : "closedCatalogBar"}>
      <div className="catalog-win-cards">
        <div className="catalog-win-card">
          <ul>
            {catalogArr.map((elem, i) => {
              return (
                <li onClick={() => dispatch(mappedCatalog(elem))} key={elem.id}>
                  {elem.catalogType} <FiChevronRight />
                </li>
              );
            })}
          </ul>
        </div>
        {mappedCatal.length > 0 ? (
          <div className="mappedCatalog">
            <ul>
              {mappedCatal.map((elem) => {
                return (
                  <li key={elem.id} onClick={() => dispatch(mappedTools(elem))}>
                    <NavLink to={"/catalogGoods"}>
                      {elem.title} <FiChevronRight />
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
        ) : (
          ""
        )}
        {mappedTool.length > 0 ? (
          <div className="mappedTools">
            <ul>
              {mappedTool.slice(0, 13).map((elem, i) => {
                return <li key={i}>{elem}</li>;
              })}
            </ul>
          </div>
        ) : (
          ""
        )}
        {mappedTool.length > 0 ? (
          <div className="mappedTools">
            <ul>
              {mappedTool.slice(13).map((elem, i) => {
                return <li key={i}>{elem}</li>;
              })}
            </ul>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default CatalogWindow;