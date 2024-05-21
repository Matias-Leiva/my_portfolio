import { Button, ButtonGroup } from "@mui/material";
import "./root.css"
import { Link, Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

export default function Root() {
    return (
        <div className="layout">
            <Header className="header"></Header>
            <Outlet className="main" />
            <footer className="footer">@2024 leivamatias.com</footer>
        </div>
    );
}