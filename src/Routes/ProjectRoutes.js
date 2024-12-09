import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Registration from '../User/Registration';
import Login from '../User/Login';
import Dashboard from '../User/Dashboard';
import Profile from '../User/Profile';

const ProjectRoutes = () => {
    const [userData, setUserData] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <Routes>
            <Route path="/" element={<Login userData={userData} setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="/register" element={<Registration setUserData={setUserData} />} />
            <Route
                path="/dashboard"
                element={isLoggedIn ? <Dashboard userData={userData} setIsLoggedIn={setIsLoggedIn} /> : <Login />}
            />
            <Route
                path="/profile"
                element={<Profile userData={userData} setUserData={setUserData} />}
            />
        </Routes>
    );
};

export default ProjectRoutes;





