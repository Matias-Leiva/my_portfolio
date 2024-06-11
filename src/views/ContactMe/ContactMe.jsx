import { Box, Button, Fade, Grid, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import SocialMedia from '../../components/socialMedia/SocialMedia';
import { Link } from 'react-router-dom';

function ContactMe() {
    const md = useMediaQuery('(min-width:900px)');
    return (
        <Grid
            container
            columns={{ xs: 4, sm: 8, md: 12 }}
            alignItems='center'
            justifyContent={'center'}
            rowGap={5}
            height='100%'
        >
            <Grid item xs={4} sm={8} md={6}>
                <Fade in={true} timeout={2000}>
                    <Box
                        display="flex"
                        alignItems="center"
                        justifyContent='center'
                        height='100%'
                        width='100%'
                    >
                        <img style={{ width: md ? '55%' : '40%', borderRadius: '100%', alignSelf: 'center' }} alt="" src="https://avatars.githubusercontent.com/u/85767333?v=4" /></Box>
                </Fade>
            </Grid>
            <Grid item xs={4} sm={8} md={6}>
                <Fade in={true} timeout={1000}>
                    <Grid
                        container
                        direction="column"
                        alignItems="center"
                        justifyContent='center'
                        width='100%'
                        height='100%'
                        rowGap={3}
                    >
                        <Box width={'90%'}>
                            <Grid alignSelf='flex-start'>
                                <Typography
                                    className="contact-heading-text"
                                    variant={'h5'}
                                    fontWeight='bold'
                                >
                                    Feel free to connect with me
                                </Typography>
                            </Grid>
                            <Grid alignSelf='center'><Typography
                                className="contact-header-detail-text subTitle"
                                variant={'h7'}
                                textAlign={'justify'}
                            >
                                You can reach out to me on social media. I can assist you with Next.js, React, React Native, Android, iOS, Django, Arduino, and more...
                            </Typography>
                            </Grid></Box>
                        <Grid>
                            <SocialMedia align="center" justifyContent={'center'} />
                        </Grid>
                        <Grid alignSelf={'center'}>
                            <Link to="/resume">
                                <Button
                                    variant="outlined"
                                >See My resume</Button>
                            </Link>
                        </Grid>
                    </Grid>
                </Fade>
            </Grid>
        </Grid>
    )
}

export default ContactMe