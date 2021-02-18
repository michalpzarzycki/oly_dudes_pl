import React from 'react'
import InfoChart from './charts/InfoChart'
import styles from './InfoBar.module.css'
function InfoBar() {
    return (
        <div className={styles.mainDiv}>
            <InfoChart />
            <InfoChart />
            <InfoChart />
            <InfoChart />
        </div>
    )
}

export default InfoBar
