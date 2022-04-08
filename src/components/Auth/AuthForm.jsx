import { Form } from 'antd';
import styles from '../../styles/authForm.module.css'

const AuthForm = ({onSubmit, children}) => {
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

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
            {children}
        </Form>
    );
};

export default AuthForm