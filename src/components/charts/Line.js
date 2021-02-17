import React, { useEffect } from 'react'
import Chart from "chart.js";
import styles from './Line.module.css';

export default function Line() {
    const chartRef = React.createRef();
    useEffect(()=>{
        const myChartRef = chartRef.current.getContext("2d");
        var ctx = document.getElementById('myChart').getContext('2d');
        var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
        gradientStroke.addColorStop(0, "#80b6f4");
        gradientStroke.addColorStop(0.2, "#94d973");
        gradientStroke.addColorStop(0.5, "#fad874");
        gradientStroke.addColorStop(1, "#f49080");
                new Chart(myChartRef, {
            type: "line",
            data: {
                labels: ["Jan", "Feb", "March",1,1,1,1,1,1,1,1,1,],
                datasets: [
                    {   label: false,
                        fill: "start",
                        borderColor:               gradientStroke,
                        pointBorderColor:          gradientStroke,
                        pointBackgroundColor:      gradientStroke,
                        pointHoverBackgroundColor: gradientStroke,
                        pointHoverBorderColor:     gradientStroke,
                        data: [86, 90, 91,90,90,90,90,90],
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