import LoginForm from "../components/Auth/LoginForm";
import styles from '../styles/authForm.module.css';
import MainLayout from "./MainLayout";
const LoginPage = () => (
    <MainLayout centered>
        <LoginForm />
    </MainLayout>
)
 export default LoginPage