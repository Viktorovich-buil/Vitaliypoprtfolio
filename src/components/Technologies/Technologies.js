import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { CgStyle } from 'react-icons/cg';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
 <Section id='tech'>
  <SectionDivider />
  <br/>
  <SectionTitle>Навыки</SectionTitle>
     {/*<SectionText>*/}
     {/*    I work hard*/}
     {/*</SectionText>*/}
     <List>
         <ListItem>
             <DiReact size='3rem' />
             <ListContainer>
                 <ListTitle>Front-End</ListTitle>
                 <listParagraph>
                     Опыт работы с <br/>
                     JS TypeScript React  Next  HTML  SCSS
                 </listParagraph>
             </ListContainer>
         </ListItem>
         <ListItem>
             <DiFirebase size='3rem' />
             <ListContainer>
                 <ListTitle>Back-End</ListTitle>
                 <listParagraph>
                     Опыт работы с <br/>
                     Node, WebSocket и публичными API

                 </listParagraph>
             </ListContainer>
         </ListItem>
         <ListItem>
             <CgStyle size='3rem' />
             <ListContainer>
                 <ListTitle>UI/UX</ListTitle>
                 <listParagraph>
                     Опыт работы с <br/>
                     Figma

                 </listParagraph>
             </ListContainer>
         </ListItem>
     </List>
 </Section>
);

export default Technologies;
