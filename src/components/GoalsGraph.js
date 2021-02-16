import Chart from "chart.js";
import styles from './GoalsGraph.module.css'
function GoalsGraph() {
    const data = {
        
        datasets: [
          {
            label: '# of Votes',
            data: [10,90],
            backgroundColor: [
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
        
          },
        ],
      }
    
    return (
<></>
    )
}

export default GoalsGraph
