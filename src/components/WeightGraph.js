import styles from './WeightGraph.module.css';
import { Line } from '@reactchartjs/react-chart.js'

const data = {
    labels: ['', '', '', '', '', '', ''],
    datasets: [
        {
            label: 'Weight Tracker',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, "65.4", 63.9, 64.9, 66.2, 67, 69.6]
        }
    ]
};




function WeightGraph() {
    return (
        <div className={styles.mainDiv}>
            <Line data={data} />
        </div>
    )
}

export default WeightGraph
