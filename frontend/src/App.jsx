import {  Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import AddBook from './components/AddBook';
import BookDetails from './components/BookDetails';
import PrivateRoute from './PrivateRoute';
import Register from './components/Register';

const App = () => {
    return (
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Register />} />
                <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} />
                <Route path="/add-book" element={<PrivateRoute element={<AddBook />} allowedRoles={['admin']} />} />
                <Route path="/book/:id" element={<BookDetails />} />
            </Routes>
    );
};

export default App;
