import {Form, Button} from 'antd';

const AuthButton = () => {
    return (
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
    )
}

export default AuthButton