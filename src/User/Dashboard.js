import React, { useEffect, useState } from 'react';
import { Button, List, Input, Row, Col } from 'antd';
import { useNavigate } from 'react-router-dom';

const Dashboard = ({ userData, setIsLoggedIn }) => {
    const [apiData, setApiData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if (!userData) {
            navigate('/'); 
        }

        
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((data) => setApiData(data.slice(0, 10))) 
            .catch((error) => console.error('Error fetching API data:', error));
    }, [userData, navigate]);

    const handleLogout = () => {
        setIsLoggedIn(false); 
        navigate('/'); 
    };

    const filteredData = apiData.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div style={{ padding: '20px' }}>
            <h1>Welcome, {userData?.fullName}!</h1>
            <Row justify="end">
                <Button type="primary" onClick={() => navigate('/profile')}>Profile</Button>
                <Button onClick={handleLogout} style={{ marginLeft: '10px' }}>Logout</Button>
            </Row>
            <Input
                placeholder="Search posts"
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ margin: '20px 0' }}
            />
            <List
                dataSource={filteredData}
                renderItem={(item) => <List.Item>{item.title}</List.Item>}
            />
        </div>
    );
};

export default Dashboard;

