import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Homepage from "./Homepage";
import Footer from "../components/Footer";
import NotFound from "./NotFound";

function Pages() {
  return (
    <Routes>
      <Route element={<Navbar />}>
        <Route element={<Footer />}>
          <Route path="/" element={<Homepage />} />
      <Route path="*" element={<NotFound />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default Pages;
