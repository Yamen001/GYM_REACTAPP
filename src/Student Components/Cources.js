import { useContext, useEffect, useState } from "react"
import StudentCources from "../Compoents/global Componets/Cards/StudentCources"
import "../Home componets/home.css"
import { ThemeContext } from "../ThemeContext"
function Courses() {
    let Theme = useContext(ThemeContext).Theme

    useEffect(()=>{
        let buttonActive = document.querySelector("button.active")
        buttonActive.style.backgroundColor = Theme.iconBackground
        console.log(buttonActive)

    },[])
    return (
        <div className="courses-container bg-white d-flex flex-column px-lg-0">

            <StudentCources />

        
            <div class="btn-toolbar mx-auto w-25 mt-5 " role="toolbar" aria-label="Toolbar with button groups">
                <div class="btn-group me-2" role="group" aria-label="First group">
                    <button type="button" class="btn border active">1</button>
                </div>
                <div class="btn-group me-2" role="group" aria-label="Second group">
                    <button type="button" class="btn border">2</button>
                    <button type="button" class="btn border">3</button>
                    <button type="button" class="btn border">4</button>
                </div>
                <div class="btn-group" role="group" aria-label="Third group">
                    <button type="button" class="btn border">5</button>
                </div>
            </div>
        </div>
    )
}
export default Courses