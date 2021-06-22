import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
<LeftSection>
  <SectionTitle main center>
    Виталий Ширяев
  </SectionTitle>
  <SectionText>
    Добрый день. <br />
    Я начинающий веб-разработчик. После достижения "потолка" в облати строительства решил сменить профессию в которой знания и умения действительно ценнятся. Есть огромное желание работь в web-разработке. Background на руководящей должности помогает структуированно подходить к вопросам освоения новой профессии.
  </SectionText>
  {/*<Button onClick = {()=> window.location = 'https://google.com'}>*/}
  {/*  Learn More*/}
  {/*</Button>*/}
</LeftSection>
  </Section>
);

export default Hero;
