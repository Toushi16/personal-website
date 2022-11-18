import styles from './index.module.scss'
import Jumbotron from '../../components/Jumbotron';
import AboutMe from '../../components/AboutMe';


export const Home = () => {
    return (
        <div className={styles.Home}>
            <Jumbotron />
            <AboutMe />
        </div>
    )
}

export default Home;