import { Route, Routes, useNavigate } from "react-router-dom"
import NavBar from "./NavBar"
import SlideBar from "./SideBar"
import './student.css'
// import Teacher from "./Teachers"
import { useEffect, useState } from "react"
import { useContext } from "react"
import { ThemeContext } from "../ThemeContext"



// pages
import Acadmic from "./Acadmic"
import News from "./New"
import Porfilestu from "./Portfoliostu"
import Chatstu from "./chatstu"
import SettingsStu from "./settingsstu"
import Cources from "./Cources"
import Library from "./Library"
import Header from "../Compoents/global Componets/Header"
import MiniSideBar from "./MiniSideBar"
import Barchart from "../Compoents/charts/BarChart.js"


function StudentPage() {
    let navigate = useNavigate()
    window.onload = function () {
        navigate('/stu')
    }





    const Theme = useContext(ThemeContext)

    // get the Theme from the localStorge
    useEffect(()=>{
        if(localStorage.getItem("theme-color")){
            Theme.toggleTheme(JSON.parse(localStorage.getItem("theme-color")))
        }
    },[])
    return (
        <>
            <NavBar />
            <SlideBar />
            <MiniSideBar />
            

            <div className="landing">
                <div className="col pb-3 px-4">
                    <section>
                        <Header />
                    </section>

                    {/* <h1>hwllo</h1> */}
                    <Routes>
                        <Route path="/" element={<Acadmic />}> </Route>
                        <Route path="/cources/*" element={<Cources />}> </Route>
                        <Route path="/news" element={<News />}> </Route>
                        <Route path="/news" element={<Library />}> </Route>
                        <Route path="/chat" element={<Chatstu />} />
                        <Route path="/profile" element={<Porfilestu />} />
                        <Route path="/settings" element={<SettingsStu  />} />
                    </Routes>
                </div>
            </div>
        </>
    )
}
export default StudentPage

//fix the localstorge of the Theme so the app works
// fix table width
// fix resposive 
//fix circle width on responsive
// border raduis of cards section
    

// give the col padding and remove all the componetes padding ... just add some margin between all sections
// cources componet make more globale by taking more props
// make notification and all responsive 


// fix cources



// make router pages