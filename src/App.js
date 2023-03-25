import './App.css';
import { Route , Routes } from 'react-router-dom';
import Home from './Home componets/Home';
import LogIN from './LogIn';
import StudentPage from './Student Components/Student';
import Admain from './Admin Componets/Admain';
import ThemeProvider from './ThemeContext';
import { ThemeUpdateContext } from './ThemeContext';

function App() {
  window.onload = function(){
    window.scrollTo(0 , 0)
  }
  return (
    <ThemeProvider>
      <div className="App">
        <Routes>
          <Route path='/*' element={<Home />} />
          <Route path='/login' element={<LogIN />} />
          <Route path='/admain/*' element={<Admain />} />
          <Route path='/stu/*' element={<StudentPage />} />
          {/* <Route path='/teacher/*' element={<Teacher />} /> */}
          {/* <Route path='' */}
        </Routes>
      </div>
    </ThemeProvider>
    );
}

export default App;
