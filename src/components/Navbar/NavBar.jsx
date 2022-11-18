import styles from './index.module.scss';
import { NavLink } from "react-router-dom";
import CV from '../../images/Personal-img/DomenicoSeminaraCV.pdf';

const NavBar = () => {
    return (
        <div className={styles.navbar}>
            <NavLink to='/'>
                <div className={styles.title}>
                    <h1>domenico seminara</h1>
                    <h2>front end developer</h2>
                </div>
            </NavLink>
            <div className={styles.nav_list}>
                <ul>
                    <li>
                        <NavLink to='/'>
                            home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/Projects'>
                            projects
                        </NavLink>
                    </li>
                    <li><a href={CV} download>curriculum</a></li>
                    <li><a href="mailto:domenicoseminara2000@hotmail.com">mail</a></li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar;