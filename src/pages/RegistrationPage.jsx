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
                label="Name"
                name="name"
                rules={[
                    {
                        required: true,
                        message: `Please input your name!`,
                    },
                ]}
            >
                <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </Form.Item>
            <Form.Item
                label="Lastname"
                name="lastname"
                rules={[
                    {
                        required: true,
                        message: `Please input your lastname!`,
                    },
                ]}
            >
                <Input
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                />
            </Form.Item>
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
        </Form>
    )
}
export default RegistrationPage