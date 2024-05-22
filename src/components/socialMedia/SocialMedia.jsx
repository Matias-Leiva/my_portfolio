import React from "react";
import "./SocialMedia.css";
import { socialMediaLinks } from "../../constans/socialMedia";
import { Grid } from "@mui/material";

export default function socialMedia(props) {
  return (
    <Grid container direction='row' justifyContent='center' alignItems='center'>
      {socialMediaLinks.map((media, i) => {
        return (
          <a
            key={i}
            href={media.link}
            className={`icon-button`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div {...media} {...props}>
              <i className={`fab ${media.fontAwesomeIcon}`} style={{ backgroundColor: media.backgroundColor }}></i>
            </div>
          </a>
        );
      })}
    </Grid>
  );
}
