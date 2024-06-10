import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';
import styles from './AccordionComponent.module.css';

import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';

export function AccordionComponent() {
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className={styles.accordionContainer}>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={{ border: '1px solid #ddd', mb: 1, boxShadow: 'none' }}>
                <AccordionSummary
                    expandIcon={<ExpandCircleDownOutlinedIcon sx={{ fontSize: 48,color: '#000000', }} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Nossa missão</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={{ fontSize: 20,color: '#000000', fontWeight: '400', }}>
                        Atender as expectativas dos nossos clientes, através de profissionais qualificados e prestar um excelente trabalho de forma transparente, tendo como ideal a lealdade e o sigilo absoluto, com nossas alianças empresariais e funcionários.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} sx={{ border: '1px solid #ddd', mb: 1, boxShadow: 'none' }}>
                <AccordionSummary
                    expandIcon={<ExpandCircleDownOutlinedIcon sx={{ fontSize: 48,color: '#000000', }}/>}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>Organização e Estrutura</Typography>
                </AccordionSummary>
                <AccordionDetails >
                    <Typography sx={{ fontSize: 20,color: '#000000', fontWeight: '400', }}>
                        Trabalhamos na gestão das atividades-meios, possibilitando ao cliente dedicação e foco no seu próprio negócio.<br></br><br></br>Fiscalizamos todos os postos em que prestamos serviços, com avaliações periódicas de desempenho, boletins de visita e avaliação de qualidade de serviço prestado.<br></br><br></br>Plantão permanente de reservas para atendimentos de substituição, com atendimento telefônico e sistema de rádio para contato com nossos supervisores e coordenadores, dispondo de viaturas para atendimento emergencial.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} sx={{ border: '1px solid #ddd', mb: 1, boxShadow: 'none' }}>
                <AccordionSummary
                    expandIcon={<ExpandCircleDownOutlinedIcon sx={{ fontSize: 48,color: '#000000', }}/>}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                >
                    <Typography>Integridade e Transparência</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={{ fontSize: 20,color: '#000000', fontWeight: '400', }}>
                        Terceirizar não é apenas entregar à outra entidade a guarda de seu patrimônio, é, sobretudo:<br></br><br></br> Obter mais produtividade em seu próprio negócio, e ganhar com transferências das responsabilidades de toda possível ocorrência.<br></br><br></br>Lucrar com a passagem das responsabilidades trabalhistas para o contratado, se livrando da co-responsabilidade, sobre as guias dos impostos mensalmente.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} sx={{ border: '1px solid #ddd', mb: 1, boxShadow: 'none' }}>
                <AccordionSummary
                    expandIcon={<ExpandCircleDownOutlinedIcon sx={{ fontSize: 48,color: '#000000', }}/>}
                    aria-controls="panel4a-content"
                    id="panel4a-header"
                >
                    <Typography>Valores</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={{ fontSize: 20,color: '#000000', fontWeight: '400', }}>
                        Trabalhar em equipe.<br></br><br></br>
                        Colocando as necessidades de nossos clientes em primeiro plano.<br></br><br></br>
                        Conduzindo as nossas ações de forma íntegra, conforme a moral e a ética.<br></br><br></br>
                        Estamos em desenvolvimento em meio ao habitat empreendedor!
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
