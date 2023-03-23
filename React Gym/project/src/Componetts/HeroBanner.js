import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import HeroBannerImage from '../assets/images/banner.png'

function HeroBanner() {
    return (
        <Box
            sx={{
                mt: { lg: '212px', xs: "70px" },
                ml: { sm: "50px" },
                // border:"1px solid black"
            }}
            position="relative"
            p="20px"
        >
            <Typography
                color="#FF2625"
                fontWeight="600"
                fontSize="26px" >
                Fitness Club
            </Typography>

            <Typography
                fontWeight={700}
                sx={{ fontSize: { lg: '44px', xs: "40px" } }}
                mb="23px" mt="30px">
                Sweat , Smile <br /> and Repeat
            </Typography>

            <Typography
                fontSize="22px"
                lineHeight="35px"
                mb={3}
            >Check out the most effective exercies
            </Typography>


            <Button
                sx={{backgroundColor:"#ff2625" , padding:"10px"}}
                variant='contained' color="error" href='#exercies'>
                Explore Exercies
            </Button>

            <Typography
                fontWeight={600}
                color="#ff2625"
                sx={{
                    display: { lg: "block", xs: 'none' },
                    opacity: 0.1
                }}
                fontSize="200px"
            >
                Exercies
            </Typography>
            <img src={HeroBannerImage} alt="banner" className="hero-banner-img" />
        </Box>
    )
}

export default HeroBanner