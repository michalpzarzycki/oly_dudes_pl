import styles from './InfoChart.module.css'

function InfoChart({header, info}) {
    return (
        <div className={styles.mainDiv}>
            <h1 className={styles.header}>{header}</h1>
            <div className={styles.infoBox}>
                <p className={styles.info}>{info}</p>
            </div>
        </div>
    )
}

export default InfoChart
