import React, { useEffect } from 'react'
import Chart from "chart.js";
import styles from './Doughnut.module.css';

export default function Doughnut() {
    const chartRef = React.createRef();
    useEffect(()=>{
        const myChartRef = chartRef.current.getContext("2d");
        
        new Chart(myChartRef, {
            type: "doughnut",
            data: {
                datasets: [
                    {
                        label: "Sales",
                        data: [90,10],
                        backgroundColor:["rgba(215,215,0,0.2)", "rgba(0,0,0,0.2)"],
                        borderColor:["rgba(215,215,0,1)", "rgba(0,0,0,1)"]
                    }, 
                
                ]
            },
            options: {
                legend: {
                    display: false
                },
                cutoutPercentage: 92

            }
        });
    }, [])
  
        return (
            <div className={styles.mainDiv}>
                <canvas
                    id="myChart"
                    ref={chartRef}
                />
            </div>
        )
    
}