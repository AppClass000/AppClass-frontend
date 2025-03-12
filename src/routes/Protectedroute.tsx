import {  Outlet,Navigate} from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import React from 'react';

const Protectedroute:React.FC = () => {
    const { loggedIn } = useAuth();

    return (
        loggedIn ? <Outlet /> : <Navigate to="/login" />
    );
};

export default Protectedroute;