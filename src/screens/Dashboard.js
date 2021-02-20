import React from 'react'
import Bar from '../components/charts/Bar'
import Doughnut from '../components/charts/Doughnut'
import Line from '../components/charts/Line'
import GoalGraph from '../components/GoalGraph'
import InfoBar from '../components/InfoBar'
import styles from './Dashboard.module.css'
function Dashboard() {
    return (
        <div className={styles.mainDiv}>
          <InfoBar />
          <div className={styles.goalSection}>
          <GoalGraph goalTitle="Snatch" achieved="85"/>
          <GoalGraph goalTitle="Clean&Jerk" achieved="50"/>
          <GoalGraph goalTitle="Back squat" achieved="35"/>
          </div>
     
          <Line />
          <Bar />
          <Doughnut />
        
        </div>
    )
}

export default Dashboard
