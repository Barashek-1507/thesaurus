import {Form, Input, Button, Checkbox} from 'antd';

const AuthInput = (
    {
        label
    }) => {
    return (
        <Form.Item
            label={label}
            name={label}
            rules={[
                {
                    required: true,
                    message: `Please input your ${label}!`,
                },
            ]}
        >
            <Input/>
        </Form.Item>
    )
}

export default AuthInput
