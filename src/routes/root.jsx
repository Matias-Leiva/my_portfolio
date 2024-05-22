import { Button, ButtonGroup, Container } from "@mui/material";
import "./root.css"
import { Link, Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

export default function Root() {
    return (
        <div className="layout">
            <Header className="header"></Header>
            <Container maxWidth="md" className="main">
                <Outlet />
            </Container>
            <footer className="footer">@2024 leivamatias.com</footer>
        </div>
    );
}