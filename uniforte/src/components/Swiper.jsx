import styles from "./Swiper.module.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import RecepcionistaImg from "../assets/Recepcionista.png";
import PortariaImg from "../assets/Portaria.png";
import VigiaImg from "../assets/Vigia.png";
import ConservacaoImg from "../assets/Conservacao.png";
import TelefonistaImg from "../assets/Telefonista.png";
import CopeiraImg from "../assets/Copeira.png";

export function Swipers () {
    return (
        <div className={styles.Swiper_container}>
            <h1>Nossos Serviços</h1>
            <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={-220}
            slidesPerView={4}
            navigation={{
                color:"black",
            }}
            loop
            autoplay={{ delay: 3000 }}
            >
                
            <SwiperSlide style={{overflow:"visible"}}>
            <div className={styles.CardsContainer}>
                <img src={RecepcionistaImg} alt="Imagem de uma recepcionista" />
                <div className={styles.CardOverlay}></div>
                <button className={styles.CardButton}>Fale Conosco</button>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className={styles.CardsContainer}>
                <img src={PortariaImg} alt="Imagem de um porteiro" />
                <div className={styles.CardOverlay}></div>
                <button className={styles.CardButton}>Fale Conosco</button>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className={styles.CardsContainer} id="vigia" >
                <img src={VigiaImg} alt="Imagem de um vigia"/>
                <div className={styles.CardOverlay}></div>
                <button className={styles.CardButton}>Fale Conosco</button>
            </div>            
            </SwiperSlide>
            <SwiperSlide>
            <div className={styles.CardsContainer}>
                <img src={ConservacaoImg} alt="Imagem de uma faxineira" />
                <div className={styles.CardOverlay}></div>
                <button className={styles.CardButton}>Fale Conosco</button>
            </div>            
            </SwiperSlide>
            <SwiperSlide>
            <div className={styles.CardsContainer}>
                <img src={TelefonistaImg} alt="Imagem de uma telefonista" />
                <div className={styles.CardOverlay}></div>
                <button className={styles.CardButton}>Fale Conosco</button>
            </div>            
            </SwiperSlide>
            <SwiperSlide>
            <div className={styles.CardsContainer}>
                <img src={CopeiraImg} alt="Imagem de uma copeira" />
                <div className={styles.CardOverlay}></div>
                <button className={styles.CardButton}>Fale Conosco</button>
            </div>            
            </SwiperSlide>
            </Swiper>
            <div className={styles.svg}>
                <svg width="426" height="444" viewBox="0 0 426 444" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M425.651 228.132L0.232166 443.692L6.65791 0.333605L425.651 228.132Z" fill="#243795"/>
                </svg>
            </div>

            <div className={styles.svg2}>
                <svg width="921" height="254" viewBox="0 0 921 254" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M351.5 56L555.5 205.5H99L351.5 56Z" fill="#464646" fill-opacity="0.25"/>
                    <path d="M556 0L921 206.5H199.5L556 0Z" fill="#151515" fill-opacity="0.25"/>
                </svg>
            </div>

        </div>
      );
};