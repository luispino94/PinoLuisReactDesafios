import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import NavBar from './componentes/NavBars/NavBar';
import ItemListDetail from './componentes/ItemListContainer/ItemListDetail';
import CartContexProvider from './componentes/Contexto/cartContext';
import Cart from './componentes/cart/Cart';
import './index.scss'
import LogIn from './componentes/login/LogIn';

/* Paginas: 
  cs-go
  https://sketchfab.com/csgoitems.pro PAGINA PARA SACAR LAS SKINS DE 3D
  documentacion: 
  https://www.pluralsight.com/guides/return-html-elements-in-json  */

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
          <Route path='/*' element = {<Navigate to = '/' replace /> } />
          <Route path = '/login' element = {<LogIn/>}/>
        </Routes>
    </div>
    </CartContexProvider>  
  </BrowserRouter>
  );
}

export default App;
