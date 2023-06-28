import "./App.css";
import { Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Nav from "./components/Nav";
import "@fontsource/markazi-text";
import "@fontsource/karla";
import BookingPage from "./components/Booking/BookingPage";
function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/reservations" element={<BookingPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
