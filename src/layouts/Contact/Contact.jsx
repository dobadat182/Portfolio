import React from 'react';
import styled from 'styled-components';

const ContactStyled = styled.section`
    .contact {
        &__container {
            row-gap: 3.5rem;
            padding: 0 20px;
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
        &__htmlForm {
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
                transition: transition 0.3s;
            }

            &:hover i {
                transition: translateX(0.25rem);
            }
        }

        &__htmlForm {
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

const SubmitButtonStyle = styled.button`
    position: relative;
    margin: 0;
    padding: 0.5rem 2rem;
    outline: none;
    text-decoration: none;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: none;
    text-transform: uppercase;
    background-color: var(--bg-button);
    border-radius: 10px;
    color: #fff;
    font-weight: 300;
    font-size: 18px;
    font-family: inherit;
    z-index: 0;
    overflow: hidden;
    transition: all 0.3s cubic-bezier(0.02, 0.01, 0.47, 1);
    width: 100%;

    span {
        font-size: var(--normal-font-size);
        font-weight: var(--font-medium);
        color: var(--body-color);
        letter-spacing: 1px;
        i {
            color: var(--text-color-light);
        }
    }

    &:hover {
        animation: sh0 0.5s ease-in-out both;
        span {
            animation: storm 0.7s ease-in-out both;
            animation-delay: 0.06s;
        }
        &::before,
        &::after {
            opacity: 0.15;
            transition: transform 0.2s cubic-bezier(0.02, 0.01, 0.47, 1),
                opacity 0.2s cubic-bezier(0.02, 0.01, 0.47, 1);
        }

        &::before {
            transform: translate3d(50%, 0, 0) scale(0.9);
        }
        &::after {
            transform: translate(50%, 0) scale(1.1);
        }
    }
    &::before,
    &::after {
        content: '';
        position: absolute;
        right: 0;
        bottom: 0;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background: #fff;
        opacity: 0;
        transition: transform 0.15s cubic-bezier(0.02, 0.01, 0.47, 1),
            opacity 0.15s cubic-bezier(0.02, 0.01, 0.47, 1);
        z-index: -1;
        transform: translate(100%, -25%) translate3d(0, 0, 0);
    }

    @keyframes sh0 {
        0% {
            transform: rotate(0deg) translate3d(0, 0, 0);
        }

        25% {
            transform: rotate(1deg) translate3d(0, 0, 0);
        }

        50% {
            transform: rotate(-0.5deg) translate3d(0, 0, 0);
        }

        75% {
            transform: rotate(1deg) translate3d(0, 0, 0);
        }

        100% {
            transform: rotate(0deg) translate3d(0, 0, 0);
        }
    }
`;

const NewContactStyle = styled.section`
    .contact {
        &__description {
        }
    }

    input {
        font-size: var(--normal-font-size);
        font-family: var(--title-font);
    }
`;

const Contact = () => {
    return (
        <div className="container mx-auto">
            <section className="mb-32 text-center">
                <div className="mx-auto max-w-[700px] md:px-3">
                    <h2 className="mb-12 text-3xl font-bold">Contact me</h2>
                    <form>
                        <div
                            className="relative mb-6"
                            data-te-input-wrapper-init
                        >
                            <input
                                type="text"
                                className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                id="exampleInput90"
                                placeholder="Name"
                            />
                            <label
                                className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none ddark:peer-focus:text-primary"
                                htmlFor="exampleInput90"
                            >
                                Name
                            </label>
                        </div>
                        <div
                            className="relative mb-6"
                            data-te-input-wrapper-init
                        >
                            <input
                                type="email"
                                className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                id="exampleInput91"
                                placeholder="Email address"
                            />
                            <label
                                className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none ddark:peer-focus:text-primary"
                                htmlFor="exampleInput91"
                            >
                                Email address
                            </label>
                        </div>
                        <div
                            className="relative mb-6"
                            data-te-input-wrapper-init
                        >
                            <textarea
                                className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                id="exampleFormControlTextarea1"
                                rows="3"
                                placeholder="Your message"
                            ></textarea>
                            <label
                                htmlFor="exampleFormControlTextarea1"
                                className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none ddark:peer-focus:text-primary"
                            >
                                Message
                            </label>
                        </div>
                        <SubmitButtonStyle>
                            <span>Submit</span>
                        </SubmitButtonStyle>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Contact;
