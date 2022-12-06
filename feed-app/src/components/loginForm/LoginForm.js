import React, { useContext } from "react";
import { Form, Input, Button } from "antd";
import toast from "react-hot-toast";

import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./loginform.css";
import { loginApi } from "../../util/ApiUtil";
import { signInWithGoogle } from "../../firebase/firebase";
import { AppContext } from "../../context/applicationContext";

const FormItem = Form.Item;

const LoginForm = () => {
  const appContext = useContext(AppContext);

  const onFinish = async (values) => {
    const apiResponse = await loginApi(values.username, values.password);

    if (apiResponse) {
      const tokenData = {
        token: apiResponse.jwtResponse.token,
        username: apiResponse.userID.username,
        name: apiResponse.userID.name,
      };
      appContext.setSession(tokenData);
      toast("Login successful.");
    } else {
      toast("Invalid username or password.");
    }
  };

  // const signIn = () => {
  //   auth.signInWithPopup(provider).catch((error) => alert(error.message));
  // };


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
        />
      </FormItem>
      <FormItem>
        <Button
          type="primary"
          htmlType="submit"
          size="large"
          className="login-form-button bg-indigo-600"
        >
          Login
        </Button>
      </FormItem>
      <FormItem>
        <Button
          type="primary"
          htmlType="submit"
          size="large"
          className="login-form-button bg-indigo-600"
          onClick={signInWithGoogle}
        >
          Login Google Auth
        </Button>
      </FormItem>
    </Form>
  );
};

export default LoginForm;

// import React from "react";
// import { Form, Input, Button } from "antd";
// import { UserOutlined, LockOutlined } from "@ant-design/icons";
// import "./loginform.css";

// const FormItem = Form.Item;

// const LoginForm = () => {
//   const onFinish = (values) => {
//     console.log(values);
//     // Code to link with login api
//   };

//   return (
//     <Form onFinish={onFinish} className="login-form">
//       <FormItem
//         name="username"
//         rules={[
//           {
//             required: true,
//             message: "Please input your username!",
//           },
//         ]}
//       >
//         <Input
//           prefix={<UserOutlined />}
//           size="large"
//           name="username"
//           placeholder="Username"
//           className="input-login"
//         />
//       </FormItem>
//       <FormItem
//         name="password"
//         rules={[
//           {
//             required: true,
//             message: "Please input your password!",
//           },
//         ]}
//       >
//         <Input
//           prefix={<LockOutlined />}
//           size="large"
//           name="password"
//           type="password"
//           placeholder="Password"
//           className="input-login"
//         />
//       </FormItem>
//       <FormItem>
//         <Button
//           type="primary"
//           htmlType="submit"
//           size="large"
//           className="login-form-button"
//           id="button-id"
//         >
//           Login
//         </Button>
//       </FormItem>
//     </Form>
//   );
// };

// export default LoginForm;