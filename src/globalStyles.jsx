import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

body {
    .dark-theme {
        --title-color: hsl(207, 4%, 95%);
        --text-color: hsl(207, 4%, 65%);
        --body-color: #252525;
        --container-color: hsl(207, 4%, 12%);
    }
    
    &::-webkit-scrollbar {
        width: .6rem;
        background-color: hsl(207, 4%, 75%);
    }

    &::-webkit-scrollbar-thumb {
        background-color: hsl(207, 4%, 65%);
        border-radius: 0.5rem;

        &:hover {
            background-color: hsl(207, 4%, 55%);
        }
    }
}
`;

export default GlobalStyle;
