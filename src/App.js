import { useState } from 'react';
import './App.css';
import { Route , Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Home from './pages/Home';
import Navbar from './components/home_comps/Navbar';

import { MyContext } from "./MyContext";
import PageNotFound from './PageNotFound';

function App() {
  const [text, setText] = useState(false) //variable to open and close the pop up
  const [isLogIn , setLogin] = useState(false) // variable to store wheather user loggrd in or not
  const [edit , setEdit] = useState(false) // variable to permit edi tfeature to user
  const [Id , setId] = useState(0) // variable to stroe id of the product to be edited
  return (
    <div className="App">
      <MyContext.Provider value={{ text, setText , isLogIn , setLogin, edit, setEdit ,Id,setId}}>
      <Routes>
      
        <Route path='/sign-in' element={  <LoginPage/>} />
        <Route path='/sign-up' element={  <RegisterPage/>} />
        <Route path='/' element = {<Home/>} />
        <Route path='*' element ={<PageNotFound/>} />
      </Routes>
      </MyContext.Provider>
    </div>
  );
}

export default App;
