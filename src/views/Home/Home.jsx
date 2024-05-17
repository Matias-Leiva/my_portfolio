import { Container } from '@mui/material'
import React from 'react'
import Typing from '../../components/Typing'

function Home() {
    return (
        <Container className="home-section" id="home">
            <Container>
                <div>
                    <div>
                        <h1>
                            Hello! I'm <strong>Matias Leiva</strong>
                        </h1>
                        <div>
                            <Typing />
                        </div>
                    </div>
                </div>
            </Container>
        </Container>
    )
}

export default Home