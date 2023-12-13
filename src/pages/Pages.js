import { Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import AboutCompany from "./AboutCompany";
import CatalogGoods from "./CatalogGoods";
import Contacts from "./Contacts";
import Favorites from "./Favorites";
import GoodsCart from "./GoodsCart";
import Homepage from "./Homepage";
import News from "./News";
import NotFound from "./NotFound";
import QA from "./QA";
import Refund from "./Refund";
import SingleProduct from "./SingleProduct";

function Pages() {
  return (
    <Routes>
      <Route element={<Navbar />}>
        <Route element={<Footer />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/catalogGoods" element={<CatalogGoods />} />
          <Route path="/about-company" element={<AboutCompany />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/news" element={<News />} />
          <Route path="/quest-answer" element={<QA />} />
          <Route path="/refund" element={<Refund />} />
          <Route path="/cart" element={<GoodsCart />} />
          <Route path="/catalogGoods/:id/:art" element={<SingleProduct />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default Pages;
