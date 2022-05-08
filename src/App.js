
import './App.css';
import Home from './PagesOfWebsite/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Login from './PagesOfWebsite/Login/Login';
import InventoryItem from './PagesOfWebsite/Home/InventoryItem/InventoryItem';
import Blogs from './PagesOfWebsite/Blogs/Blogs';
import Footer from './PagesOfWebsite/Home/Footer/Footer';
import Header from './PagesOfWebsite/Home/Header/Header';
import NotFound from './PagesOfWebsite/NotFound/NotFound';
import Register from './PagesOfWebsite/Register/Register';
import Contact from './PagesOfWebsite/Contact/Contact';
import Quality from './PagesOfWebsite/Quality/Quality';
import RequiredAuth from './PagesOfWebsite/RequiredAuth/RequiredAuth';
import ItemDetail from './PagesOfWebsite/ItemDetail/ItemDetail';
import ManageInventory from './PagesOfWebsite/ManageInventory/ManageInventory';


function App() {
  return (
    <div className="App">
    <Header></Header>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/blogs' element={<Blogs></Blogs>}></Route>
      <Route path='/contact'element={<Contact></Contact>}></Route>
      <Route path='/quality'element={<Quality></Quality>}></Route>
      <Route path='/manageInventory'element={<ManageInventory></ManageInventory>}></Route>
      
       
      <Route path='/inventory/:id' element={<RequiredAuth><ItemDetail></ItemDetail></RequiredAuth>}  ></Route>
      <Route path='/inventoryItem' element={<InventoryItem></InventoryItem>}  ></Route>
      <Route path='/register' element={<Register></Register>}></Route>

      <Route path='*' element={<NotFound></NotFound>}  ></Route>
    </Routes>
    <Footer></Footer>
    
    </div>
  );
}

export default App;
