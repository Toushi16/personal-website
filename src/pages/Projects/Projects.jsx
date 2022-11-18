import styles from './index.module.scss';
import projs from '../../utils/projs';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import "swiper/scss";

export const Projects = () => {
    return (
        <div className={styles.projects}>
            <div className={styles.projects_wrapper}>
                <Swiper
                initialSlide={0}
                slidesPerView={1}
                grabCursor={true}
                slidesPerGroup={1}
                spaceBetween={10}
                modules={[ Autoplay ]}
                autoplay={{
                    delay:5500,
                    disableOnInteraction:false,
                    pauseOnMouseEnter: true,
                }}
                >
                {
                    projs.map((el,i) => (
                        <SwiperSlide key={i}>
                            <img src={el.image} alt="" />
                        </SwiperSlide>
                    ))
                }
                </Swiper>   
            </div>
            <div className={styles.br}></div>
            <div className={styles.projects_link}>
                <button><a href="https://project-south.vercel.app/">Japventure</a></button>
                <button><a href="https://anime-db-theta.vercel.app/">AnimeDB</a></button>
                <button><a href="https://esercizio-play-station.vercel.app/">Playstation</a></button>
                <button><a href="https://vue-dc-comics-jggt.vercel.app/">DC</a></button>
                <button><a href="https://vue-motivation-bg6z.vercel.app/">MaxCoach</a></button>
            </div>
        </div>
    )
}

export default Projects;