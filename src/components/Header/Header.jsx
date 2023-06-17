import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import SwitchLanguage from '../../utils/SwitchLanguage/SwitchLanguage';
import ChangeTheme from '../../utils/ChangeTheme/ChangeTheme';
import DownloadCV from '../../utils/DownloadCV/DownloadCV';

const StyledHeader = styled.header`
    width: 100%;
    position: fixed;
    bottom: 1rem;
    box-shadow: 0 10px 20px rgba(0 0 0 / 10%);
    background: var(--body-color);
    transition: 300ms;
    z-index: 10;
    padding: 0 1rem;
    box-shadow: none;
    translate: 0 64px;

    &.visible {
        translate: 0;
    }
    @media (min-width: 1023px) {
        top: 0;
        bottom: initial;
        transform: 0.4s;
        translate: 0 -80px;

        &.visible {
            top: 0;
            translate: 0;
        }
        &.bg-header {
            box-shadow: 0 4px 20px hsla(207, 24%, 35%, 0.1);
        }
    }
    nav {
        height: calc(var(--header-height) + 0.5rem);
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: none;
        /* background-color: var(--body-color); */
        box-shadow: 0 4px 20px hsla(207, 24%, 35%, 0.1);
        padding-inline: 1.5rem;
        border-radius: 3rem;
    }

    .nav {
        @media (min-width: 1023px) {
            width: initial;
            height: calc(var(--header-height) + 1.5rem);
            box-shadow: none;
            border-radius: 0;
            column-gap: 3rem;
            margin-inline: 1.5rem;
            padding: 0;
            margin: 0 auto;
        }

        &__logo,
        &__toggle,
        &__close {
            color: var(--title-color);
        }

        &__logo {
            font-family: var(--title-font);
            font-weight: var(--font-medium);
        }

        &__toggle {
            display: flex;
            font-size: 1.25rem;
            cursor: pointer;

            @media (min-width: 1023px) {
                display: none;
            }
        }

        &__list {
            grid-template-columns: repeat(3, max-content);
            justify-content: center;
            gap: 2rem 3rem;

            @media (max-width: 340px) {
                gap: 1rem 1.25rem;
            }
            @media (min-width: 1023px) {
                display: flex;
                column-gap: 3rem;
            }
        }

        &__link {
            display: flex;
            flex-direction: column;
            align-items: center;
            row-gap: 0.25rem;
            font-size: var(--smaller-font-size);
            color: var(--text-color-light);
            transition: color 0.3s;

            &:hover {
                color: var(--title-color);
            }

            @media (min-width: 1023px) {
                font-size: var(--normal-font-size);
            }

            i {
                font-size: 1.25rem;
                @media (min-width: 1023px) {
                    display: none;
                }
            }
        }

        &__close {
            position: absolute;
            right: 1.5rem;
            bottom: 0.7rem;
            cursor: pointer;

            @media (min-width: 1023px) {
                display: none;
            }
        }

        &__menu {
            @media (max-width: 340px) {
                padding-bottom: 4rem;
            }
            @media screen and (max-width: 1023px) {
                position: fixed;
                width: 100%;
                left: 0;
                right: 0;
                bottom: -20rem;
                margin: 0 auto;
                background-color: var(--body-color);
                box-shadow: 0 4px 20px hsla(207, 24%, 35%, 0.1);
                padding: 2rem 1.5rem 5rem;
                border-radius: 2rem;
                transition: bottom 0.3s;
            }
            @media (min-width: 1024px) {
                width: initial;
                margin: 0 auto;
                /* background-color: var(--body-color); */
                background: transparent;
                transition: background 0.4s;
            }
        }

        &__buttons {
            display: flex;
            align-items: center;
            column-gap: 1.5rem;
        }
    }

    .show-menu {
        bottom: 0rem;
    }
`;

const Header = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [toggleNavShadow, setToggleNavShadow] = useState(false);
    const { t } = useTranslation();

    const navMenu = document.getElementById('nav-menu');
    const navLink = document.querySelectorAll('.nav__link');

    const lastScrollTop = useRef(0);
    const [isNavbarVisible, setIsNavbarVisible] = useState(true);

    const linkAction = () => {
        navMenu.classList.remove('show-menu');
        navLink.forEach((n) => n.addEventListener('click', linkAction));
    };

    const handleScroll = () => {
        const { pageYOffset } = window;
        if (pageYOffset > lastScrollTop.current) {
            setIsNavbarVisible(false);
        } else if (pageYOffset < lastScrollTop.current) {
            setIsNavbarVisible(true);
        }
        lastScrollTop.current = pageYOffset;
    };

    const handleScrollShadow = () => {
        const { pageYOffset } = window;
        if (pageYOffset >= 50) {
            setToggleNavShadow(true);
        } else {
            setToggleNavShadow(false);
        }
    };

    useEffect(() => {
        linkAction;
        window.addEventListener('scroll', handleScrollShadow, {
            passive: true,
        });
        window.addEventListener('scroll', handleScroll, { passive: true });
    }, [linkAction]);

    return (
        <StyledHeader
            className={`header ${isNavbarVisible ? 'visible' : ''} ${
                toggleNavShadow ? 'bg-header' : ''
            }`}
            id="header"
        >
            <nav className="nav container">
                <a href="#" className="nav__logo">
                    {t('home.name')}
                </a>

                <div
                    className={`nav__menu ${toggleMenu ? 'show-menu' : ''}`}
                    id="nav-menu"
                >
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home" className="nav__link">
                                <i className="ri-home-5-line"></i> Home
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#skills" className="nav__link">
                                <i className="ri-trophy-line"></i> Skills
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#qualification" className="nav__link">
                                <i className="ri-book-open-line"></i>{' '}
                                Qualification
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#services" className="nav__link">
                                <i className="ri-briefcase-line"></i> Services
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#projects" className="nav__link">
                                <i className="ri-image-line"></i> Projects
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#contact" className="nav__link">
                                <i className="ri-chat-3-line"></i> Contact
                            </a>
                        </li>
                    </ul>

                    <div
                        className="nav__close"
                        id="nav-close"
                        onClick={() => setToggleMenu(!toggleMenu)}
                    >
                        <i className="ri-close-line"></i>
                    </div>
                </div>

                <div className="nav__buttons gap-3 flex">
                    <ChangeTheme />
                    <SwitchLanguage />
                    <DownloadCV />

                    <div
                        className="nav__toggle"
                        id="nav-toggle"
                        onClick={() => setToggleMenu(!toggleMenu)}
                    >
                        <i className="ri-menu-4-line"></i>
                    </div>
                </div>
            </nav>
        </StyledHeader>
    );
};

export default Header;
