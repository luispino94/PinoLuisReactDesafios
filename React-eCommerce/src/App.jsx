import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import NavBar from './componentes/NavBars/NavBar';
import ItemListDetail from './componentes/ItemListContainer/ItemListDetail';
import CartWidget from './componentes/CartWidget/CartWidget';


/* Paginas: 
  cs-go
  https://sketchfab.com/csgoitems.pro PAGINA PARA SACAR LAS SKINS DE 3D
  documentacion: 
  https://www.pluralsight.com/guides/return-html-elements-in-json  */

function App() {

  return (
  <BrowserRouter> 
    <div className="App">
      <NavBar/>
        <Routes>
          <Route path='/' element = { <ItemListContainer/> } />
          <Route path='/categoria/:id' element = { <ItemListContainer/>}/>
          <Route path='/detalle/:detalleId' element = { <ItemListDetail/>}/>
          <Route path='/cart' element = { <CartWidget/>}/>
          <Route path='/*' element = {<Navigate to = '/' replace /> } />
        </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
