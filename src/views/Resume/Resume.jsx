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
        <Grid
            container
            direction='column'
            alignItems='center'
            justifyContent='space-between'
            spacing={4}
        >
            <Grid item>
                <Button variant="outlined" startIcon={<DownloadIcon />} href={pdf}>
                    Download CV
                </Button>
            </Grid>

            <Grid item marginBottom={2}>
                <Document file={pdf} style={{ display: 'flex', justifyContent: 'center' }}>
                    <Page pageNumber={1} scale={width > 820 ? 1.3 : width > 400 ? 0.6 : 0.4} renderTextLayer={false} />
                </Document>
            </Grid>
        </Grid>
    )
}

export default Resume