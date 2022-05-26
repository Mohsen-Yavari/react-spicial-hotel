import {
  BrowserRouter,
  Routes,
  Route,
} 
from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import List from "./pages/list/List";
import Hotel from './pages/hotel/Hotel';
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div >
        <BrowserRouter>
        
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hotels" element={<List />} />
            <Route path="/hotelsroom" element={<Hotel />} />
          </Routes>
          <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
