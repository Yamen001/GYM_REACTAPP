import { Box } from '@mui/material'
import React, { useState } from 'react'
import Exerices from '../Componetts/Exerices'
import HeroBanner from '../Componetts/HeroBanner'
import SearchExerices from '../Componetts/SearchExerices'

function Home() {
    const [exercises, setExercises] = useState([])
    const [bodyPart, setBodyPart] = useState("all")
    return (
        <Box>
            <HeroBanner />
            <SearchExerices
                bodyPart={bodyPart}
                setBodyPart={setBodyPart}
                setExercises={setExercises}
            />
            <Exerices
                bodyPart={bodyPart}
                setBodyPart={setBodyPart}
                setExercises={setExercises}
            />
        </Box>
    )
}

export default Home