import './App.css';
import "./components/header/navbar.css";
import Navbar from './components/header/Navbar';
import Newnav from './components/newnavbar/Newnav';
import Maincomp from './components/home/Maincomp';
import Footer from './components/header/footer/Footer';
import Sign_in from './components/signup_signin/Sign_in';
import Sign_up from './components/signup_signin/Sign_up';
import {Routes,Route} from 'react-router-dom';
import Cart from './components/cart/Cart';
import Buynow from './components/Buying/Buynow';
import Viewall_main from './components/home/Viewall_main';
import Dev from './components/dev/Dev';
import Shop_all from './components/shop_all/Shop_all';
import AddProduct from './components/home/Addpro';
import ContactForm from './components/contactus/contactus';
import AboutUsPage from './components/About/about';
import YourComponent from './components/About/fetch';
function App() {

  return (
<div>
  <Navbar/>
  <Newnav/>
  <Routes>
    <Route path="/add"element={<AddProduct/>}/>
    <Route path="/"element={<Maincomp/>}/>
    <Route path="/login"element={<Sign_in/>}/>
    <Route path="/register"element={<Sign_up/>}/>
    <Route path='/getproductone' element={<Cart/>}/>
    <Route path='/buynow' element={<Buynow/>}/>
    <Route path='/view' element={<Viewall_main/>}/>
    <Route path='/notime' element={<Dev/>}/>
    <Route path='/shop' element={<Shop_all/>}/>
    <Route path='/contact' element={<ContactForm/>}/>
    <Route path='/about' element={<AboutUsPage/>}/>
    {/* <Route path='/fetch' element={<YourComponent/>}> */}
    
    </Routes>
  <Footer/>
</div>
  )
}

export default App;
