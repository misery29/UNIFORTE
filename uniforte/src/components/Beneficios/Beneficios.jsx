import React from 'react';
import styles from './Beneficios.module.css';
import TrendingDownOutlinedIcon from '@mui/icons-material/TrendingDownOutlined';
import CrisisAlertOutlinedIcon from '@mui/icons-material/CrisisAlertOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import HeightOutlinedIcon from '@mui/icons-material/HeightOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';


export function Beneficios() {
    return (
        <div className={styles.container}>
            <p className={styles.description}>
                Descubra como nossos serviços podem transformar a gestão do seu negócio,<br></br>
                proporcionando a tranquilidade e a eficiência que você merece.
            </p>
            <div className={styles.benefitsGrid}>
                <div className={styles.benefit}>
                    <div className={styles.icon}><TrendingDownOutlinedIcon sx={{ fontSize: 40,color: '#000000', }}/></div>
                    <p>Redução de Custos</p>
                </div>
                <div className={styles.benefit}>
                    <div className={styles.icon}><HeightOutlinedIcon sx={{ fontSize: 40,color: '#000000', }}/></div>
                    <p>Flexibilidade e Escalabilidade</p>
                </div>
                <div className={styles.benefit}>
                    <div className={styles.icon}><CrisisAlertOutlinedIcon sx={{ fontSize: 36,color: '#000000', }}/></div>
                    <p>Foco no Core Business</p>
                </div>
                <div className={styles.benefit}>
                    <div className={styles.icon}><RemoveCircleOutlineOutlinedIcon sx={{ fontSize: 40,color: '#000000', }}/></div>
                    <p>Redução de Riscos</p>
                </div>
                <div className={styles.benefit}>
                    <div className={styles.icon}><SchoolOutlinedIcon sx={{ fontSize: 40,color: '#000000', }}/></div>
                    <p>Acesso a Especialistas</p>
                </div>
                <div className={styles.benefit}>
                    <div className={styles.icon}><TrendingUpOutlinedIcon sx={{ fontSize: 40,color: '#000000', }}/></div>
                    <p id="servicos">Maior Eficiência Operacional</p>
                </div>
            </div>
        </div>
    );
}