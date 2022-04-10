import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import LogIn from './components/LogIn/LogIn';
import Register from './components/Register/Register';
import Orders from './components/Orders/Orders';
import RequiredAuth from './components/RequiredAuth/RequiredAuth';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/home' element={<Home></Home>} ></Route>
        <Route path='login' element={<LogIn></LogIn>}></Route>
        <Route path='register' element={<Register></Register>}></Route>
        <Route path='orders' element={
          <RequiredAuth>
            <Orders></Orders>
          </RequiredAuth>}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
