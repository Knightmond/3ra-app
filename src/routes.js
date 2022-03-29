import { Navigate } from 'react-router-dom';
import DashboardLayout from './components/DashboardLayout';
import MainLayout from './components/MainLayout';
import Account from './pages/account';
import CustomerList from './pages/CustomerList';
import Dashboard from './pages/Dashboard';
import EditCustomer from './pages/EditCustomer';
import Login from './pages/login';
import NotFound from './pages/NotFound';
import ProductList from './pages/ProductList';
import Register from './pages/register';
import Settings from './pages/settings';

const routes = [
    {
        path: "app",
        element: <DashboardLayout />,
        children: [
            { path: 'account', element: <Account /> },
            { path: 'customers', element: <CustomerList /> },
            { path: 'customer-new', element: <EditCustomer /> },
            { path: 'dashboard', element: <Dashboard /> },
            { path: 'products', element: <ProductList /> },
            { path: 'settings', element: <Settings /> },
            { path: '*', element: <Navigate to="/404" /> },
        ]
    },
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { path: "login", element: <Login /> },
            { path: "register", element: <Register /> },
            { path: "404", element: <NotFound /> },
            { path: "/", element: <Navigate to="/app/dashboard" /> },
            { path: "*", element: <Navigate to="/404" /> }
        ]
    }
];

export default routes;