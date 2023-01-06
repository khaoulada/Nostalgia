import logo from './logo.svg';
import './App.css';
import { BrowserRouter , Route , Routes } from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import BookingStadium from './pages/BookingStadium';
import 'antd/dist/antd'
import UserBookings from './pages/UserBookings';
import AddStad from './pages/AddStad';
import AdminHome from './pages/AdminHome';
import EditStad from './pages/EditStad';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/login' element={<Login/>} />
          <Route exact path='/register' element={<Register/>} />
          <Route exact path='/bookingstadium' element={<BookingStadium/>} />
          <Route exact path='/userbookings' element={<UserBookings/>} />
          <Route exact path='/addstad' element={<AddStad/>} />
          <Route exact path='/editstad' element={<EditStad/>} />
          <Route exact path='/admin' element={<AdminHome/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


