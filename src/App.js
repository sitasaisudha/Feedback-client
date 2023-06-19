
import './App.css';
import { Route , Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Home from './pages/Home';
import Navbar from './components/home_comps/Navbar';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path='/' element={<Home/>} /> */}
        <Route path='/sign-in' element={  <LoginPage/>} />
        <Route path='/sign-up' element={  <RegisterPage/>} />
        <Route path='/' element = {<Home/>} />
      </Routes>
    
    </div>
  );
}

export default App;
