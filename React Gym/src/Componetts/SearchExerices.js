import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import { height } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { exerciseOptions, fetchData } from '../utils/fetchData'
import HorziontalScrollbar from './HorziontalScrollbar'

function SearchExerices({exercises , setBodyPart , bodyPart , setExercises}) {
  const [search, setSearch] = useState("")
  const [bodyParts, setBodyParts] = useState("")



  useEffect(() => {
    //this for the HorziontalScrollbar
    const fetchexercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions)
      setBodyParts(['all' , ...bodyPartsData])
    }
    fetchexercisesData()
    // console.log(bodyParts) // []
    // console.log(exercises) // []
  }, [])


  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions)
      console.log(exercisesData)
      const searchedExercises = exercisesData.filter((exercise) =>
        exercise.name
        // exercise.name.toLowerCase().includes(search) ||
        // exercise.target.toLowerCase().includes(search) ||
        // exercise.euipment.toLowerCase().includes(search) ||
        // exercise.bodyPart.toLowerCase().includes(search)
      )
      setSearch("")
      setExercises(searchedExercises)
    }
  }




  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700} sx={{
          fontSize: { lg: "44px", xs: "30px" }
        }} mb="50px" textAlign="center"
      >
        Awsome Exercies You <br /> should know
      </Typography>

      <Box position="relative" mb="72px">
        <TextField sx={{
          input: {
            fontWeight: "70px",
            border: "none",
            borderRadius: "4px"
          },
          width: { lg: '800px', xs: "350px" },
          backgourndColr: "#fff",
          borderRaduis: "40px"
        }}
          height="76px"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercies"
          type="text"
        />
        <Button onClick={handleSearch} className="search-btn" sx={{ bgcolor: '#FF2625', color: '#fff', textTransform: 'none', width: { lg: '173px', xs: '80px' }, height: '56px', position: 'absolute', right: '0px', fontSize: { lg: '20px', xs: '14px' } }} >
          Search
        </Button>
      </Box>
      <Box sx={{ position: "relative", widht: "100%", p: "20px" }}>
        {bodyParts && <HorziontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} />}
      </Box>
    </Stack>

  )
}

export default SearchExerices