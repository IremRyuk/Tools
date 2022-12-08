import {Routes,Route} from 'react-router-dom'
import Nav from './Components/Nav';
import Home from './Pages/Home';
import Request from './Pages/Request';
import SaveInfo from './Pages/SaveInfo';
function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
<Route path='/' element={<Home />} />
<Route path='/request' element={<Request />} />
<Route path='/todo' element={<SaveInfo />} />
      </Routes>
    </div>
  );
}

export default App;
