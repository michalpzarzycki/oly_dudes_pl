import React, { useEffect } from 'react'
import Chart from "chart.js";
import 'chartjs-plugin-labels';
import styles from './Doughnut.module.css';

export default function Doughnut({title="", achieved="0"}) {
    const chartRef = React.createRef();
    useEffect(()=>{
        
        const myChartRef = chartRef.current.getContext("2d");
    
        new Chart(myChartRef, {
            type: "doughnut",
            data: {
                datasets: [
                    {
                        label: 'My First Dataset',
                        data: [Number(achieved),100-Number(achieved)],
                        backgroundColor:["rgba(0,0,0,0.2)", "rgba(215,215,0,0.2)"],
                        borderColor:["rgba(0,0,0,1)", "rgba(215,215,0,1)"],      
                    }, 
                
                ]
            },
                options: {
                    title: {
                        display: true,
                        text: title
                      },
                      cutoutPercentage: 92,
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