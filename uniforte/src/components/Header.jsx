import styles from "./Header.module.css";
import UniforteLogo from "../assets/uniforte.svg";

function NavItem({ children, href }) {
  return (
    <li>
      <a href={href}>{children}</a>
    </li>
  );
}

export function Header() {
  return (
    <header className={styles.header}>
      <img src={UniforteLogo} alt="uniforte logo" />
      <ul>
        <NavItem href="#">Início</NavItem>
        <NavItem href="#">Serviços</NavItem>
        <NavItem href="#">Quem Somos</NavItem>
        </ul>
        <div className={styles.buttonContainer}>
            <button>
                <p>Fale Conosco</p>
             </button>
        </div>
    </header>
  );
}