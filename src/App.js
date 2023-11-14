

import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Create from './components/Create';
import Read from './components/Read';
import Update from'./components/Update'


function App() {
  return (
    <div className="App">
 
<Header></Header>

<Routes>
  
<Route path='/' element={<Create></Create>}></Route>
  <Route path='/read' element={<Read></Read>}></Route>
  <Route exact path="/edit/:id" element={<Update></Update>} />
</Routes>
    </div>
  );
}

export default App;
