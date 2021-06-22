import Link from 'next/link';
import React from 'react';
import {AiFillGithub, AiFillInstagram, AiFillLinkedin} from 'react-icons/ai';
import {DiCssdeck, DiCode} from 'react-icons/di';

import {Container, Div1, Div2, Div3, NavLink, SocialIcons, Span} from './HeaderStyles';

const Header = () => (
    <Container>
        <Div1>
            <Link href='/'>
                <a style={{display: 'flex', alignItems: "center", color: "white", marginBottom: '10px'}}>
                    <DiCode size="4rem"/><Span>Портфолио</Span>
                </a>

            </Link>
        </Div1>
        <Div2 >
            <li >
                <Link href="#projects" >
                    <NavLink >Проекты</NavLink>
                </Link>
            </li>
            <li>
                <Link href="#tech">
                    <NavLink>Навыки</NavLink>
                </Link>
            </li>
            <li>
                <Link href="#about">
                    <NavLink>Обо мне</NavLink>
                </Link>
            </li>
        </Div2>
        <Div3>
            <SocialIcons href="https://github.com/Viktorovich-buil?tab=repositories">
                <AiFillGithub size="3rem"/>
            </SocialIcons> <SocialIcons href="https://www.instagram.com/shiriaev958/">
                <AiFillInstagram size="3rem"/>
            </SocialIcons>
        </Div3>
    </Container>
);

export default Header;
