import AuthForm from "./AuthForm";
import AuthInput from "./AuthInput";
import AuthButton from "./AuthButton";
import AuthInputPassword from "./AuthInputPassword";
import { login } from '../../store/actions/userActions';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const LoginForm = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  return(
    <AuthForm>
      <AuthInput
        label="Login"
      />
      <AuthInputPassword
      />
      <AuthButton />
    </AuthForm>
  )
}

export default LoginForm
