import styles from "./Swiper.module.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Porteiro from '../assets/porteiro.png';
import Recepcionista from '../assets/recepcionista.png';
import Vigia from '../assets/vigia.png';
import Asseio from '../assets/asseio.png';
import Telefonista from '../assets/telefonista.png';
import Copeira from '../assets/copeira.png'
import { Navigation, Pagination } from 'swiper/modules';


export function Swipers () {
    return (
        <div className={styles.Swiper_conteiner}>
            <h1>Nossos Serviços</h1>
            <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={10}
            slidesPerView={1}
            navigation
            pagination={{ dynamicBullets: true}}
            breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
              }}
            >
                <div className={styles.card}>
                    <SwiperSlide>
                        <p>Recepcionista</p>
                        <img className= {styles.Swiper_content} src= { Recepcionista }  alt="Recepcionista" />
                        <div className= { styles.button_content }>
                            <a href="#" className= { styles.botao }>botao</a>
                        </div>
                     
                    </SwiperSlide>
                </div>
                <div className={styles.card}>
                    <SwiperSlide>
                        <p>Portaria e Controle de acesso</p>
                        <img className= {styles.Swiper_content} src= { Porteiro } alt="Slide 1" />
                        <div className= { styles.button_content }>
                            <a href="#" className= { styles.botao }>botao</a>
                        </div> 
                        <br />
                        <br />
                        <br />
                    </SwiperSlide>
                </div>
                <div className={styles.card}>
                    <SwiperSlide>
                        <p>Vigia Noturno</p>
                        <img className= {styles.Swiper_content} src= { Vigia } alt="Vigia Noturno" />
                        <div className= { styles.button_content }>
                            <a href="#" className= { styles.botao }>botao</a>
                        </div> 
                    </SwiperSlide>
                </div>
                <div className={styles.card}>
                    <SwiperSlide>
                        <p>Asseio e Conservação</p>
                        <img className= {styles.Swiper_content} src= { Asseio } alt="Asseio e conservação" />
                        <div className= { styles.button_content }>
                            <a href="#" className= { styles.botao }>botao</a>
                        </div> 
                    </SwiperSlide>
                </div>
                <div className={styles.card}>
                    <SwiperSlide>
                        <p>Telefonista</p>
                        <img className= {styles.Swiper_content} src= { Telefonista } alt="Telefonista" />
                        <div className= { styles.button_content }>
                            <a href="#" className= { styles.botao }>botao</a>
                        </div> 
                    </SwiperSlide>
                </div>
                <div className={styles.card}>
                    <SwiperSlide>
                        <p>Copeira</p>
                        <img className= {styles.Swiper_content} src= { Copeira } alt="Copeira" />
                        <div className= { styles.button_content }>
                            <a href="#" className= { styles.botao }>botao</a>
                        </div> 
                    </SwiperSlide>
                </div>
            </Swiper>
        </div>
        
      );
};