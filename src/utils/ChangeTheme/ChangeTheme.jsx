import { useRef, useState } from 'react';
import styled from 'styled-components';

const ChangeThemeStyle = styled.div`
    .change-theme {
        font-size: 1rem;
        cursor: pointer;
        transition: color 0.3s;

        &:hover {
            color: var(--test);
        }
    }
`;

const ChangeTheme = () => {
    const [theme, setTheme] = useState(false);
    const themeButton = useRef(null);

    const handleTheme = () => {
        // Previous selected topic (if user selected)
        const selectedTheme = localStorage.getItem('selected-theme');
        const selectedIcon = localStorage.getItem('selected-icon');
    };

    const handleChangeTheme = () => {
        const darkTheme = 'dark-theme';

        const getCurrentTheme = () => {
            document.body.classList.contains(darkTheme) ? 'dark' : 'light';
        };

        document.body.classList.toggle(darkTheme);
        localStorage.setItem('selected-theme', getCurrentTheme());
    };

    return (
        <ChangeThemeStyle className="">
            <button
                onClick={() => {
                    handleChangeTheme();
                    setTheme(!theme);
                }}
                className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
                <i
                    className={`ri-${theme ? 'sun' : 'moon'}-line change-theme`}
                    id="theme-button"
                    ref={themeButton}
                ></i>
            </button>
        </ChangeThemeStyle>
    );
};

export default ChangeTheme;
