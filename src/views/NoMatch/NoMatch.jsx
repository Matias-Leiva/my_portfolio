import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { Box, Button, Container } from '@mui/material'
import { Link } from 'react-router-dom'

function NoMatch() {
    return (
        <Box component="main" sx={{ flexGrow: 1, display: 'flex' }}>
            <Container
                sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
                maxWidth="xl"
            >
                <h1>Sorry! There's no content here.</h1>
                <Link to="/"><Button>Go Home</Button></Link>
            </Container>
        </Box>

    )
}

export default NoMatch