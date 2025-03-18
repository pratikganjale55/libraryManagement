import { useEffect } from 'react';
import {  useNavigate } from 'react-router-dom';

const PrivateRoute = ({ element, allowedRoles }) => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');

    useEffect(() => {
        if (!token) {
            navigate('/');  // Redirect if no token
        } else if (allowedRoles && !allowedRoles.includes(role)) {
            navigate('/dashboard');  // Redirect unauthorized users
        }
    }, [token, role, allowedRoles, navigate]);

    return token ? element : null; 
};

export default PrivateRoute;
