import styles from "./Swiper.module.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Porteiro from '../../assets/Portaria.png';
import Recepcionista from '../../assets/Recepcionista.png';
import Vigia from '../../assets/Vigia.png';
import Asseio from '../../assets/asseio.png';
import Telefonista from '../../assets/Telefonista.png';
import Copeira from '../../assets/copeira.png'


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
                  spaceBetween: 30,
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
                        <p>Portaria e Controle de Acesso</p>
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
            <p id='quemsomos' className={styles.ref}>QUEMSOMOS</p>
        </div>
        
      );
};