import "../src/styles/reset.css"
import "../src/styles/style.css"

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"
import Home from "./pages/Home";
import Trips from "./pages/Trips";
import Contacts from "./pages/Contacts";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>

          <Route path="/" element={<Home/>} />
          <Route path="/trips" element={<Trips/>} />
          <Route path="/contacts" element={<Contacts/>} />

        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
