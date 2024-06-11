import { Box, Fade, Grid, Typography } from '@mui/material'
import React from 'react'
import {
    DiReact,
    DiNodejs,
    DiMongodb,
    DiPython,
    DiGit,
} from "react-icons/di";
import {
    SiRedis,
    SiFirebase,
    SiNextdotjs,
    SiPostgresql,
    SiTypescript,
    SiJavascript,
    SiAndroidstudio,
    SiXcode,
    SiArduino,
    SiCplusplus,
} from "react-icons/si";
import {
    SiVisualstudiocode,
    SiPostman,
    SiSlack,
    SiMacos,
} from "react-icons/si";
import "./AboutMe.css"
function AboutMe() {
    return (
        <Grid Container width={'80%'} direction={'column'} justifyContent={'center'} alignContent={'center'}>
            <Fade in={true} timeout={1000}>
                <Typography variant={'h3'} style={{
                    marginTop: 50, marginBottom: 30
                }}>My Skills</Typography></Fade>
            <Fade in={true} timeout={2000}>
                <Grid container marginTop={5} xs={12} sm={12} md={12} justifyContent='center'>
                    <Box className='itemCard' margin={1} padding={2}>
                        <SiJavascript size={70} />
                    </Box>
                    <Box className='itemCard' margin={1} padding={2}>
                        <SiTypescript size={70} />
                    </Box>
                    <Box className='itemCard' margin={1} padding={2}>
                        <DiPython size={70} />
                    </Box>
                    <Box className='itemCard' margin={1} padding={2}>
                        <SiCplusplus size={70} />
                    </Box>
                    <Box className='itemCard' margin={1} padding={2}>
                        <DiNodejs size={70} />
                    </Box>
                    <Box className='itemCard' margin={1} padding={2}>
                        <DiReact size={70} />
                    </Box>
                    <Box className='itemCard' margin={1} padding={2}>
                        <SiNextdotjs size={70} />
                    </Box>
                    <Box className='itemCard' margin={1} padding={2}>
                        <DiGit size={70} />
                    </Box>
                    <Box className='itemCard' margin={1} padding={2}>
                        <SiFirebase size={70} />
                    </Box>
                    <Box className='itemCard' margin={1} padding={2}>
                        <DiMongodb size={70} />
                    </Box>
                    <Box className='itemCard' margin={1} padding={2}>
                        <SiRedis size={70} />
                    </Box>
                    <Box className='itemCard' margin={1} padding={2}>
                        <SiPostgresql size={70} />
                    </Box>
                </Grid>
            </Fade>
            <Fade in={true} timeout={1000}>
                <Typography variant={'h3'} style={{
                    marginTop: 50, marginBottom: 30
                }}>My Tools</Typography></Fade>
            <Fade in={true} timeout={2000}>
                <Grid container marginTop={5} xs={12} sm={12} md={12} justifyContent='center'>
                    <Box className='itemCard' margin={1} padding={2}>
                        <SiMacos size={50} />
                    </Box>
                    <Box className='itemCard' margin={1} padding={2}>
                        <SiXcode size={50} />
                    </Box>
                    <Box className='itemCard' margin={1} padding={2}>
                        <SiAndroidstudio size={50} />
                    </Box>
                    <Box className='itemCard' margin={1} padding={2}>
                        <SiVisualstudiocode size={50} />
                    </Box>
                    <Box className='itemCard' margin={1} padding={2}>
                        <SiArduino size={50} />
                    </Box>
                    <Box className='itemCard' margin={1} padding={2}>
                        <SiPostman size={50} />
                    </Box>
                    <Box className='itemCard' margin={1} padding={2}>
                        <SiSlack size={50} />
                    </Box>
                </Grid>
            </Fade>
        </Grid>
    )
}

export default AboutMe