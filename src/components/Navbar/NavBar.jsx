import styles from './index.module.scss';
import { NavLink } from "react-router-dom";
import HamburgherModal from '../HamburgherModal';
import { useState } from 'react';

const NavBar = () => {
    const [modalVisib, setModalVisib] = useState(false);

    const onHandleClick = () => {
        setModalVisib(!modalVisib)
    }

    return (
<>
        <div className={styles.navbar_desktop}>
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

            <div className={styles.nav_list_hamburgher}>
                    <div onClick={onHandleClick} className={styles.hamburgher_logo}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
                        </svg>
                    </div>
            </div>
        </div>
            {
                modalVisib && <HamburgherModal setModalVisib={setModalVisib} />
            }
</>
    )
}

export default NavBar;