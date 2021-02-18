import React, { useEffect } from 'react'
import Chart from "chart.js";
import 'chartjs-plugin-labels';
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
                        data: [90,10],
                        backgroundColor:["rgba(215,215,0,0.2)", "rgba(0,0,0,0.2)"],
                        borderColor:["rgba(215,215,0,1)", "rgba(0,0,0,1)"],      
                    }, 
                
                ]
            },
          
                options: {
                    plugins: {
                        doughnutlabel: {
                            labels: [
                                {
                                   
                                  
                                }
                            ]
                        }
                    }
                
             
                // legend: {
                //     display: false
                // },
                // cutoutPercentage: 92,
                // centerText: {
                //     display: true,
                //     text: "280"
                // }

            }
        });
    }, [])
  
        return (
            <div className={styles.mainDiv}>
                <div className={styles.value}>90</div>
                <canvas
                    id="myChart"
                    ref={chartRef}
                />
            </div>
        )
    
}