import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Text } from "../../components/Text";
import { TextVariants } from "../../constants/VariantsOfComponents";

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="login">
      <div>
        <div className="login-input">
          <Text variant={TextVariants.h5}>Username</Text>
          <Input />
        </div>
        <div className="login-input">
          <Text variant={TextVariants.h5}>Password</Text>
          <Input type="password" />
        </div>
        <Button text="Login" width="full" onClick={() => navigate("/users")} />
      </div>
    </div>
  );
};

export default Login;
