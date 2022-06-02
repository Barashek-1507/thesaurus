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
        <Form
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
                label="Username"
                name="username"
                rules={[
                    {
                        required: true,
                        message: `Please input your login!`,
                    },
                ]}
            >
                <Input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </Form.Item>
            <Form.Item
                label="Password"
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
            >
                <Input.Password
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </Form.Item>
            <div>
                {/*{error ? error : <br />}*/}
            </div>
            <br/>
            <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
            <Link to="/registration">Registration</Link>
        </Form>
    )
}
export default LoginPage