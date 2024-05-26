import { Box, Grid, useMediaQuery } from '@mui/material'
import React from 'react'
import { socialMediaLinks } from '../../constans/socialMedia';
import './Footer.css';

function Footer() {
    let date = new Date();
    let year = date.getFullYear();
    const md = useMediaQuery('(min-width:900px)');
    return (
        <Grid
            container
            direction="row"
            className="footer"
            alignItems="center"
            justifyContent={md ? "space-between" : 'center'}
        >
            {
                md &&
                <Grid item marginLeft={5}>
                    developed with ❤️ by Matias Leiva
                </Grid>
            }
            <Grid item alignSelf={'center'}>
                copyright ©️ {year} leivamatias.com
            </Grid>

            {
                md && <Grid item marginRight={5}>
                    <Grid container direction='row' justifyContent='center' alignItems='center'>
                        {socialMediaLinks.map((media, i) => {
                            return (
                                <Box>
                                    <a
                                        key={i}
                                        href={media.link}
                                        className={`icon-button-footer`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i className={`fab ${media.fontAwesomeIcon}`} style={{ backgroundColor: '#000' }}></i>
                                    </a>
                                </Box>

                            );
                        })}
                    </Grid>
                </Grid>
            }


        </Grid>
    )
}

export default Footer