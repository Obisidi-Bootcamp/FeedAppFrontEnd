import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import { Row, Col } from "antd";

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
              <span>Feed App</span>
            </div>
          </Col>
          <Col pan={24}></Col>
        </Row>
      </div>
    </React.Fragment>
  );
};

export default Login;