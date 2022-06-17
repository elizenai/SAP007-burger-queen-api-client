import { Routes, BrowserRouter, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Saloon } from "./pages/Saloon";
import { Kitchen } from "./pages/Kitchen";
import { ReadyOrders } from "./pages/ReadyOrders";

export const RoutesBurger = () => {
    return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/> 
            <Route path="/saloon" element={<Saloon/>}/>
            <Route path="/kitchen" element={<Kitchen/>}/>
            <Route path="/ready-orders" element={<ReadyOrders />} />
            
        </Routes>
    </BrowserRouter>    

    );
};

    