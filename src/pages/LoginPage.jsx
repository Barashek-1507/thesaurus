import LoginForm from "../components/Auth/LoginForm";
import styles from '../styles/authForm.module.css';
import MainLayout from "./MainLayout";
import {Button, Form, Input} from "antd";
import {useState} from "react";
import {logIn} from "../https/userAPI";
import {login} from "../store/actions/userActions";
import {useDispatch} from "react-redux";
import {Link, useHistory} from "react-router-dom";

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();
    const onSubmit = async () => {
        dispatch(login(username, password));
        history.push('/main')
    }
    const onFinishFailed = () => {

    }
    return (
        <div style={{display: "flex", justifyContent: "center", alignContent: "center"}}>
            <Form
                style={{
                    boxShadow: "4px 4px 4px #1890ff",
                    border: "2px solid #1890ff",
                    maxHeight: 400,
                    maxWidth: 400,
                    margin: 150,
                    padding: 20
                }}
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onSubmit}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                className={styles.authForm}
            >

                <Form.Item
                    label="Логин"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: `Введите логин`,
                        },
                    ]}
                >
                    <Input
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </Form.Item>
                <Form.Item
                    label="Пароль"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Введите пароль',
                        },
                    ]}
                >
                    <Input.Password
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Item>
                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit" style={{marginRight: 100}}>
                        Войти
                    </Button>
                </Form.Item>
                <Link to="/registration">Зарегистрироваться</Link>
            </Form>
        </div>
    )
}
export default LoginPage