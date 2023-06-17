import React from 'react';
import styled from 'styled-components';

const ContactStyled = styled.section`
    .contact {
        &__container {
            row-gap: 3.5rem;
            @media (min-width: 768px) {
                justify-content: center;
                column-gap: 8rem;
                grid-template-columns: repeat(2, max-content);
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
        &__form {
            display: grid;
        }

        &__info {
            row-gap: 2rem;
        }

        &__data {
            row-gap: 0.75rem;
            &-title {
                font-size: var(--small-font-size);
                color: var(--text-color-light);
            }
            &-info {
                font-size: var(--small-font-size);
                font-family: var(--title-font);
                color: var(--title-color);
            }
        }

        &__button {
            width: max-content;
            display: inline-flex;
            align-items: center;
            column-gap: 0.5rem;
            color: var(--title-color);
            font-size: var(--small-font-size);

            i {
                font-size: 1rem;
                transition: transform 0.3s;
            }

            &:hover i {
                transform: translateX(0.25rem);
            }
        }

        &__form {
            position: relative;
            row-gap: 2rem;
            @media (min-width: 768px) {
                width: 360px;
            }
            &-div {
                position: relative;
                height: 4rem;
            }
            &-input {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                border: 2px solid var(--text-color-light);
                border-radius: 2rem;
                padding: 1.5rem;
                font-size: var(--normal-font-size);
                font-family: var(--title-font);
                background: none;
                outline: none;
                z-index: 1;
            }
            &-tag {
                position: absolute;
                top: -0.75rem;
                left: 1.25rem;
                z-index: 10;
                background-color: var(--body-color);
                font-size: var(--smaller-font-size);
                font-weight: var(--font-medium);
                padding: 0.35rem;
            }
            &-area {
                height: 10rem;

                textarea {
                    resize: none;
                }
            }

            &__button {
                border: none;
                background: none;
                font-size: var(--h2-font-size);
                font-family: var(--title-font);
                font-weight: var(--font-semi-bold);
                cursor: pointer;
                outline: none;
                margin-top: 0.75rem;

                i {
                    font-size: 1.5rem;
                    font-weight: initial;
                }
            }
        }
    }
`;

const Contact = () => {
    return (
        <ContactStyled className="contact section" id="contact">
            <h2 className="section__title">Contact Me</h2>
            <span className="section__subtitle">Get in touch</span>

            <div className="contact__container container grid section__border">
                <div className="contact__content">
                    <h3 className="contact__title">
                        <i className="ri-chat-3-"></i> Talk to me
                    </h3>

                    <div className="contact__info">
                        <div className="contact__data">
                            <span className="contact__data-title">Email</span>
                            <span className="contact__data-info">
                                badat336@gmail.com
                            </span>
                            <a
                                href="mailto:badat336@gmail.com"
                                className="contact__button"
                                target="_blank"
                            >
                                Write me <i className="ri-arrow-right-line"></i>
                            </a>
                        </div>
                    </div>

                    <div className="contact__info">
                        <div className="contact__data">
                            <span className="contact__data-title">
                                Linkedin&nbsp;
                            </span>
                            <span className="contact__data-info">
                                Do Ba Dat
                            </span>
                            <a
                                href="https://www.linkedin.com/in/badat182/"
                                className="contact__button"
                                target="_blank"
                            >
                                View Profile
                                <i className="ri-arrow-right-line"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="contact__content">
                    <h3 className="contact__title">
                        <i className="ri-send-plane-line"></i> Write me your
                        project
                    </h3>
                    <form action="" className="contact__form" id="contact-form">
                        <div className="contact__form-div">
                            <label htmlFor="" className="contact__form-tag">
                                Names
                            </label>
                            <input
                                type="text"
                                name="user_name"
                                required
                                placeholder="Write your names"
                                id="contact-name"
                                className="contact__form-input"
                            />
                        </div>

                        <div className="contact__form-div">
                            <label htmlFor="" className="contact__form-tag">
                                Email
                            </label>
                            <input
                                type="text"
                                name="user_name"
                                required
                                placeholder="Write your email"
                                id="contact-email"
                                className="contact__form-input"
                            />
                        </div>

                        <div className="contact__form-div contact__form-area">
                            <label htmlFor="" className="contact__form-tag">
                                Project
                            </label>

                            <textarea
                                name="user_project"
                                placeholder="Write your project"
                                className="contact__form-input"
                                id="contact-project"
                            ></textarea>
                        </div>

                        <button className="contact__button" type="submit">
                            Submit <i className="ri-arrow-right-up-line"></i>
                        </button>
                    </form>
                </div>
            </div>
        </ContactStyled>
    );
};

export default Contact;
