import { Box } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Componetts/Footer';
import Navbar from './Componetts/Navbar';
import ExercisesDetail from './Pages/ExercisesDetail';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <Box width="400px" sx={{width:{xl:'1488px'}}} m='auto'>
        <Navbar />
        <Routes>
          <Route  path="/" element={<Home />} />
          <Route  path="exercise/:id" element={<ExercisesDetail />} />
        </Routes>
        <Footer />
      </Box>
    </div>
  );
}

export default App;
