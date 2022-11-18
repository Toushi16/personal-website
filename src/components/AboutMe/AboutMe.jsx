import styles from './index.module.scss';
import Button from '../Button';
import CV from '../../images/Personal-img/DomenicoSeminaraCV.pdf';

const AboutMe = () => {
    return (
        <div className={styles.about}>
            <div className={styles.info}>
                <div className={styles.br}></div>
                <h1>About me</h1>
                <p>Hi! I am Domenico Seminara and I am 22 years old. I have always been interested in the world of pc and programming and in May 2022 I embarked on a programming course (Edgemony) studying and deepening [ HTML, CSS, JS, SCSS, BOOTSRAP, REACT, VUE ] currently constantly growing, keeping myself updated and studying new frameworks.</p>
                <div className={styles.info_button}>
                    <button><a href={CV} download>Curriculum</a></button>
                </div>
            </div>
                <div className={styles.info_pic}>
                    <img src="https://i.pinimg.com/474x/1a/7f/71/1a7f7100e76d07196c0220383b2fc22e.jpg" alt="info-pic" />
                </div>
        </div>
    )
}

export default AboutMe;