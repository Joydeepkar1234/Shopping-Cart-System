
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import CartPage from './Components/Cart';
import Header from './Components/Header';
import Home from './Components/Home';


function App() {

  return (
    <div className='App'>
    <BrowserRouter>
      <Header/>
      
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cart" element={<CartPage/>} />
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

