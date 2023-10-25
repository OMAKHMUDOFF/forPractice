import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Homepage from "./Homepage";

function Pages() {
  return (
    <Routes>
      <Route element={<Navbar />}>
        <Route path="/" element={<Homepage />} />
      </Route>
    </Routes>
  );
}

export default Pages;
