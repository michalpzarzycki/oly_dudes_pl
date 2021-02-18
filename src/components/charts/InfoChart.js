import styles from './InfoChart.module.css'

function InfoChart() {
    return (
        <div className={styles.mainDiv}>
            <h1 className={styles.header}>Your current weight:</h1>
            <div className={styles.infoBox}>
                <p className={styles.info}>80kg</p>
            </div>
        </div>
    )
}

export default InfoChart
