import React, { useState } from "react";

import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Layout } from "antd";
import { Carousel } from "antd";
import Login from "../user/login/Login";
import Signup from "../user/signup/Signup";
import { Link } from "react-router-dom";
// import { Container } from "react-bootstrap";
import Navbar from "../navbar/Navbar";

const { Content } = Layout;

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  return (
    <>
      <Layout className="layout">
        <Content className="app-content">
          <Navbar />
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
          <div>
            <div className="slides">
              <div
                style={{
                  maxWidth: 1000,
                  marginLeft: "auto",
                  marginRight: "auto",
                  marginTop: 64,
                }}
              >
                <Carousel autoplay>
                  <img
                    src="https://media.istockphoto.com/id/513550806/photo/teenager-hipster-friends-partying-by-blowing-colorful-confetti-from-hands.jpg?s=612x612&w=0&k=20&c=BG0BHvW98AiLFyhiNy3NzlPZlGTUwHS-I8iYVvWmR78="
                    alt="placeholder"
                  />

                  <img
                    src="https://cdn.pixabay.com/photo/2017/07/31/11/21/people-2557396_960_720.jpg"
                    alt="placeholder"
                  />
                  <img
                    src="https://media.istockphoto.com/id/1213252024/photo/portrait-of-attractive-young-african-american-girl-using-mobile-phone.jpg?s=612x612&w=0&k=20&c=L0utFD9flbUa8uLgigMLWIxloWESZnsAbV8K4KYgJho="
                    alt="placeholder"
                  />
                  <img
                    src="https://media.istockphoto.com/id/1092715214/photo/two-glad-positive-grinning-lady-stand-in-glasses-spectacles-street-style-stylish-trendy-cool.jpg?s=612x612&w=0&k=20&c=ypVq4SYum8SDK8S8or7jq6svxaKMSW4eSh4l1dlnmSU="
                    alt="placeholder"
                  />
                  <img
                    src="https://media.istockphoto.com/id/1326076407/photo/family-walking-along-track-in-autumn-countryside-with-children-running-ahead.jpg?s=612x612&w=0&k=20&c=lF1RrVGUa13ujRQVAt-RMFHrXyiAvh9SIG2yE1FMQfA="
                    alt="placeholder"
                  />
                  <img
                    src="https://media.istockphoto.com/id/1225782571/photo/happy-millennial-hispanic-teen-girl-checking-social-media-holding-smartphone-at-home-smiling.jpg?s=612x612&w=0&k=20&c=FvE-meOQyH2KrK0_M2FTi_OGbEGRvCqPAQRSke64_28="
                    alt="placeholder"
                  />
                </Carousel>
              </div>
            </div>
          </div>
          <div>
            {/* <nav>
              <ul>
                <li>
                  <Link to="/signup">Signup</Link>
                </li>
                <li>
                  <Link to="/signup">Signup</Link>
                </li>
              </ul>
            </nav> */}
          </div>
        </Content>
      </Layout>
    </>
  );
};

export default App;
