import React from 'react';
import styles from './Footer.module.css';
import Logo from "../../assets/uniforte.svg";

export function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_content}>
                <div className={styles.logo_section}>
                    <img src={Logo} alt="Logo da Empresa" className={styles.logo}/>
                </div>
                <div className={styles.links_section}>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">Sobre</a></li>
                        <li><a href="#services">Serviços</a></li>
                        <li><a href="#contact">Contato</a></li>
                    </ul>
                </div>
                <div className={styles.copyright_section}>
                    <p>&copy; 2024 Sua Empresa. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
