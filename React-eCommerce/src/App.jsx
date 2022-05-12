import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import Item from './componentes/Items/Item';

import NavBar from './componentes/NavBars/NavBar';


function App() {

  return (
    <div className="App">
      <NavBar/>
      {/* <ItemListContainer greeting={'Tienda'}/> */}
     <Item/>
    </div>
  );
}

export default App;
