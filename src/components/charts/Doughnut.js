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
                labels: ["Jan", "Feb", "March"],
                datasets: [
                    {
                        label: "Sales",
                        data: [86, 67, 91],
                    }
                ]
            },
            options: {
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