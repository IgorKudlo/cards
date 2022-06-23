import React from 'react';
import { Navigate, NavLink, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Registration from './pages/Registration';
import RecoveryPassword from './pages/RecoveryPassword';
import SetNewPassword from './pages/SetNewPassword';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className='App'>
      <h1>Cards</h1>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Registration />} />
        <Route path='profile' element={<Profile />} />
        <Route path='recovery-password' element={<RecoveryPassword />} />
        <Route path='set-new-password' element={<SetNewPassword />} />
        <Route path='*' element={<Navigate to='404' replace />} />
        <Route path='/404' element={<NotFound />} />
      </Routes>

      <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/login'>Login</NavLink>
        <NavLink to='/register'>Register</NavLink>
        <NavLink to='/profile'>Profile</NavLink>
        <NavLink to='/recovery-password'>Recovery Password</NavLink>
        <NavLink to='/set-new-password'>Set New Password</NavLink>
      </nav>
    </div>
  );
}

export default App;
