import Doughnut from './charts/Doughnut'
import GraphMenu from './GraphMenu'


import styles from './GoalGraph.module.css'
import GraphClose from './GraphClose'
function GoalGraph({goalTitle="", achieved=""}) {
   
    
    return (
        <div className={styles.mainDiv}>
          <div className={styles.options}>
             <GraphMenu />
             <GraphClose />
          </div>
          <Doughnut title={goalTitle} achieved={achieved} />
        </div>
    )
}

export default GoalGraph
