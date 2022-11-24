import styles from './index.module.scss';
import { NavLink } from "react-router-dom";

const HamburgherModal = ({setModalVisib}) => {

    const onHandleClick = () => {
        setModalVisib(false)
    }
    
    return (
        <div className={styles.HamburgherModal}>
            <ul>
                <li onClick={onHandleClick}>
                    <NavLink className={({isActive}) => isActive ? styles.active : ''} to='/'>
                        home
                    </NavLink>
                </li>
                <li onClick={onHandleClick}>
                    <NavLink className={({isActive}) => isActive ? styles.active : ''} to='/Projects'>
                        projects
                    </NavLink>
                </li>
                <li onClick={onHandleClick}><a href="mailto:domenicoseminara2000@hotmail.com">mail</a></li>
            </ul>
        </div>
    )
}

export default HamburgherModal;