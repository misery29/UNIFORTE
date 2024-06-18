import styles from "./Hero.module.css";
import HeroImg from "../../assets/NEGAO.png";


export function Hero() {
return (

    <div className={styles.hero}>
        <div className={styles.heroOverlay}>
            <img src={HeroImg} className={styles.heroImg} alt="seção hero" />
            <div className={styles.button_container}>
                <button className={styles.hero_button1}><a href="#contato">Fale Conosco</a></button>
                <a className={styles.hero_button2} href="#quemsomos"><p>Conheça-nos &rarr;</p></a>
            </div>
        </div>
        <div className={styles.heroTextContainer}>
            <div className={styles.HeroTitle} >
            <h1>UNIFORTE</h1>
            <h1>Eficiência e praticidade</h1>{""}
            <h1>para sua operação.</h1>
            </div>
            <p className={styles.heroText}>Experimente a tranquilidade de uma{""}</p>
            <p>operação otimizada, com soluções</p>
            <p className={styles.heroText}>pensadas para garantir a continuidade e{""}</p> 
            <p>economia dos seus processos.</p>
        </div>
    </div>
);
}