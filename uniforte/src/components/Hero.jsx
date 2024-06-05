import styles from "./Hero.module.css";
import HeroImg from "../assets/hero-img.png";
import HeroSVG from "../assets/hero-svg.svg";


export function Hero() {
return (

    <div className={styles.hero}>
    <div classname={styles.heroOverlay}>
    <img src={HeroImg} className={styles.heroImg} alt="seção hero" />
    <img src={HeroSVG} className={styles.heroSvg}/>
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