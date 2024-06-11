// QuemSomos.jsx
import React from 'react';
import BackgroundSVG from './QuemSomosSvg.jsx';
import styles from './QuemSomos.module.css';
import { AccordionComponent } from '../Accordion/AccordionComponent.jsx'
import QuemSomosImg from "../../assets/QuemSomosImg.png";



export function QuemSomos() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h1>QUEM<br></br>SOMOS<br></br>NÓS</h1>
                <p>
                    A UNIFORTE, dedica-se à prestação de serviços terceirizados, provendo a melhor composição de serviços e tecnologias para atender as demandas de nossos clientes, minimizando riscos e custos com planejamento para aliarmos qualidade, rapidez e preço justo.
                </p>
                <br></br>
                <br></br>
                <p>
                    Proporcionamos sempre a excelência em soluções e qualidade no atendimento, cumprindo nossas obrigações contratuais, fiscais e trabalhistas.
                </p>
                </div>
                <img src={QuemSomosImg} className={styles.QuemSomosImg}></img>
                <div className={styles.accordion}>
                    <AccordionComponent />
                </div>
            <div className={styles.background}>
                <BackgroundSVG />
            </div>
        </div>
    );
}