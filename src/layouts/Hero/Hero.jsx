import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

import avatar from '../../assets/img/me.jpg';
import shapeWawes from '../../assets/img/shape-wawes.svg';
import shapeCircle from '../../assets/img/shape-circle.svg';
import fireCute from '../../assets/lottie/fire-cute.gif';

const HeroStyled = styled.div`
    @media (min-width: 1023px) {
        margin-top: 70px;
    }

    .home {
        &__container {
            row-gap: 4rem;
            padding-top: 2rem;

            @media (min-width: 767px) {
                padding: 0 20px;
                grid-template-columns: 1fr 2fr 1fr;
            }
            @media (min-width: 1200px) {
                padding: 3rem 20px 6rem;
            }
            @media (min-width: 1440px) {
                padding-left: 0;
                padding-right: 0;
            }
        }
        &__data {
            row-gap: 1.5rem;
            @media (min-width: 767px) {
                order: 2;
            }
            @media (min-width: 1200px) {
                row-gap: 2.5rem;
            }
        }
        &__title {
            text-align: center;
            font-size: var(--biggest-font-size);
            letter-spacing: 0.3px;
            margin-bottom: 0.5rem;
            @media (min-width: 1023px) {
                font-size: 2.25rem;
            }
            @media (min-width: 1400px) {
                font-size: var(--biggest-font-size);
            }
        }
        &__blob {
            position: relative;
            width: 200px;
            height: 290px;
            background-color: var(--body-color);
            border: 2px solid var(--text-color-light);
            justify-self: center;
            border-radius: 6.25rem;
            place-items: center;
            @media (min-width: 1200px) {
                width: 400px;
                height: 580px;
                border-radius: 12.5rem;
            }
        }
        &__perfil {
            width: 170px;
            height: 260px;
            background: var(--gradient-color);
            border-radius: 5.5rem;
            overflow: hidden;
            display: flex;
            justify-content: center;
            align-items: flex-end;
            @media (min-width: 1200px) {
                width: 340px;
                height: 520px;
                border-radius: 10.6rem;
            }
            img {
                height: 100%;
                width: 100%;
                object-fit: cover;
                /* width: 150px; */
                @media (min-width: 1200px) {
                    /* width: 300px; */
                }
            }
        }
        &__shape {
            &-wawes,
            &-circle {
                position: absolute;
                opacity: 0.1;
            }
            &-wawes {
                width: 50px;
                left: -1.5rem;
                top: 5rem;
                @media (min-width: 1200px) {
                    width: 100px;
                    left: -4rem;
                    top: 10rem;
                }
            }
            &-circle {
                width: 150px;
                bottom: -2rem;
                right: -3rem;
                transform: rotate(15deg);
                z-index: -1;
                @media (min-width: 1200px) {
                    width: 250px;
                    bottom: -1rem;
                    right: -5rem;
                }
            }
        }
        &__social {
            justify-self: center;
            display: flex;
            column-gap: 1.25rem;
            @media (min-width: 1200px) {
                column-gap: 2rem;
            }
            &-link {
                font-size: 1.25rem;
                color: var(--text-color-light);
                transform: color 0.3s;
                @media (min-width: 1200px) {
                    font-size: 1.5rem;
                }
                &:hover {
                    color: var(--title-color);
                }
            }
        }
        &__info {
            display: grid;
            @media (min-width: 767px) {
                row-gap: 2rem;
                margin-top: 10rem;
                &:nth-child(3) {
                    order: 3;
                    text-align: right;
                }
            }
            @media (min-width: 1200px) {
                grid-template-rows: repeat(3, 130px);
                row-gap: 4rem;
                margin-top: 16rem;
            }

            &-title {
                font-family: var(--body-font);
                font-size: var(--smaller-font-size);
                font-weight: 400;
                color: var(--text-color-light);
                margin-bottom: 1rem;
            }
            &-description,
            &-number {
                font-family: var(--title-font);
                color: var(--title-color);
            }

            &-description {
                /* padding-right: 4rem; */
                @media (min-width: 767px) {
                    padding-right: 0;
                }
            }
            &-number {
                font-size: var(--h1-font-size);
                font-weight: var(--font-semi-bold);
            }
        }
    }

    .splide {
        &__arrows {
            gap: 1rem;
        }
        &__arrow {
            background: none;
            position: unset;
            transform: translateY(0);
        }
    }
`;

