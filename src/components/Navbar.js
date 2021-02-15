import styles from './Navbar.module.css';

function Navbar() {
    return (
        <nav className={styles.mainDiv}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Weightlifting_pictogram.svg/1200px-Weightlifting_pictogram.svg.png"/>
            <input type="text" placeholder="Search" className={styles.search}/>
            <ul className={styles.functions}>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <img src="https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png" alt="Profile Picture"/>
        </nav>
    )
}

export default Navbar
