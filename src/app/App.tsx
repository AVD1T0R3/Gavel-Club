import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Meetings } from "./components/Meetings";
import { Blogs } from "./components/Blogs";
import { Cabinets } from "./components/Cabinets";
import { Constitution } from "./components/Constitution";
import { Roles } from "./components/Roles";
import { Contact } from "./components/Contact";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col">
        <Navigation />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/meetings" element={<Meetings />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/cabinets" element={<Cabinets />} />
            <Route path="/constitution" element={<Constitution />} />
            <Route path="/roles" element={<Roles />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
