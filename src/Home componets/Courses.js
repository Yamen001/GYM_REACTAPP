import { useEffect, useState } from "react"
import "../Home componets/home.css"
import Cards from "../Compoents/global Componets/Cards/CourcesCards"
function Courses(){
    return(
        <div className="Courses">
            <div className="container">
                <div className="courses-container px-2 px-sm-5 px-lg-0">


                    
                    <Cards CardsNumber="5" Section="Courses" />



                </div>
                    <div class="btn-toolbar mx-auto w-25 mt-5 " role="toolbar" aria-label="Toolbar with button groups">
                        <div class="btn-group me-2" role="group" aria-label="First group">
                            <button type="button" class="btn border">1</button>
                        </div>
                        <div class="btn-group me-2" role="group" aria-label="Second group">
                            <button type="button" class="btn border active">2</button>
                            <button type="button" class="btn border">3</button>
                            <button type="button" class="btn border">4</button>
                        </div>
                        <div class="btn-group" role="group" aria-label="Third group">
                            <button type="button" class="btn border">5</button>
                        </div>
                </div>
            </div>
        </div>
    )
}
export default Courses