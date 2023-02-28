import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';

function App() {
  return (
    <div className="">
      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
