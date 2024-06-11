import { useState } from "react";
import styles from "./Forms.module.css";
import Email from "../../assets/email_logo.png";
import Loc from '../../assets/loc_logo.png'
import Hora from '../../assets/hora_logo.png'
import emailjs from '@emailjs/browser'


export function Forms() {
    const [name, SetName] = useState('')
    const [email, SetEmail] = useState('')
    const [message, SetMessage] = useState('')


    function sendEmail(e) {
        e.preventDefault();


        const templateParams = {
            from_name: name,
            email: email,
            message: message
        }

        
        emailjs.send("service_urd8q49", "template_dt9lv5l", templateParams ,"U9HTefYkPAl2X31SV")
        .then((response) => {
            console.log(response.status, response.text)
        })
    }

    return (
        <div className= { styles.Main_contato } id="contato">
            <div className= { styles.contato_svg }>
                <svg className= {styles.svg_contato} width="1200" height="1044" viewBox="0 200 1300 600" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1450.66 1360.93L-165 45.5214L1878.93 -678L1450.66 1360.93Z" fill="#243795" fill-opacity="0.9"/>
                </svg>
            </div>
            <div className= { styles.contato_box }>
                <div className= { styles.contato_info }>
                    <div className={ styles.secao}>
                        <img src= { Email } alt=" email" className= {styles.logo}/>
                        <div className={styles.text_content}>
                            <p>CONTATO</p>
                            <p>contato@uniforteservicos.com</p>
                        </div>
                    </div>
                    <div className={ styles.secao}>
                        <img src= { Loc } alt="onde estamos" className= {styles.logo}/>
                        <div className={styles.text_content}>
                            <p>ONDE ESTAMOS</p>
                            <p>contato@uniforteservicos.com</p>
                        </div>
                    </div>
                    <div className={ styles.secao_hora}>
                        <img src= { Hora } alt="horario" className= {styles.logo_hora}/>
                        <div className={styles.text_content}>
                            <p >HORARIO DE FUNCIONAMENTO</p>
                            <span>Segunda - Sexta</span><br />
                            <p>08:00 - 19:00</p>
                        </div>
                    </div>
                </div>
                <div className= { styles.forms_contato }>
                    <h2>ENTRE EM CONTATO</h2>
                    <form action="" onSubmit={ sendEmail }>
                        <input type="text" placeholder="Nome Completo" value={name} onChange={(e) => SetName(e.target.value)} required/>
                        <input type="email" placeholder="Email" value={email} onChange={(e) => SetEmail(e.target.value)} required/>
                        <textarea placeholder="Escreva o motivo do contato." value={message} onChange={(e) => SetMessage(e.target.value)} required></textarea>
                        <button type="submit">ENVIAR</button>
                    </form>
                </div>
            </div>
        </div>
    );
}