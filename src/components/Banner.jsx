import React from 'react'
import bannerStyles from '../styles/BannerStyle'
import { Container, makeStyles, Typography } from '@mui/material';
import Carousel from './Carousel';



const Banner = () => {
  return (
    <div style={bannerStyles.banner}>
      <Container sx={bannerStyles.bannerContent}>
        <div style={bannerStyles.tagline}>
        <Typography
            variant="h2"
            style={{
              fontWeight: "bold",
              marginBottom: 15,
              fontFamily: "Montserrat",
            }}
          >
            Crypto Finder
          </Typography>
          <Typography
            variant="subtitle2"
            style={{
              color: "darkgrey",
              textTransform: "capitalize",
              fontFamily: "Montserrat",
            }}
          >
            Get all the Info regarding your favorite Crypto Currency
          </Typography>
        </div>
      </Container>
      <Carousel />
      
    </div>
  )
}

export default Banner
