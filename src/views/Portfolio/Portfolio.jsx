import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Portfolio() {
    const [repos, setRepos] = useState();

    const bringData = async () => {
        const response = await axios.get('https://api.github.com/users/Matias-Leiva/repos?per_page=6');
        setRepos(response.data.filter(project => project.name != 'Matias-Leiva'))
    }
    useEffect(() => {
        bringData();
    }, [])

    return (
        <Grid container gap={2} marginTop={5} xs={12} sm={12} md={10} alignItems='flex-start' justifyContent='center'>
            {
                repos?.length > 0 && repos.map(project =>
                    <Grid item>
                        <Card sx={{ maxWidth: 320 }}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {project.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {project.description}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" href={project.html_url}>Visit Repo</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                )
            }
        </Grid>
    )
}

export default Portfolio