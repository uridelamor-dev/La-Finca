import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Place from "./pages/Place";
import Garden from "./pages/Garden";
import Festival from "./pages/Festival";
import Agenda from "./pages/Agenda";
import EventDetail from "./pages/EventDetail";
import Premium from "./pages/Premium";
import Gallery from "./pages/Gallery";
import Partners from "./pages/Partners";
import Contact from "./pages/Contact";
import StyleGuide from "./pages/StyleGuide";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/place" element={<Place />} />
        <Route path="/garden" element={<Garden />} />
        <Route path="/festival" element={<Festival />} />
        <Route path="/agenda" element={<Agenda />} />
        <Route path="/agenda/:eventId" element={<EventDetail />} />
        <Route path="/premium" element={<Premium />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/style-guide" element={<StyleGuide />} />
      </Route>
    </Routes>
  );
};

export default App;
