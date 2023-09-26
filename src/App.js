import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Signup from './pages/signup/SignUp'
import Profile from './pages/profile/Profile'
import UpdateNote from './pages/updatenote/Updatenote'
import NoPage from './pages/nopage/NoPage'
import MyState from './context/data/myState';
import AddNote from './pages/addnote/AddNote';

function App() {
  return (
    <MyState>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/addnote' element={<AddNote />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/updatenote/:id' element={<UpdateNote />} />
          <Route path='/nopage' element={<NoPage />} />
        </Routes>
      </Router>
    </MyState>
  );
}

export default App;
