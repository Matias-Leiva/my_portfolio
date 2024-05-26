import { Box, Button, ButtonGroup, Container, Menu, MenuItem } from "@mui/material";
import "./root.css"
import { Link, Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { useState } from "react";

export default function Root() {
    return (
        <div className="layout">
            <Header className="header" />
            <Box component="main" sx={{ flexGrow: 1, display: 'flex' }}>
                <Container sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} maxWidth="xl">
                    <Outlet />
                </Container></Box>
            <Footer className="footer" />
        </div>
    );
}