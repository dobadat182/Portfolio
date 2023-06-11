import styled from 'styled-components';

import shapeWawes from '../../assets/img/shape-wawes.svg';

const TestimonialStyled = styled.section`
    position: relative;
    .testimonial {
        &__content {
            text-align: center;
        }

        &__description {
            font-family: var(--title-font);
            color: var(--title-color);
            margin-bottom: 1.5rem;
        }
        &__name {
            font-family: var(--body-font);
            font-size: var(--small-font-size);
            margin-bottom: 0.25rem;
        }
        &__subtitle {
            font-size: var(--smaller-font-size);
            color: var(--text-color-light);
        }
        &__img {
            width: 70px;
            transform: rotate(30deg);
            position: absolute;
            top: 5rem;
            right: -1.5rem;
            opacity: 0.1;
        }
    }
`;

const Testimonial = () => {
    return (
        <TestimonialStyled className="testimonial section">
            <h2 className="section__title">Testimonial</h2>
            <span className="section__subtitle">My client saying</span>

            <div className="container section__border">
                <div className="testimonial__container">
                    <div>
                        <div className="testimonial__content">
                            <p className="testimonial__description">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Eveniet praesentium unde, nemo
                                officiis ad vitae consectetur aliquid et animi
                                esse! Sed, delectus et nemo necessitatibus culpa
                                illum quod voluptatem corrupti!
                            </p>

                            <div>
                                <h3 className="testimonial__name">Travis</h3>
                                <span className="testimonial__subtitle">
                                    Client
                                </span>
                            </div>
                        </div>

                        <div className="testimonial__content">
                            <p className="testimonial__description">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Eveniet praesentium unde, nemo
                                officiis ad vitae consectetur aliquid et animi
                                esse! Sed, delectus et nemo necessitatibus culpa
                                illum quod voluptatem corrupti!
                            </p>

                            <div>
                                <h3 className="testimonial__name">Travis</h3>
                                <span className="testimonial__subtitle">
                                    Client
                                </span>
                            </div>
                        </div>

                        <div className="testimonial__content">
                            <p className="testimonial__description">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Eveniet praesentium unde, nemo
                                officiis ad vitae consectetur aliquid et animi
                                esse! Sed, delectus et nemo necessitatibus culpa
                                illum quod voluptatem corrupti!
                            </p>

                            <div>
                                <h3 className="testimonial__name">Travis</h3>
                                <span className="testimonial__subtitle">
                                    Client
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <img
                src={shapeWawes}
                alt="testimonial image"
                className="testimonial__img"
            />
        </TestimonialStyled>
    );
};

export default Testimonial;
