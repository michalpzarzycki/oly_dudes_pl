import React, { useEffect } from 'react'
import Chart from "chart.js";
import styles from './Bar.module.css';

export default function Bar() {
    const chartRef = React.createRef();
    useEffect(()=>{
        const myChartRef = chartRef.current.getContext("2d");
        
        new Chart(myChartRef, {
            type: "bar",
            data: {
                labels: ["Jan", "Feb", "March"],
                datasets: [
                    {
                        label: "Sales",
                        data: [86, 67, 91],
                    }
                ]
            },
            options: {
                legend: {
                    display: false
                },
                scales: {
                    xAxes: [{
                        ticks: {
                            display: false 
                        }
                    }]
                }
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