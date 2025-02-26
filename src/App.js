import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './Pages/Home';
import Header from './Components/Header';
import {createContext, useState, useEffect} from "react";
import axios from "axios";
import Footer from './Components/Footer';
import ProductModel from './Components/ProductModel';
import Listing from './Pages/Listing';
import ProductDetails from './Pages/ProductDetails';
import Cart from './Pages/Cart';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';


const MyContext=createContext();
function App() {
  const [countryList, setCountryList]=useState([]);
  const [selectedCountry, setSelectedCountry]=useState('');
  const [isOpenProductModel, setIsOpenProductModel]=useState(false);
  const [isHeaderFooterShow, setIsHeaderFooterShow]=useState(true);
  const [isLogin, setIsLogin]=useState(false);

  useEffect(()=>{
    getCountry("https://countriesnow.space/api/v0.1/countries/");
  },[]);

  const getCountry=async(url)=>{
    await axios.get(url).then((res)=>{
      setCountryList(res.data.data);
    })
  }
  const values={
    countryList, 
    setSelectedCountry,
    selectedCountry,
    isOpenProductModel,
    setIsOpenProductModel,
    isHeaderFooterShow,
    setIsHeaderFooterShow,
    isLogin,
    setIsLogin
  }
  return (
    <>
    <BrowserRouter>
    <MyContext.Provider value={values}>
      {
        isHeaderFooterShow===true && <Header/>
      }
    <Routes>
      <Route path="/" exact={true} element={<Home/>}/>
      <Route path="/cat/:id" exact={true} element={<Listing/>}/>
      <Route exact={true} path="/product/:id" element={<ProductDetails/>}/>
      <Route exact={true} path="/cart" element={<Cart/>}/>
      <Route exact={true} path="/signIn" element={<SignIn/>}/>
      <Route exact={true} path="/signUp" element={<SignUp/>}/>
    </Routes>
      {
        isHeaderFooterShow===true && <Footer/>
      }
    {
     isOpenProductModel===true && <ProductModel/>
    }
    </MyContext.Provider>
    </BrowserRouter>
    </>
  );
}

export default App;
export {MyContext};