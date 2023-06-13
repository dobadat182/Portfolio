import styled from 'styled-components';

import skillHtml from '../../assets/img/html-1.svg';
import skillCss from '../../assets/img/css-3.svg';
import skillJs from '../../assets/img/logo-javascript.svg';
import skillReact from '../../assets/img/react.svg';
import skillGit from '../../assets/img/git-icon.svg';
import skillFigma from '../../assets/img/figma-1.svg';
import skillPhp from '../../assets/img/php-1.svg';
import skillDocker from '../../assets/img/docker.svg';
import skillBitbucket from '../../assets/img/bitbucket-icon.svg';
import skillGithub from '../../assets/img/github-icon-1.svg';
import skillSass from '../../assets/img/sass-1.svg';
import skillJquery from '../../assets/img/jquery-2.svg';
import skillWordpress from '../../assets/img/wordpress-icon-1.svg';
import skillPs4 from '../../assets/img/playstation-6.svg';

const SkillStyled = styled.section`
    .skills {
        &__container {
            row-gap: 3.5rem;
            @media (min-width: 768px) {
                justify-content: center;
                grid-template-columns: repeat(2, max-content);
                column-gap: 5rem;
            }
        }
        &__title {
            display: flex;
            justify-content: center;
            align-items: center;
            column-gap: 0.5rem;
            font-size: var(--small-font-size);
            font-weight: var(--font-semi-bold);
            margin-bottom: 2.5rem;

            i {
                font-size: 1rem;
                font-weight: initial;
            }
        }
        &__info,
        &__data,
        &__blob {
            display: grid;
        }

        &__info {
            grid-template-columns: repeat(3, 1fr);
            gap: 2.5rem 2rem;
            @media (max-width: 380px) {
                grid-template-columns: repeat(3, 1fr);
            }
        }

        &__data {
            justify-content: center;
            text-align: center;
        }

        &__blob {
            width: 80px;
            height: 100px;
            background-color: var(--container-color);
            border-radius: 3rem;
            place-items: center;
            margin-bottom: 1rem;

            &:hover {
                img {
                    animation: bounce-skills 0.6s;
                }
            }

            img {
                width: 40px;
            }
        }

        &__name {
            font-size: var(--small-font-size);
            margin-bottom: 0.25rem;
        }
        &__subtitle {
            font-size: var(--tiny-font-size);
            color: var(--text-color-light);
        }
        &__content {
            &:nth-child(3) {
                grid-area: 2 / 1 / 3 / 3;
            }
        }
    }

    @keyframes bounce-skills {
        0% {
            transform: translate(0);
        }
        20% {
            transform: translateY(-6px);
        }
        40% {
            transform: translate(0);
        }
        60% {
            transform: translateY(-3px);
        }
        80% {
            transform: translate(0);
        }
        100% {
            transform: translate(0);
        }
    }
`;

const Skills = () => {
    return (
        <SkillStyled className="skills section" id="skills">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">My favorite skills</span>
            <div className="skills__container container grid section__border">
                {/* Skill 1 */}
                <div className="skills__content">
                    <h3 className="skills__title">
                        <i className="ri-braces-line"></i> Technologies
                    </h3>

                    <div className="skills__info">
                        <div className="skills__data">
                            <div className="skills__blob">
                                <img src={skillHtml} alt="skills image" />
                            </div>

                            <h3 className="skills__name">HTML</h3>
                            <span className="skills__subtitle">
                                Intermediate
                            </span>
                        </div>

                        <div className="skills__data">
                            <div className="skills__blob">
                                <img src={skillCss} alt="skills image" />
                            </div>

                            <h3 className="skills__name">CSS</h3>
                            <span className="skills__subtitle">Advanced</span>
                        </div>

                        <div className="skills__data">
                            <div className="skills__blob">
                                <img src={skillSass} alt="skills image" />
                            </div>

                            <h3 className="skills__name">SCSS</h3>
                            <span className="skills__subtitle">
                                Intermediate
                            </span>
                        </div>

                        <div className="skills__data">
                            <div className="skills__blob">
                                <img src={skillJs} alt="skills image" />
                            </div>

                            <h3 className="skills__name">JavaScript</h3>
                            <span className="skills__subtitle">
                                Intermediate
                            </span>
                        </div>

                        <div className="skills__data">
                            <div className="skills__blob">
                                <img src={skillJquery} alt="skills image" />
                            </div>

                            <h3 className="skills__name">Jquey</h3>
                            <span className="skills__subtitle">
                                Intermediate
                            </span>
                        </div>

                        <div className="skills__data">
                            <div className="skills__blob">
                                <img src={skillPhp} alt="skills image" />
                            </div>

                            <h3 className="skills__name">PHP</h3>
                            <span className="skills__subtitle">
                                Intermediate
                            </span>
                        </div>

                        <div className="skills__data">
                            <div className="skills__blob">
                                <img src={skillReact} alt="skills image" />
                            </div>

                            <h3 className="skills__name">React</h3>
                            <span className="skills__subtitle">
                                Intermediate
                            </span>
                        </div>

                        <div className="skills__data">
                            <div className="skills__blob">
                                <img src={skillGit} alt="skills image" />
                            </div>

                            <h3 className="skills__name">Git</h3>
                            <span className="skills__subtitle">
                                Intermediate
                            </span>
                        </div>
                    </div>
                </div>

                {/* Skill 2 */}
                <div className="skills__content">
                    <h3 className="skills__title">
                        <i className="ri-tools-line"></i> Tools
                    </h3>

                    <div className="skills__info">
                        <div className="skills__data">
                            <div className="skills__blob">
                                <img src={skillFigma} alt="skills image" />
                            </div>

                            <h3 className="skills__name">Figma</h3>
                            <span className="skills__subtitle">
                                Intermediate
                            </span>
                        </div>
                        <div className="skills__data">
                            <div className="skills__blob">
                                <img src={skillDocker} alt="skills image" />
                            </div>

                            <h3 className="skills__name">Docker</h3>
                            <span className="skills__subtitle">Basic</span>
                        </div>
                        <div className="skills__data">
                            <div className="skills__blob">
                                <img src={skillBitbucket} alt="skills image" />
                            </div>

                            <h3 className="skills__name">Bitbucket</h3>
                            <span className="skills__subtitle">Basic</span>
                        </div>

                        <div className="skills__data">
                            <div className="skills__blob">
                                <img src={skillGithub} alt="skills image" />
                            </div>

                            <h3 className="skills__name">Github</h3>
                            <span className="skills__subtitle">Basic</span>
                        </div>

                        <div className="skills__data">
                            <div className="skills__blob">
                                <img src={skillWordpress} alt="skills image" />
                            </div>

                            <h3 className="skills__name">Wordpress</h3>
                            <span className="skills__subtitle">Advanced</span>
                        </div>
                    </div>
                </div>
            </div>
        </SkillStyled>
    );
};

export default Skills;
