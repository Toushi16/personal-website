import styles from './index.module.scss';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.social_wrapper}>
                <div className={styles.br}></div>
                <h1>my social</h1>
                <div className={styles.social}>
                    <a href="https://www.instagram.com/domenicoseminara16/"><img src="https://cdn-icons-png.flaticon.com/512/87/87390.png?w=360"/></a>
                    <a href="https://github.com/Toushi16"><img src="https://cdn-icons-png.flaticon.com/512/25/25231.png"/></a>
                    <a href="https://www.linkedin.com/in/domenico-seminara-1a139a238/"><img src="https://iconape.com/wp-content/files/yd/367773/svg/logo-linkedin-logo-icon-png-svg.png"/></a>
                </div>
                <div className={styles.info}>
                    <span>Domenico Seminara</span>
                    <span>Palermo (PA)</span>
                    <span>90121 Italia</span>
                </div>
            </div>
        </div>
    )
}

export default Footer;