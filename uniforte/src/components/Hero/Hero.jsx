import styles from "./Hero.module.css";
import HeroImg from "../../assets/NEGAO.png";


export function Hero() {
return (

    <div className={styles.hero}>
        <div className={styles.heroOverlay}>
            <img src={HeroImg} className={styles.heroImg} alt="seção hero" />
            <div className={styles.button_container}>
                <button className={styles.hero_button1}>Fale Conosco</button>
                <a className={styles.hero_button2}><p>Conheça-nos &rarr;</p></a>
            </div>
        </div>
        <div className={styles.heroTextContainer}>
            <h1 className={styles.heroText}>UNIFORTE</h1>
            <h1 className={styles.heroText}>Eficiência e praticidade</h1>{""}
            <h1>para sua operação.</h1>
            <p className={styles.heroText}>Experimente a tranquilidade de uma{""}</p>
            <p>operação otimizada, com soluções</p>
            <p className={styles.heroText}>pensadas para garantir a continuidade e{""}</p> 
            <p>economia dos seus processos.</p>
        </div>
    </div>
);
}