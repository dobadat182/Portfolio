import { Splide, SplideSlide } from '@splidejs/react-splide';
import React from 'react';
import styled from 'styled-components';

import fpoly from '../../assets/img/fpt.png';
import namtech from '../../assets/img/namtech.png';

const TimelineStyle = styled.section`
    .card {
        &-time {
        }
        &-title {
            font-size: var(--normal-font-size);
            font-family: var(--title-font);
            font-weight: var(--font-semi-bold);
        }
        &-description {
        }
    }
`;

const Timeline = () => {
    return (
        <TimelineStyle>
            <h2 className="section__title">Timeline</h2>
            <span className="section__subtitle">Experience & education</span>

            <div className="timeline__container container grid section__border">
                <Splide
                    options={{
                        type: 'slide',
                        perPage: 1,
                        rewind: true,
                        pagination: false,
                        arrows: false,
                        gap: '1rem',
                        fixedWidth: '90%',
                        padding: 20,
                        mediaQuery: 'min',
                        breakpoints: {
                            1024: {
                                perPage: 2,
                                fixedWidth: false,
                            },
                        },
                    }}
                    className="carousel-wrapper"
                    tag="div"
                >
                    {/* Item 1 */}
                    <SplideSlide>
                        <a
                            href="#"
                            className="flex items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 h-44"
                        >
                            <div className="card-image w-1/3 p-3">
                                <img
                                    className="object-contain"
                                    src={fpoly}
                                    alt=""
                                />
                            </div>
                            <div className="flex flex-col justify-between p-4 leading-normal">
                                <span className="card-time text-sm text-gray-500 dark:text-gray-400">
                                    2019 - FPT Polytechnic College
                                </span>
                                <h5 className="mb-2 card-title flex items-center">
                                    Student
                                </h5>
                                <p className="mb-3 card-description">
                                    Start learning the basics of programming &
                                    UI/UX
                                </p>
                                <ul className="flex gap-x-2">
                                    <li className="flex items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="icon icon-tabler icon-tabler-brand-php"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path
                                                stroke="none"
                                                d="M0 0h24v24H0z"
                                                fill="none"
                                            ></path>
                                            <path d="M12 12m-10 0a10 9 0 1 0 20 0a10 9 0 1 0 -20 0"></path>
                                            <path d="M5.5 15l.395 -1.974l.605 -3.026h1.32a1 1 0 0 1 .986 1.164l-.167 1a1 1 0 0 1 -.986 .836h-1.653"></path>
                                            <path d="M15.5 15l.395 -1.974l.605 -3.026h1.32a1 1 0 0 1 .986 1.164l-.167 1a1 1 0 0 1 -.986 .836h-1.653"></path>
                                            <path d="M12 7.5l-1 5.5"></path>
                                            <path d="M11.6 10h2.4l-.5 3"></path>
                                        </svg>
                                    </li>
                                    <li className="flex items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="icon icon-tabler icon-tabler-html"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path
                                                stroke="none"
                                                d="M0 0h24v24H0z"
                                                fill="none"
                                            ></path>
                                            <path d="M13 16v-8l2 5l2 -5v8"></path>
                                            <path d="M1 16v-8"></path>
                                            <path d="M5 8v8"></path>
                                            <path d="M1 12h4"></path>
                                            <path d="M7 8h4"></path>
                                            <path d="M9 8v8"></path>
                                            <path d="M20 8v8h3"></path>
                                        </svg>
                                    </li>
                                    <li className="flex items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="icon icon-tabler icon-tabler-brand-css3"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path
                                                stroke="none"
                                                d="M0 0h24v24H0z"
                                                fill="none"
                                            ></path>
                                            <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z"></path>
                                            <path d="M8.5 8h7l-4.5 4h4l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5"></path>
                                        </svg>
                                    </li>
                                    <li>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="icon icon-tabler icon-tabler-brand-javascript"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path
                                                stroke="none"
                                                d="M0 0h24v24H0z"
                                                fill="none"
                                            ></path>
                                            <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z"></path>
                                            <path d="M7.5 8h3v8l-2 -1"></path>
                                            <path d="M16.5 8h-2.5a.5 .5 0 0 0 -.5 .5v3a.5 .5 0 0 0 .5 .5h1.423a.5 .5 0 0 1 .495 .57l-.418 2.93l-2 .5"></path>
                                        </svg>
                                    </li>
                                </ul>
                            </div>
                        </a>
                    </SplideSlide>

                    {/* Item 2 */}
                    <SplideSlide>
                        <a
                            href="https://namtech.com.au"
                            className="card flex items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 h-44"
                        >
                            <div className="card-image w-1/3 p-3">
                                <img
                                    className="object-contain"
                                    src={namtech}
                                    alt=""
                                />
                            </div>

                            <div className="flex flex-col justify-between p-4 leading-normal">
                                <span className="text-sm text-gray-500 dark:text-gray-400">
                                    2021 - 2023 (N.A.M Technology Co. Ltd.)
                                </span>

                                <h5 className="mb-2 card-title">
                                    Frontend Developer
                                </h5>
                                <p className="mb-3 card-description">
                                    Start your first programming job starting as
                                    an intern to junior
                                </p>
                                <ul className="flex gap-x-2">
                                    <li className="flex items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="icon icon-tabler icon-tabler-brand-nuxt"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            strokeWidth="2"
                                            stroke="currentColor"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path
                                                stroke="none"
                                                d="M0 0h24v24H0z"
                                                fill="none"
                                            ></path>
                                            <path d="M12.146 8.583l-1.3 -2.09a1.046 1.046 0 0 0 -1.786 .017l-5.91 9.908a1.046 1.046 0 0 0 .897 1.582h3.913"></path>
                                            <path d="M20.043 18c.743 0 1.201 -.843 .82 -1.505l-4.044 -7.013a.936 .936 0 0 0 -1.638 0l-4.043 7.013c-.382 .662 .076 1.505 .819 1.505h8.086z"></path>
                                        </svg>
                                    </li>
                                    <li className="flex items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="icon icon-tabler icon-tabler-brand-wordpress"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            strokeWidth="2"
                                            stroke="currentColor"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path
                                                stroke="none"
                                                d="M0 0h24v24H0z"
                                                fill="none"
                                            ></path>
                                            <path d="M9.5 9h3"></path>
                                            <path d="M4 9h2.5"></path>
                                            <path d="M11 9l3 11l4 -9"></path>
                                            <path d="M5.5 9l3.5 11l3 -7"></path>
                                            <path d="M18 11c.177 -.528 1 -1.364 1 -2.5c0 -1.78 -.776 -2.5 -1.875 -2.5c-.898 0 -1.125 .812 -1.125 1.429c0 1.83 2 2.058 2 3.571z"></path>
                                            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                                        </svg>
                                    </li>
                                    <li className="flex items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="icon icon-tabler icon-tabler-brand-bootstrap"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path
                                                stroke="none"
                                                d="M0 0h24v24H0z"
                                                fill="none"
                                            ></path>
                                            <path d="M2 12a2 2 0 0 0 2 -2v-4a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2"></path>
                                            <path d="M2 12a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-4a2 2 0 0 1 2 -2"></path>
                                            <path d="M9 16v-8h3.5a2 2 0 1 1 0 4h-3.5h4a2 2 0 1 1 0 4h-4z"></path>
                                        </svg>
                                    </li>
                                    <li className="flex items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="icon icon-tabler icon-tabler-brand-sass"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path
                                                stroke="none"
                                                d="M0 0h24v24H0z"
                                                fill="none"
                                            ></path>
                                            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                                            <path d="M12 10.523c2.46 -.826 4 -.826 4 -2.155c0 -1.366 -1.347 -1.366 -2.735 -1.366c-1.91 0 -3.352 .49 -4.537 1.748c-.848 .902 -1.027 2.449 -.153 3.307c.973 .956 3.206 1.789 2.884 3.493c-.233 1.235 -1.469 1.823 -2.617 1.202c-.782 -.424 -.454 -1.746 .626 -2.512s2.822 -.992 4.1 -.24c.98 .575 1.046 1.724 .434 2.193"></path>
                                        </svg>
                                    </li>
                                    <li>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="icon icon-tabler icon-tabler-brand-tailwind"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path
                                                stroke="none"
                                                d="M0 0h24v24H0z"
                                                fill="none"
                                            ></path>
                                            <path d="M11.667 6c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 2 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968zm-4 6.5c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 1.975 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968z"></path>
                                        </svg>
                                    </li>
                                </ul>
                            </div>
                        </a>
                    </SplideSlide>
                </Splide>
            </div>
        </TimelineStyle>
    );
};

export default Timeline;
