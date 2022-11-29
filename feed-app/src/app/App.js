import React, { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Layout } from "antd";
//import { Carousel } from "antd";
import Login from "../user/login/Login";
import Signup from "../user/signup/Signup";

const { Content } = Layout;

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  return (
   
    <Layout className="layout">
      <Content className="app-content">
        <div className="container">
          <Routes>
            <Route
              path="/login"
              element={
                <Login
                  currentUser={currentUser}
                  isAuthenticated={isAuthenticated}
                />
              }
            />
            <Route
              exact
              path="/signup"
              element={
                <Signup
                  currentUser={currentUser}
                  isAuthenticated={isAuthenticated}
                />
              }
            />
          </Routes>
        </div>
      </Content>
    </Layout>
   

  );
};

export default App;
