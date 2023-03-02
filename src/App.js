import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Register from './Components/Register';

function App() {
  return (
    <div className="">
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Components/Register.js' element={<Register />}></Route>
      </Routes>
    </div>
  );
}

export default App;
