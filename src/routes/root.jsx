import { Button, ButtonGroup, Container } from "@mui/material";
import "./root.css"
import { Link, Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function Root() {
    return (
        <div className="layout">
            <Header className="header" />
            <Container maxWidth="xl" className="main">
                <Outlet />
            </Container>
            <Footer className="footer" />
        </div>
    );
}