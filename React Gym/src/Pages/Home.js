import { Box } from '@mui/material'
import React from 'react'
import Exerices from '../Componetts/Exerices'
import HeroBanner from '../Componetts/HeroBanner'
import SearchExerices from '../Componetts/SearchExerices'

function Home() {
    return (
        <Box>
            <HeroBanner />
            <SearchExerices />
            <Exerices />
        </Box>
    )
}

export default Home