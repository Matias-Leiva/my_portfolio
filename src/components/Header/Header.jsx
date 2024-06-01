import { Box, Button, ButtonGroup, Grid, Menu, MenuItem, useMediaQuery } from '@mui/material'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Icon from '@mui/material/Icon';

function Header() {
    const navigation = useNavigate();
    const completeHeader = useMediaQuery('(min-width:600px)');
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (page) => {
        navigation(page);
        setAnchorEl(null);
    };
    return (
        <Grid container direction='row' justifyContent='space-between' paddingRight={5} paddingLeft={5} paddingTop={1}>

            <Box>
                <Link to={""}><Button>leivamatias.com</Button></Link>
            </Box>
            {completeHeader ?
                <Box alignItems='center' justifyContent='center'>
                    <Link to={""}><Button>Home</Button></Link>
                    <Link to={"resume"}><Button>Resume</Button></Link>
                    <Link to={"portfolio"}><Button>Portfolio</Button></Link>
                    <Link to={"contact-me"}><Button>Contact Me</Button></Link>
                </Box>
                :
                <Box>
                    <Button
                        id="demo-positioned-button"
                        // onClick={() => setOpen(open => !open)}
                        aria-controls={open ? 'demo-positioned-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        <Icon baseClassName="fas" className="fa-bars" sx={{ fontSize: 30 }} />
                    </Button>
                    <Menu
                        id="demo-positioned-menu"
                        aria-labelledby="demo-positioned-button"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                    >
                        <MenuItem onClick={() => handleClose("")}>Home</MenuItem>
                        <MenuItem onClick={() => handleClose("resume")}>Resume</MenuItem>
                        <MenuItem onClick={() => handleClose("portfolio")}>Portfolio</MenuItem>
                        <MenuItem onClick={() => handleClose("contact-me")}>Contact Me</MenuItem>
                    </Menu>
                </Box>
            }

        </Grid>
    )
}

export default Header