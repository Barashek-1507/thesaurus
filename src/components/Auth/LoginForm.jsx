import AuthForm from "./AuthForm";
import AuthInput from "./AuthInput";
import AuthButton from "./AuthButton";
import AuthInputPassword from "./AuthInputPassword";

const LoginForm = () => {
    return(
        <AuthForm>
            <AuthInput label="Login" />
            <AuthInputPassword />
            <AuthButton />
        </AuthForm>
    )
}

export default LoginForm