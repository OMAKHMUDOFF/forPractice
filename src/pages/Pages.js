import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Homepage from "./Homepage";
import Footer from "../components/Footer";
import NotFound from "./NotFound";
import Favorites from "./Favorites";
import CatalogGoods from "./CatalogGoods";

function Pages() {
  return (
    <Routes>
      <Route element={<Navbar />}>
        <Route element={<Footer />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/catalogGoods" element={<CatalogGoods />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default Pages;
