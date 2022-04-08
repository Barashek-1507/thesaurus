import {Form, Input} from 'antd';
import AuthButton from "./AuthButton";

const AuthInputPassword = () => {
    return (
        <Form.Item
            label= "Password"
            name="password"
            rules={[
                {
                    required: true,
                    message: 'Please input your password!',
                },
            ]}
        >
            <Input.Password/>
        </Form.Item>
    )
}

export default AuthInputPassword