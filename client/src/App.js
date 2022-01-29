import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import { Navbar } from "./Components/Navbar/navbar.component";
import { Sidebar } from "./Components/Sidebar/sidebar.component";
import { EditPassword } from "./Pages/Passwords/editPassword";
import { Passwords } from "./Pages/Passwords/passwords";
import { SignIn } from "./Pages/SignIn/signin";
import { PasswordGenerator } from "./Pages/PasswordGenerator/PasswordGenerator";
import { SecureNotes } from "./Pages/SecureNotes/SecureNotes";
import { Dashboard } from "./Pages/Dashboard/Dashboard";

function Pages() {
  return (
    <div className="d-flex" style={{ height: "100vh" }}>
      <Sidebar />
      <div className="main-content flex-fill">
        <Navbar />
        <div>
          <div className="container">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/" element={<Pages />}>
            <Route path="passwords" element={<Passwords />} />
            <Route path="editPassword" element={<EditPassword />} />
            <Route path="password-generator" element={<PasswordGenerator />} />
            <Route path="secureNotes" element={<SecureNotes />} />
            <Route path="" element={<Dashboard />} />
          </Route>
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
