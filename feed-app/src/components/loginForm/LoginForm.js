import React from "react";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./loginform.css";

const FormItem = Form.Item;

const LoginForm = () => {
  const onFinish = (values) => {
    console.log(values);
    // Code to link with login api
  };

  return (
    <Form onFinish={onFinish} className="login-form">
      <FormItem
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input
          prefix={<UserOutlined />}
          size="large"
          name="username"
          placeholder="Username"
          className="input-login"
        />
      </FormItem>
      <FormItem
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input
          prefix={<LockOutlined />}
          size="large"
          name="password"
          type="password"
          placeholder="Password"
          className="input-login"
        />
      </FormItem>
      <FormItem>
        <Button
          type="primary"
          htmlType="submit"
          size="large"
          className="login-form-button"
          id="button-id"
        >
          Login
        </Button>
      </FormItem>
    </Form>
  );
};

export default LoginForm;