const Hero = () => {
    const { t } = useTranslation();

    return (
        <HeroStyled id="home">
            <div className="home__container container mx-auto grid section__border">
                <div className="home__data grid">
                    <h1 className="home__title order-3 md:-order-none">
                        {t('home.title.lineOne')} <br />
                        {t('home.title.jobName')} <br />
                        {t('home.title.location')}
                    </h1>

                    <div className="home__blob grid order-1 md:-order-none">
                        <div className="home__perfil">
                            <img src={avatar} alt="home perfil" />
                        </div>
                        <img
                            src={shapeWawes}
                            alt=""
                            className="home__shape-wawes"
                        />
                        <img
                            src={shapeCircle}
                            alt=""
                            className="home__shape-circle"
                        />
                    </div>

                    <ul className="home__social order-2 md:-order-none">
                        <a
                            href="/"
                            target="_blank"
                            className="home__social-link"
                        >
                            <i className="ri-linkedin-box-line"></i>
                        </a>
                        <a
                            href="/"
                            target="_blank"
                            className="home__social-link"
                        >
                            <i className="ri-github-line"></i>
                        </a>
                    </ul>
                </div>

                {/* Desktop UI */}
                <div className="home__info !hidden md:!grid">
                    <div>
                        <h3 className="home__info-title">BIOGRAPHY</h3>
                        <p className="home__info-description">
                            Hi, I'm Dat, Frontend Developer. Passionate about
                            designing beautiful web interfaces, Based in Ho Chi
                            Minh city
                        </p>
                    </div>

                    <div>
                        <h3 className="home__info-title">CONTACT</h3>
                        <p className="home__info-description">
                            Ho Chi Minh <br />
                            badat336@gmail.com <br />
                        </p>
                    </div>

                    <div>
                        <h3 className="home__info-title">SERVICES</h3>
                        <p className="home__info-description">
                            Website Development <br />
                            Animation <br />
                            Wordpress <br />
                            React
                        </p>
                    </div>
                </div>

                <div className="home__info !hidden md:!grid">
                    <div>
                        <h3 className="home__info-title">
                            YEARS OF EXPERIENCE
                        </h3>

                        <p className="home__info-number">02+</p>
                    </div>

                    <div>
                        <h3 className="home__info-title">COMPLETED PROJECTS</h3>

                        <p className="home__info-number">24+</p>
                    </div>

                    <div>
                        <h3 className="home__info-title">COMPANIES WORKED</h3>

                        <p className="home__info-number">01+</p>
                    </div>
                </div>

                {/* Mobile UI */}
                <Splide
                    options={{
                        type: 'splide',
                        perPage: 1,
                        padding: '20%',
                        focus: 'center',
                        arrows: false,
                        pagination: false,
                        rewind: false,
                        start: 1,
                    }}
                    className="home__info md:!hidden"
                >
                    <SplideSlide className="flex flex-col items-center">
                        <h3 className="home__info-title text-center">
                            CONTACT
                        </h3>
                        <p className="home__info-description text-center">
                            Ho Chi Minh <br />
                            badat336@gmail.com <br />
                        </p>
                    </SplideSlide>

                    <SplideSlide className="flex flex-col items-center">
                        <h3 className="home__info-title text-center">
                            BIOGRAPHY
                        </h3>
                        <p className="home__info-description text-center">
                            Hi, I'm Dat, Frontend Developer. Passionate about
                            designing beautiful web interfaces, Based in Ho Chi
                            Minh city
                        </p>
                    </SplideSlide>

                    <SplideSlide className="flex flex-col items-center">
                        <h3 className="home__info-title text-center">
                            SERVICES
                        </h3>
                        <p className="home__info-description text-center">
                            Website Development <br />
                            Animation <br />
                            Wordpress <br />
                            React
                        </p>
                    </SplideSlide>
                </Splide>

                <Splide
                    id="home-splide-info-2"
                    hasTrack={false}
                    extensions={{ AutoScroll }}
                    options={{
                        type: 'loop',
                        perPage: 3,
                        focus: 'center',
                        arrows: false,
                        pagination: false,
                        padding: 10,
                        drag: 'free',
                        autoScroll: {
                            speed: 1,
                        },
                        breakpoints: {
                            425: {
                                focus: false,
                                perPage: 2,
                                arrows: false,
                            },
                        },
                    }}
                    className="home__info md:!hidden"
                >
                    <SplideTrack>
                        <SplideSlide className="flex flex-col items-center">
                            <h3 className="home__info-title text-center">
                                YEARS OF EXPERIENCE
                            </h3>

                            <p className="home__info-number">02+</p>
                        </SplideSlide>

                        <SplideSlide className="flex flex-col items-center">
                            <h3 className="home__info-title text-center">
                                COMPLETED PROJECTS
                            </h3>

                            <p className="home__info-number">24+</p>
                        </SplideSlide>

                        <SplideSlide className="flex flex-col items-center">
                            <h3 className="home__info-title text-center">
                                COMPANIES WORKED
                            </h3>

                            <p className="home__info-number">01+</p>
                        </SplideSlide>
                    </SplideTrack>

                    {/* <div className="splide__arrows flex justify-center items-center mt-2">
                        <button className="splide__arrow splide__arrow--prev">
                            <i className="ri-arrow-left-s-line"></i>
                        </button>
                        <button className="splide__arrow splide__arrow--next">
                            <i className="ri-arrow-right-s-line"></i>
                        </button>
                    </div> */}

                    <div className="flex justify-center mt-10">
                        <iframe
                            className="w-40"
                            title="frame"
                            src="https://embed.lottiefiles.com/animation/16773"
                        />
                    </div>
                </Splide>
            </div>
        </HeroStyled>
    );
};

export default Hero;
