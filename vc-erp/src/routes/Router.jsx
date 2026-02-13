import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import OrgChart from "../modules/orgchart/Orgchart";
import Sidebar from "../components/Sidebar";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Sidebar />}/>
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
    );
}