import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import NavBar from './componentes/NavBars/NavBar';
import ItemListDetail from './componentes/ItemListContainer/ItemListDetail';


function App() {

  return (
  <BrowserRouter> 
    <div className="App">
      <NavBar/>
        <Routes>
        <Route path='/' element = { <ItemListContainer/> } />
          <Route path='/categoria/:id' element = { <ItemListContainer/>}/>
          <Route path='/detalle/:detalleId' element = { <ItemListDetail/>}/>
          <Route path='/*' element = {<Navigate to = '/' replace /> } />
        </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
