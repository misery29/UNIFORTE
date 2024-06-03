import styles from "./Header.module.css";
import UniforteLogo from "../assets/uniforte.svg";

export function Header() {
return (
    <header className={styles.header}>
    <img src={UniforteLogo}  alt="uniforte logo" />
    <ul>
    <a>Início</a>
    <a>Serviços</a>
    <a>Quem Somos</a>
    <button><p>Fale Conosco</p></button>
    </ul>
    </header>
);
}