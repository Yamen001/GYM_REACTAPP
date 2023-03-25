import React from 'react'
import ProgressCircle from 'rsuite/esm/Progress/ProgressCircle'
import Linechart from '../Compoents/charts/lineChart'
import './admain.css'
import '../Compoents/charts/CircleProgress.css'
import CircleProgress from '../Compoents/charts/CircleProgress'
import Barchart from '../Compoents/charts/BarChart'
import AdmainBarChart from '../Compoents/charts/AdmainBarChart'
import WebTrafficChart from '../Compoents/charts/WebTraffic'
import AdmainSocialMedia from '../Compoents/global Componets/Cards/AdmainSocialMedia'
import Piechart from '../Compoents/charts/PIeChart'

export default function Activites() {
    return (
        <div className='Activites'>
            <section className='admain-activites-basic-informations my-3'>
                <div className='admain-activites-basic-container justify-content-center d-flex gap-4 flex-wrap'>
                    <div className='admain-basic-box d-flex justify-content-between align-items-center p-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" style={{ backgroundColor: "red" }} className="p-3" width="40" height="40" fill="white" class="bi bi-people-fill" viewBox="0 0 16 16">
                            <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                        </svg>
                        <div>
                            <p>Students</p>
                            <h3>8400</h3>
                        </div>
                    </div>
                    <div className='admain-basic-box d-flex justify-content-between align-items-center p-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" style={{ backgroundColor: "red" }} className="p-3" width="40" height="40" fill="white" class="bi bi-people-fill" viewBox="0 0 16 16">
                            <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                        </svg>
                        <div>
                            <p>Teachers</p>
                            <h3>4000</h3>
                        </div>
                    </div>
                    <div className='admain-basic-box d-flex justify-content-between align-items-center p-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" style={{ backgroundColor: "red" }} className="p-3" width="40" height="40" fill="white" class="bi bi-people-fill" viewBox="0 0 16 16">
                            <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                        </svg>
                        <div>
                            <p>Parents</p>
                            <h3>6000</h3>
                        </div>
                    </div>
                    <div className='admain-basic-box d-flex justify-content-between align-items-center p-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" style={{ backgroundColor: "red" }} className="p-3" width="40" height="40" fill="white" class="bi bi-people-fill" viewBox="0 0 16 16">
                            <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                        </svg>
                        <div>
                            <p>Admains</p>
                            <h3>5</h3>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className='rows d-flex flex-wrap flex-md-nowrap justify-content-md-between justify-content-md-center  gap-3'>
                    <AdmainBarChart />
                    <CircleProgress />
                </div>
            </section>
            <section>
                <Linechart />
            </section>
            <section>
                <WebTrafficChart />
            </section>
            <section>
                <Piechart />
            </section>
            <div className='admain-socialmedia'>
                <AdmainSocialMedia />
            </div>
        </div>
    )
}
