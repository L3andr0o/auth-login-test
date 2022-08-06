import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import AuthProvider from './Context/AuthContext';
import ProtectedRoute from './Components/ProtectedRoute';

function App() {
  return (
    <div className='bg-slate-300 h-screen text-black flex'>
      <AuthProvider>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
