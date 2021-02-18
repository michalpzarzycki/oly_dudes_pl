import React from 'react'
import InfoChart from './charts/InfoChart'
import styles from './InfoBar.module.css'
function InfoBar() {
    return (
        <div className={styles.mainDiv}>
            <InfoChart header={"My current weight :"} info={"80kg"}/>
            <InfoChart header={"My BMI :"} info={"100"}/>
            <InfoChart header={"My closest goal :"} info={"75kg snatch"}/>
            <InfoChart header={"My quote :"} info={"Never give up, motherfucker"}/>
        </div>
    )
}

export default InfoBar
