import {Form, Input} from 'antd';
import AuthButton from "./AuthButton";

const AuthInputPassword = (
  {
    value,
    onChange
  }) => {
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
            <Input.Password
              value={value}
              onChange={onChange}
            />
        </Form.Item>
    )
}

export default AuthInputPassword
