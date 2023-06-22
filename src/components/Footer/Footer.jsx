import React from 'react';

const Footer = () => {
    return (
        <footer className="shadow bg-slate-900 mx-5 rounded-t-lg">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="/" className="flex items-center mb-4 sm:mb-0">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                            Dzt
                        </span>
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0">
                        <li>
                            <a
                                href="#home"
                                className="mr-4 hover:underline md:mr-6 "
                            >
                                Introduce
                            </a>
                        </li>
                        <li>
                            <a
                                href="#skills"
                                className="mr-4 hover:underline md:mr-6"
                            >
                                Skills
                            </a>
                        </li>
                        <li>
                            <a
                                href="#timeline"
                                className="mr-4 hover:underline md:mr-6 "
                            >
                                Timeline
                            </a>
                        </li>
                        <li>
                            <a
                                href="#projects"
                                className="hover:underline md:mr-6"
                            >
                                Projects
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="hover:underline">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-white sm:text-center">
                    © 2023{' '}
                    <a href="https://flowbite.com/" className="hover:underline">
                        Bá Đạt
                    </a>
                    . Made with rice & gray matter
                </span>
            </div>
        </footer>
    );
};

export default Footer;
