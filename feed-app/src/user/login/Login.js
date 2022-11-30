import React, { useEffect } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import LoginForm from "../../components/loginForm/LoginForm";

const Login = ({ currentUser, isAuthenticated }) => {
  let navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, []);

  return (
    
    <React.Fragment>
      <div className="login-container">
        <Row type="flex" justify="center">
          <Col pan={24}>
            <div className="logo-container">
              <span id="feed-login">FEED APP</span>
            </div>
          </Col>
        </Row>
        <Row type="flex" justify="center">
          <Col pan={24}>
            <LoginForm />
          </Col>
        </Row>
      </div>
      <div className="signup-link-container">
        Don't have an account? <Link to="/signup">Signup</Link>
      </div>
    </React.Fragment>
   
  );
};

export default Login;