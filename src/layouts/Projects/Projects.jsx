import styled from 'styled-components';

import projectImg1 from '../../assets/img/project1.jpg';
import { Splide, SplideSlide } from '@splidejs/react-splide';

const ProjectsStyled = styled.section`
    padding: 0 20px;

    .projects {
        &__container {
            overflow: initial;
        }
        &__content {
            display: grid;
            justify-content: center;
        }
        &__img {
            width: 250px;
            border-radius: 0.75rem;
            margin-bottom: 1.25rem;
        }
        &__subtitle {
            font-size: var(--small-font-size);
            color: var(--text-color-light);
        }
        &__title {
            font-size: var(--h2-font-size);
            margin-bottom: 1.25rem;
            margin: 0.5rem 0 1.25rem;
        }
        &__button {
            display: inline-flex;
            align-items: center;
            column-gap: 0.5rem;
            color: var(--title-color);
            font-size: var(--small-font-size);

            i {
                font-size: 1rem;
                transition: transform 0.3s;
            }

            &:hover {
                i {
                    transform: translate(0.25rem);
                }
            }
        }
    }
`;

const Projects = () => {
    return (
        <ProjectsStyled className="projects section" id="projects">
            <h2 className="section__title">Projects</h2>
            <span className="section__subtitle">Most recent work</span>

            <div className="container section__border">
                <div className="projects__container">
                    <Splide
                        options={{
                            type: 'slide',
                            perPage: 1,
                            rewind: true,
                            pagination: false,
                            arrows: false,
                            autoplay: true,
                            fixedWidth: '90%',
                            gap: '1.5rem',
                            mediaQuery: 'min',
                            breakpoints: {
                                640: {
                                    perPage: 4,
                                    fixedWidth: false,
                                },
                            },
                        }}
                        className="carousel-wrapper"
                        tag="div"
                    >
                        <SplideSlide className="projects__content">
                            <img src={projectImg1} alt="projects image" />

                            <div>
                                <span className="projects__subtitle">
                                    Animation
                                </span>
                                <h1 className="projects__title">
                                    Animation Prototypes 1
                                </h1>

                                <a href="#" className="projects__button">
                                    View <i className="ri-arrow-right-line"></i>
                                </a>
                            </div>
                        </SplideSlide>

                        <SplideSlide className="projects__content">
                            <img src={projectImg1} alt="projects image" />

                            <div>
                                <span className="projects__subtitle">
                                    Animation
                                </span>
                                <h1 className="projects__title">
                                    Animation Prototypes 2
                                </h1>

                                <a href="#" className="projects__button">
                                    View <i className="ri-arrow-right-line"></i>
                                </a>
                            </div>
                        </SplideSlide>

                        <SplideSlide className="projects__content">
                            <img src={projectImg1} alt="projects image" />

                            <div>
                                <span className="projects__subtitle">
                                    Animation
                                </span>
                                <h1 className="projects__title">
                                    Animation Prototypes 3
                                </h1>

                                <a href="#" className="projects__button">
                                    View <i className="ri-arrow-right-line"></i>
                                </a>
                            </div>
                        </SplideSlide>

                        <SplideSlide className="projects__content">
                            <img src={projectImg1} alt="projects image" />

                            <div>
                                <span className="projects__subtitle">
                                    Animation
                                </span>
                                <h1 className="projects__title">
                                    Animation Prototypes
                                </h1>

                                <a href="#" className="projects__button">
                                    View <i className="ri-arrow-right-line"></i>
                                </a>
                            </div>
                        </SplideSlide>
                    </Splide>
                </div>
            </div>
        </ProjectsStyled>
    );
};

export default Projects;
