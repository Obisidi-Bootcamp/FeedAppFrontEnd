import React, { useState, useEffect, useContext } from "react";
import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import { Layout } from "antd";
import Header from "../components/header/Header.js";
import Login from "../user/login/Login";
import Signup from "../user/signup/Signup";
import Profile from "../user/profile/Profile";
import Home from "../user/home/Home";
import MyFeeds from "../user/myFeeds/MyFeeds";
import LoadingIndicator from "../components/loadingIndicator/LoadingIndicator";
import { AppContext } from "../context/applicationContext";

const { Content } = Layout;

const App = () => {
  const appContext = useContext(AppContext);
  const userData = appContext.getSession();

  const [currentUser, setCurrentUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    if (userData) {
      setCurrentUser(userData);
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, [userData]);

  if (isAuthenticated === null) return <LoadingIndicator fullPage />;

  if (isAuthenticated === false) {
    return (
      <Layout className="layout">
        <Content className="app-content">
          <div className="container">
            <Routes>
              <Route path="*" element={<Navigate to="/login" replace />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/signup" element={<Signup />} />
            </Routes>
          </div>
        </Content>
      </Layout>
    );
  } else {
    return (
      <Layout className="layout">
        <Content className="app-content">
          <div className="container">
            <Routes>
              <Route path="*" element={<Navigate to="/" replace />} />
              <Route
                exact
                path="/profile"
                element={
                  <Header>
                    <Profile currentUser={currentUser} />
                  </Header>
                }
              />

              <Route
                exact
                path="/"
                element={
                  <Header>
                    <Home currentUser={currentUser} />
                  </Header>
                }
              />

              <Route
                exact
                path="/myFeeds"
                element={
                  <Header>
                    <MyFeeds currentUser={currentUser} />
                  </Header>
                }
              />
            </Routes>
          </div>
        </Content>
      </Layout>
    );
  }
};

export default App;