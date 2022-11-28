import React, { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Layout } from "antd";
import Login from "../user/login/Login";

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
          </Routes>
        </div>
      </Content>
    </Layout>
  );
};

export default App;