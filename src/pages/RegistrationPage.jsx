import {useState} from "react";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import {signIn} from "../store/actions/userActions";
import {Button, Form, Input} from "antd";
import styles from "../styles/authForm.module.css";

const RegistrationPage = () => {
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const history = useHistory();
    const onSubmit = async () => {
        dispatch(signIn(username, name, lastname, password));
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
                    label="Имя"
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: `Введите ваше имя!`,
                        },
                    ]}
                >
                    <Input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </Form.Item>
                <Form.Item
                    label="Фамилия"
                    name="lastname"
                    rules={[
                        {
                            required: true,
                            message: `Введите вашу фамилию!`,
                        },
                    ]}
                >
                    <Input
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}
                    />
                </Form.Item>
                <Form.Item
                    label="Логин"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: `Введите ваш логин!`,
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
                            message: 'Введите пароль!',
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
                    <Button style={{marginRight: 100}} type="primary" htmlType="submit">
                        Зарегистрироваться
                    </Button>
                </Form.Item>
            </Form>
        </div>

    )
}
export default RegistrationPage