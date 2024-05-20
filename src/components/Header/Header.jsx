import { Button, ButtonGroup } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css';

function Header() {
    return (
        <div className='header-main'>
            <ButtonGroup variant="text" aria-label="Basic button group">
                <Link to={""}><Button>Home</Button></Link>
                <Link to={"resume"}><Button>Resume</Button></Link>
                <Link to={"contact-me"}><Button>Contact Me</Button></Link>
            </ButtonGroup>
        </div>
    )
}

export default Header