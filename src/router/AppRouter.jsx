import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/auth/login/Login';
import Register from '../pages/auth/register/Register';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
