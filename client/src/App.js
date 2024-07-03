import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";
// import Home from "./Pages/Home/Home";
import Header from "./Pages/Header/Header";
import LoginPage from "./Pages/SignIn/SignIn";
import RegisterPage from "./Pages/SignUp/SignUp";
import AdminRoute from "./Components/AdminRoute/AdminRoute";
import UserListPage from "./Pages/UserListPage/UserListPage";
import UserEditPage from "./Pages/UserEditPage/UserEditPage";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import ProfilePage from './Pages/ProfilePage/ProfilePage'


// Set the base URL for all axios requests
axios.defaults.baseURL =
  process.env.REACT_APP_API_PROXY || "http://localhost:5000";

function App() {
  return (
    <Router>

      <Header />
      <Routes>
      <Route
          path="/profile"
          element={
            <>
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            </>
          }
        />
       
        <Route
          path="/signin"
          element={
            <>
              <LoginPage />
            </>
          }
        />
        <Route
          path="/signup"
          element={
            <>
              <RegisterPage />
              {/* <Footer /> */}
            </>
          }
        />
        
        <Route
          path="/admin/users"
          element={
            <>
              <AdminRoute>
                <UserListPage />
              </AdminRoute>
            </>
          }
        />

        <Route
          path="/admin/user/:id"
          element={
            <>
              <AdminRoute>
                <UserEditPage />
              </AdminRoute>
            </>
          }
        />

        

      </Routes>
    </Router>
  );
}

export default App;
