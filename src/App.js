import logo from './logo.svg';
import './App.css';
import Navbar from './components/header/Navbar';
import NewNavbar from './components/newNavbar/NewNavbar';
import Index from './components/Home/Index';
import Footer from './components/footer/Footer';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from './components/Home/Index'
import Signup from './components/signup_signIn/Signup';
import SignIn from './components/signup_signIn/SignIn';
import Cart from './components/cart/Cart';
import Product from './components/singleProduct/Product';
import { Provider } from 'react-redux';
import { store } from './store';
function App() {
  return (
      
      
        <BrowserRouter>
      <Navbar/>
      <NewNavbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/sign-in" element={<SignIn/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/product/:id" element={<Product/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
  );
}

export default App;
