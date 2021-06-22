import React from 'react';
import {AiFillGithub, AiFillInstagram, AiFillLinkedin} from 'react-icons/ai';

import {Div3, SocialIcons} from '../Header/HeaderStyles';
import {
    CompanyContainer,
    FooterWrapper,
    LinkColumn,
    LinkItem,
    LinkList,
    LinkTitle,
    Slogan,
    SocialContainer,
    SocialIconsContainer
} from './FooterStyles';

const Footer = () => {
    return (
        <FooterWrapper>
            <LinkList>
                <LinkColumn>
                    <LinkTitle>Call</LinkTitle>
                    <LinkItem href="tel: 8927110-11-06">+7 (927) 110-11-06</LinkItem>
                </LinkColumn>
            <LinkColumn>
                <LinkTitle>Email</LinkTitle>
                <LinkItem href="mailto: viktorovich85@inbox.ru">Viktorovich85@inbox.ru</LinkItem>
                </LinkColumn>
            </LinkList>
            <SocialIconsContainer>
                <CompanyContainer>
                    <Slogan>Проблем нет, есть задачи</Slogan>
                </CompanyContainer>

                <SocialIcons href="https://github.com/Viktorovich-buil?tab=repositories">
                    <AiFillGithub size="3rem"/>
                </SocialIcons> <SocialIcons href="https://www.instagram.com/shiriaev958/">
                <AiFillInstagram size="3rem"/>
            </SocialIcons>
            </SocialIconsContainer>
        </FooterWrapper>
    );
};

export default Footer;
