import { Button, ButtonGroup } from "@mui/material";
import "./root.css"
import { Link, Outlet } from "react-router-dom";

export default function Root() {
    return (
        <div className="layout">
            <header>
                <ButtonGroup variant="text" aria-label="Basic button group">
                    <Link to={""}><Button>Home</Button></Link>
                    {/* <Link to={"skills"}><Button>Skills</Button></Link> */}
                </ButtonGroup>
            </header>
            <main><Outlet /></main>
            <footer>@2024 leivamatias.com</footer>
        </div>
    );
}