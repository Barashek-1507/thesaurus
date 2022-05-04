import AuthForm from "./AuthForm";
import AuthInput from "./AuthInput";
import AuthButton from "./AuthButton";
import AuthInputPassword from "./AuthInputPassword";

const RegistrationForm = () => {
    return (
        <AuthForm>
            <AuthInput label="Username"/>
            <AuthInput label="Name"/>
            <AuthInput label="Lastname"/>
            <AuthInputPassword/>
            <AuthButton/>
        </AuthForm>
    )
}

export default RegistrationForm