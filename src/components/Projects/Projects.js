import React from 'react';

import {
    BlogCard,
    CardInfo,
    ExternalLinks,
    GridContainer,
    HeaderThree,
    Hr,
    Tag,
    TagList,
    TitleContent,
    UtilityList,
    Img
} from './ProjectsStyles';
import {Section, SectionDivider, SectionTitle} from '../../styles/GlobalComponents';
import {projects} from '../../constants/constants';
import Image from 'next/image'


const Projects = () => (
    <Section nopadding id="projects">
        <SectionDivider/>
        <SectionTitle main>
           Проекты
        </SectionTitle>
        <GridContainer>
            {projects.map(({id, image, title, description, tags, source, visit}) => (
                <BlogCard key={id}>
                    <Image src={image} alt="Logo project"
                           width={500}
                           height={300}/>
                    {/*<Img src={image}/>*/}
                    <TitleContent>
                        <HeaderThree title='true'>
                            {title}
                        </HeaderThree>
                        <Hr />
                    </TitleContent>
                    <CardInfo>{description}</CardInfo>
                    <div>
                        <br />
<TitleContent>Stack</TitleContent>
                        <TagList>
                            {tags.map((tag, i) => (
                                <Tag key={i}>{tag}</Tag>
                            ))}
                        </TagList>
                    </div>
                    <UtilityList>
                        <ExternalLinks href={visit}>
                            Visit
                    </ExternalLinks>
                        <ExternalLinks href={source}>
                           GitHub
                        </ExternalLinks>
                    </UtilityList>
                </BlogCard>
            ))}
        </GridContainer>
    </Section>
);

export default Projects;
