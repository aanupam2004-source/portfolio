
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './Components/Signup';
import { Route, Routes } from 'react-router-dom';

// import Home from './Components/Home';
import Portfolio from './Components/Portfolio';

function App() {
  return (
    <>
    
  <Routes>
    {/* <Route path="/" element={<Home/>}/> */}
    <Route path="/signup" element={<Signup/>}/>
     <Route path="/" element={<Portfolio/>}/>
  </Routes>
  </>
  );
}

export default App;