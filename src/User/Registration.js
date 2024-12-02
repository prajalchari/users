import React from 'react';
import { Button, Form, Input, Row, Col, message } from 'antd';
import { Link } from 'react-router-dom';

const Registration = ({ setUserData }) => {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        setUserData(values); // Store user data
        message.success('Registration successful!');
        form.resetFields();
    };

    const onFinishFailed = () => {
        message.error('Validation failed. Please check your inputs.');
    };

    return (
        <Form
            form={form}
            name="register"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            style={{ maxWidth: 600 }}
        >
            <Form.Item
                label="Full Name"
                name="fullName"
                rules={[{ required: true, message: 'Please input your full name!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Email"
                name="email"
                rules={[
                    { type: 'email', message: 'Enter a valid email!' },
                    { required: true, message: 'Email is required!' },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Password"
                name="password"
                rules={[
                    { required: true, message: 'Password is required!' },
                    { min: 8, message: 'Password must be at least 8 characters long.' },
                ]}
            >
                <Input.Password />
            </Form.Item>
            <Form.Item
                label="Confirm Password"
                name="confirmPassword"
                dependencies={['password']}
                rules={[
                    { required: true, message: 'Please confirm your password!' },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }
                            return Promise.reject(new Error('Passwords do not match!'));
                        },
                    }),
                ]}
            >
                <Input.Password />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Register
                </Button>
                <Row justify="space-between" align="middle">
                    <Col>
                        <Link to="/">Go back to login</Link>
                    </Col>
                </Row>
            </Form.Item>
        </Form>
    );
};

export default Registration;

