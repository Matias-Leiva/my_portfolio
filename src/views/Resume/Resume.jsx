import { Button, Container, Grid, IconButton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import pdf from "../../assets/matias-leiva.pdf";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
import DownloadIcon from '@mui/icons-material/Download';

function Resume() {

    const [width, setWidth] = useState(1200);
    useEffect(() => {
        setWidth(window.innerWidth);
    }, []);

    return (
        <Grid container spacing={{ xs: 2 }} columns={{ xs: 4, sm: 8, md: 12 }} alignItems='center' justifyContent='center' flexDirection={'column'} marginBottom={10}>
            <Grid item xs={4} sm={8} md={12}>
                <Button variant="outlined" startIcon={<DownloadIcon />} href={pdf}>
                    Download CV
                </Button>
            </Grid>

            <Grid item xs={4} sm={8} md={11} style={{
                paddingTop: '50px',
                paddingBottom: '50px',
                justifyContent: 'center'
            }}>
                <Document file={pdf} style={{ display: 'flex', justifyContent: 'center' }}>
                    <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} renderTextLayer={false} />
                </Document>
            </Grid>

            <Grid item xs={4} sm={8} md={12}>
                <Button variant="outlined" startIcon={<DownloadIcon />} href={pdf}>
                    Download CV
                </Button>
            </Grid>
        </Grid>
    )
}

export default Resume

{/* <Grid container spacing={{ xs: 2 }} columns={{ xs: 4, sm: 8, md: 12 }} alignItems='center' justifyContent='center'>
            <Grid item xs={4} sm={8} md={12}>
                <Button
                    variant="primary"
                    href={pdf}
                    target="_blank"
                    style={{ maxWidth: "250px" }}
                >
                    &nbsp;Download CV
                </Button>
            </Grid>

            <Grid item xs={4} sm={8} md={11} style={{
                paddingTop: '50px',
                paddingBottom: '50px',
                justifyContent: 'center'
            }}>
                <Document file={pdf} style={{ display: 'flex', justifyContent: 'center' }}>
                    <Page pageNumber={1} />
                </Document>
            </Grid>

            <Grid item xs={4} sm={8} md={12}>
                <Button
                    variant="primary"
                    href={pdf}
                    target="_blank"
                    style={{ maxWidth: "250px" }}
                >
                    &nbsp;Download CV
                </Button>
            </Grid>
        </Grid> */}