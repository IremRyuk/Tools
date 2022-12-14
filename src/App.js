import {Routes,Route} from 'react-router-dom'
import Nav from './Components/Nav';
import Home from './Pages/Home';
import News from './Pages/News';
import Report from './Pages/Report';
import Request from './Pages/Request';
import SaveInfo from './Pages/SaveInfo';
import Tools from './Pages/Tools';
function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
<Route path='/' element={<Home />} />
<Route path='/request' element={<Request />} />
<Route path='/todo' element={<SaveInfo />} />
<Route path='/tools' element={<Tools />} />
<Route path='/report' element={<Report />} />
<Route path='/news' element={<News />} />
      </Routes>
    </div>
  );
}

export default App;
