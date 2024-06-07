import styles from "./Swiper.module.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination } from 'swiper/modules';


export function Swipers () {
    return (
        <div className={styles.Swiper_conteiner}>
            <h1>Nossos Serviços</h1>
            <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={-350}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            >
            <SwiperSlide>
                <img className= {styles.Recepcionista} src="https://via.placeholder.com/300x450" alt="Slide 1" />
            </SwiperSlide>
            <SwiperSlide>
                <img className= {styles.Portaria} src="https://via.placeholder.com/300x450" alt="Slide 2" />
            </SwiperSlide>
            <SwiperSlide>
                <img className= {styles.Vigia} src="https://via.placeholder.com/300x450" alt="Slide 3" />
            </SwiperSlide>
            <SwiperSlide>
                <img className= {styles.Asseio} src="https://via.placeholder.com/300x450" alt="Slide 4" />
            </SwiperSlide>
            <SwiperSlide>
                <img className= {styles.Telefonista} src="https://via.placeholder.com/300x450" alt="Slide 4" />
            </SwiperSlide>
            <SwiperSlide>
                <img className= {styles.Copeira} src="https://via.placeholder.com/300x450" alt="Slide 4" />
            </SwiperSlide>
            </Swiper>
        </div>
      );
};