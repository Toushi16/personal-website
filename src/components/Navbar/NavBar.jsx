import styles from './index.module.scss';
import { NavLink } from "react-router-dom";

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
                        <NavLink className={({isActive}) => isActive ? styles.active : ''} to='/'>
                            home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive}) => isActive ? styles.active : ''} to='/Projects'>
                            projects
                        </NavLink>
                    </li>
                    <li ><a href="mailto:domenicoseminara2000@hotmail.com">mail</a></li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar;