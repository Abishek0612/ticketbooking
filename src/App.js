import './App.css';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Booking from './components/Booking';
import CheckOut from './components/Checkout';
import { useEffect, useState } from 'react';


function App() {
 
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  return (
    <div  className={theme === "light" ? "light-theme" : "dark-theme"}>
    <BrowserRouter>
    <Header onClick={toggleTheme} />
       <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/booking' element={<Booking />} />
        <Route exact path='/booking' element={<Booking />} />
        <Route exact path='/booking' element={<CheckOut />} />
       </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
