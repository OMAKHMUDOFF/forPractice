import { FiChevronRight } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
// import { NavLink } from "react-router-dom";
import { mappedCatalog, mappedTools } from "../redux/action/NavbarAction";

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
                    {elem.title} <FiChevronRight />
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

/* <li>
              <NavLink to={"/"}>
                Водо-газоснабжение, отопление, вентиляция <FiChevronRight />
              </NavLink>
            </li>
            <li>
              <NavLink to={"/"}>
                Общестроительные материалы <FiChevronRight />
              </NavLink>
            </li>
            <li>
              <NavLink to={"/"}>
                Всё для сауны и бани <FiChevronRight />
              </NavLink>
            </li>
            <li>
              <NavLink to={"/"}>
                Инструмент <FiChevronRight />
              </NavLink>
            </li>
            <li>
              <NavLink to={"/"}>
                Отделочные материалы <FiChevronRight />
              </NavLink>
            </li>
            <li>
              <NavLink to={"/"}>
                Сантехника <FiChevronRight />
              </NavLink>
            </li>
            <li>
              <NavLink to={"/"}>
                Метизные, такелажные и скобяные изделия <FiChevronRight />
              </NavLink>
            </li>
            <li>
              <NavLink to={"/"}>
                Спецодежда и средства индивидуальной и пожарной защиты
                <FiChevronRight />
              </NavLink>
            </li>
            <li>
              <NavLink to={"/"}>
                Столярные изделия <FiChevronRight />
              </NavLink>
            </li>
            <li>
              <NavLink to={"/"}>
                Товары для дома, сада и огорода <FiChevronRight />
              </NavLink>
            </li>
            <li>
              <NavLink to={"/"}>
                Электротовары <FiChevronRight />
              </NavLink>
            </li> */
