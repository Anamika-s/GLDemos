import logo from './logo.svg';
import './App.css';
 import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Home from './Home';
import Layout from './Layout';
import Post  from './Post';
import PostLayout from './PostLayout';
import PostDetails from './PostDetails';
import {BrowserRouter , Route, Routes, Navigate} from "react-router-dom";
import Dashboard from './Dashboard';
import Login from './Login';
import Logout from './Logout';
import ProductsList from './Products';
import { isCompositeComponent } from 'react-dom/test-utils';
function App() {
  let isLoggedIn = true;
  let data={
    'msg' :"User has not logged in"
  }
  return ( 
    <> 
      <BrowserRouter>
         <Routes>
          <Route path="/" element={<Layout/>}>
              <Route path="about" element={<AboutUs/>}> </Route>
              <Route path="contact" element={<ContactUs/>}> </Route>
              <Route index element={<Home/>}></Route>
              <Route path="post" element={<PostLayout/>}>
                <Route path=":category" element={<PostDetails/>}> </Route>
                <Route index element={<ProductsList/>}> </Route>
            </Route>
            </Route>
         </Routes>
         
      </BrowserRouter>
    </>

  )
}

export default App;
