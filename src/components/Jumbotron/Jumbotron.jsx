import styles from './index.module.scss';

const Jumbotron = () => {
    return (
        <div className={styles.jumbo}>
            <div className={styles.info}>
                <h1>do you want to create a web page?</h1>
                <h2>do it the best way!</h2>
            </div>
        </div>
    )
}

export default Jumbotron;