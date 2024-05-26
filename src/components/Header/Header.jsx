import { Box, Button, ButtonGroup } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css';

function Header() {
    return (
        <Box className='header-main'>
            <Box>
                <Link to={""}><Button>leivamatias.com</Button></Link>
            </Box>
            <Box>
                <Link to={""}><Button>Home</Button></Link>
                <Link to={"resume"}><Button>Resume</Button></Link>
                <Link to={"contact-me"}><Button>Contact Me</Button></Link>
            </Box>

        </Box>
    )
}

export default Header