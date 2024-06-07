import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import styles from './AccordionComponent.module.css';

import { styled } from '@mui/system';

const BlackOutlinedWhiteBackgroundIcon = styled(ExpandCircleDownIcon)({
  stroke:'black',
  fill: 'white',
});

export function AccordionComponent() {
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className={styles.accordionContainer}>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={{ border: '1px solid #ddd', mb: 1, boxShadow: 'none' }}>
                <AccordionSummary
                    expandIcon={<BlackOutlinedWhiteBackgroundIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx={{ borderBottom: '1px solid #ddd' }}
                >
                    <Typography>Nossa missão</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Atender as expectativas dos nossos clientes, através de profissionais qualificados e prestar um excelente trabalho de forma transparente, tendo como ideal a lealdade e o sigilo absoluto, com nossas alianças empresariais e funcionários.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} sx={{ border: '1px solid #ddd', mb: 1, boxShadow: 'none' }}>
                <AccordionSummary
                    expandIcon={<BlackOutlinedWhiteBackgroundIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    sx={{ borderBottom: '1px solid #ddd' }}
                >
                    <Typography>Organização e Estrutura</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Trabalhamos na gestão das atividades-meios, possibilitando ao cliente dedicação e foco no seu próprio negócio. Fiscalização em todos os postos em que prestamos serviços. Avaliações periódicas de desempenho, boletins de visita e avaliação de qualidade de serviço prestado. Plantão permanente de reservas para atendimentos de substituição, com atendimento telefônico e sistema de rádio para contato com nossos supervisores e coordenadores. Treinamento e reciclagem de todos profissionais. Dispondo de viaturas para atendimento emergencial.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} sx={{ border: '1px solid #ddd', mb: 1, boxShadow: 'none' }}>
                <AccordionSummary
                    expandIcon={<BlackOutlinedWhiteBackgroundIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                    sx={{ borderBottom: '1px solid #ddd' }}
                >
                    <Typography>Integridade e Transparência</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Terceirizar não é apenas entregar à outra entidade a guarda de seu patrimônio. É, sobretudo: Ganhar com transferências das responsabilidades de toda possível ocorrência. Lucrar com a passagem das responsabilidades trabalhistas para o contratado. Para se livrar da co-responsabilidade, sobre as guias dos impostos mensalmente. Obter mais produtividade em seu próprio negócio.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} sx={{ border: '1px solid #ddd', mb: 1, boxShadow: 'none' }}>
                <AccordionSummary
                    expandIcon={<BlackOutlinedWhiteBackgroundIcon />}
                    aria-controls="panel4a-content"
                    id="panel4a-header"
                    sx={{ borderBottom: '1px solid #ddd' }}
                >
                    <Typography>Valores</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        » Trabalhar em equipe.
                        » Colocando as necessidades de nossos clientes em primeiro plano.
                        » Conduzindo as nossas ações de forma íntegra, conforme a moral e a ética.
                        » Estamos em desenvolvimento em meio ao habitat empreendedor!
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
