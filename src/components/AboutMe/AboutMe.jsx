import styles from './index.module.scss';
import Button from '../Button';
import CV from '../../images/Personal-img/DomenicoSeminaraCV.pdf';

const AboutMe = () => {
    return (
        <div className={styles.about}>
            <div className={styles.info}>
                <div className={styles.br}></div>
                <h1>About me</h1>
                <p>Hi! My name is Domenico Seminara, In 2021 I began to approach the world of the web and became more and more interested in front-end work. In 2022 I undertook a course of study with Edgemony to broaden my knowledge and my skills.</p>
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