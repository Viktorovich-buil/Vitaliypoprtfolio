import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { text: 'Знание английского языка В1'},
  { text: 'Работа в коллективе', },
  { text: 'Самоорганизация', },
  { text: 'Способность учиться и адаптироваться к изменениям', }
];

const Acomplishments = () => (
    <Section>
        <SectionTitle>
Soft skills
        </SectionTitle>
        <Boxes>
            {data.map((card, index) => (
                <Box key={index}>
                    {/*<BoxNum>{card.number}+</BoxNum>*/}
                    <BoxText>{card.text}</BoxText>
                </Box>
            ))}
        </Boxes>
          </Section>
);

export default Acomplishments;


// const data = [
//     { number: 20, text: 'Open Source Projects'},
//     { number: 1000, text: 'Students', },
//     { number: 1900, text: 'Github Followers', },
//     { number: 5000, text: 'Github Stars', }
// ];
