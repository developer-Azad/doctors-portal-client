import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home/Home/Home';
import Appointment from './pages/Appointment/Appointment/Appointment';
import Login from './pages/Login/Login/Login';
import Register from './pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';
import DashboardHome from './pages/Dashboard/DashboardHome/DashboardHome';
import Payment from './pages/Dashboard/Payment/Payment';
import MakeAdmin from './pages/Dashboard/MakeAdmin/MakeAdmin';
import AddDoctor from './pages/Dashboard/AddDoctor/AddDoctor';
import AdminRoute from './pages/Login/AdminRoute/AdminRoute';


function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
      <Routes>
          <Route path="/appointment" element={<PrivateRoute> 
            <Appointment /> 
            </PrivateRoute>}>
          </Route>
          <Route path="/dashboard" element={<PrivateRoute> 
            <Dashboard /> 
          </PrivateRoute>}>
          <Route exact path="/dashboard" element={<DashboardHome></DashboardHome>}>
        </Route>
        <Route path={`/dashboard/payment/:appointmentId`} element={<Payment></Payment>}>
        </Route>
        <Route path={`/dashboard/makeAdmin`} element={<AdminRoute>
          <MakeAdmin></MakeAdmin>
          </AdminRoute>}>
        </Route>
        <Route path={`/dashboard/addDoctor`} element={<AdminRoute>
          <AddDoctor></AddDoctor> 
          </AdminRoute>}>
        </Route>
          </Route>
          <Route path="/home" element={ <Home />} >
          </Route>
          <Route exact path="/" element={ <Home />}> 
          </Route>
          <Route path="/login" element={ <Login />}>
          </Route>
          <Route path="/register" element={ <Register />}>
          </Route>
        </Routes>
    </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
