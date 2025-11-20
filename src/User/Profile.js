import React from 'react';
import { Form, Input, Button, message } from 'antd';

const Profile = ({ userData, setUserData }) => {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        setUserData((prevData) => ({ ...prevData, ...values }));
        message.success('Profile updated successfully!');
    };

    return (<div>
        <h2>Profile</h2>
        <Form
            form={form}
            layout="vertical"
            initialValues={userData}
            onFinish={onFinish}
            style={{ maxWidth: 600, margin: '20px auto' }}
        >
            <Form.Item label="Full Name" name="fullName" rules={[{ required: true, message: 'Full name is required!' }]}>
                <Input />
            </Form.Item>
            <Form.Item label="Email" name="email">
                <Input disabled />
            </Form.Item>
            <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Password is required!' }]}
            >
                <Input.Password />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">Save</Button>
            </Form.Item>
        </Form>
        </div>
    );
};

export default Profile;

