import {
  BrowserRouter,
  Routes,
  Route,
} 
from "react-router-dom";
import Navbar from "../src/components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Home from "./pages/home/Home.jsx";
import List from "./pages/list/List";
import Hotel from './pages/hotel/Hotel';

function App() {
  return (
    <div >
        <BrowserRouter>
        <Navbar />
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hotels" element={<List />} />
            <Route path="/hotels/:id" element={<Hotel />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
