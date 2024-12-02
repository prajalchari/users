import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Registration from '../User/Registration';
import Login from '../User/Login';

const ProjectRoutes = () => {
    const [userData, setUserData] = useState(null);

    return (
        <Routes>
            <Route path="/" element={<Login userData={userData} />} />
            <Route path="/register" element={<Registration setUserData={setUserData} />} />
        </Routes>
    );
};

export default ProjectRoutes;

