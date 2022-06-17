import { Routes, BrowserRouter, Route, Navigate } from "react-router-dom";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Saloon } from "./pages/Saloon";
import { Kitchen } from "./pages/Kitchen";
import { ReadyOrders } from "./pages/ReadyOrders";

const PrivateRoute = ({ children, redirectTo}) => {
    const isAuthenticated = localStorage.getItem("token") !== null;
    return isAuthenticated ? children : <Navigate to={redirectTo} />;
};

export const RoutesBurger = () => {
    return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/> 
            <Route path="/saloon" element={<PrivateRoute redirectTo="/">
                <Saloon /></PrivateRoute>}/>
            <Route path="/kitchen" element={<PrivateRoute redirectTo="/">
                <Kitchen /></PrivateRoute>}/>
            <Route path="/ready-orders" element={<PrivateRoute redirectTo="/">
                <ReadyOrders /></PrivateRoute>}/>
        </Routes>
    </BrowserRouter>    

    );
};

    