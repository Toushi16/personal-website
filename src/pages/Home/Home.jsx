import styles from './index.module.scss'
import Jumbotron from '../../components/Jumbotron';
import AboutMe from '../../components/AboutMe';
import Swal from 'sweetalert2';
import { useEffect } from 'react';

export const Home = () => {
    useEffect(() => {
        new Swal("Work in progress","","warning")
    },[]);

    return (
        <div className={styles.Home}>
            <Jumbotron />
            <AboutMe />
        </div>
    )
}

export default Home;