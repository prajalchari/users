import React from 'react';
import { Button, Form, Input, Row, Col, message } from 'antd';
import { Link, useNavigate } from 'react-router-dom';

const Login = ({ userData, setIsLoggedIn }) => {
    const [form] = Form.useForm();
    const navigate = useNavigate();

    const onFinish = (values) => {
        if (userData && userData.email === values.email && userData.password === values.password) {
            message.success('Login successful!');
            setIsLoggedIn(true); 
            navigate('/dashboard'); 
        } else {
            message.error('Invalid email or password.');
        }
    };

    const onFinishFailed = () => {
        message.error('Validation failed. Please check your inputs.');
    };

    return (
        <Form
            form={form}
            name="login"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            style={{ maxWidth: 600 }}
        >
            <Form.Item
                label="Email"
                name="email"
                rules={[{ type: 'email', message: 'Enter a valid email!' }, { required: true, message: 'Email is required!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Password is required!' }]}
            >
                <Input.Password />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Login
                </Button>
                <Row justify="space-between" align="middle">
                    <Col>
                        <Link to="/register">Register</Link>
                    </Col>
                </Row>
            </Form.Item>
        </Form>
    );
};

export default Login;


