import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import NavBar from './componentes/NavBars/NavBar';
import ItemListDetail from './componentes/ItemListContainer/ItemListDetail';
import CartContexProvider from './componentes/Contexto/cartContext';
import Cart from './componentes/cart/Cart';
import LogIn from './componentes/login/LogIn';
import Home from './componentes/Users/Home';

import './index.scss'



function App() {
  return (
  <BrowserRouter> 
    <CartContexProvider>
    <div className="App">
      <NavBar/>
        <Routes>
          <Route path='/' element = { <ItemListContainer/> } />
          <Route path='/categoria/:id' element = { <ItemListContainer/>}/>
          <Route path='/detalle/:detalleId' element = { <ItemListDetail/>}/>
          <Route path='/cart' element = { <Cart/>}/>
          <Route path = '/login' element = {<LogIn/>}/>
          <Route path = '/home' element = {<Home/>}/>
          <Route path='/*' element = {<Navigate to = '/' replace /> } />
        </Routes>
    </div>
    </CartContexProvider>  
  </BrowserRouter>
  );
}

export default App;
