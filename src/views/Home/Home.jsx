import { Box, Container, Fade, Grid, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import Typing from '../../components/Typing'
import WebDeveloper from '../../assets/web-developer.svg'

function Home() {
    const md = useMediaQuery('(min-width:900px)');
    return (
        <Grid
            container
            columns={{ xs: 4, sm: 8, md: 12 }}
            justifyContent='center'
            alignItems='center'
            rowSpacing={1}
        >

            <Grid item xs={4} sm={8} md={6}>
                <Fade in={true} timeout={2000}>
                    <Box
                        display="flex"
                        alignItems="center"
                        justifyContent='center'
                        flexDirection='column'
                        height='100%'
                        width='100%'
                        gap={2}
                        p={2}
                    >
                        <Typography variant={'h3'}>
                            Hi! I'm <strong style={{ color: '#E0E136' }}>Matias Leiva</strong>
                        </Typography>
                        <Typography variant='h4'>
                            <Typing className='main-text' />
                        </Typography>
                    </Box>
                </Fade>
            </Grid>
            <Grid item xs={4} sm={8} md={6}>
                <Fade in={true} timeout={1000}>
                    <Box
                        display="flex"
                        alignItems="center"
                        justifyContent='flex-start'
                        flexDirection='column'
                        height='100%'
                        width='100%'
                    >
                        <img src={WebDeveloper} alt="matias leiva web developer" className="developer-img" width={md ? '80%' : '60%'} />
                    </Box>
                </Fade>
            </Grid>
        </Grid >
    )
}

export default Home