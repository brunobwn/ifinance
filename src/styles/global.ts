import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    :root {
        --blue: #227C9D;
        --green: #17C3B2;
        --yellow: #FFCB77;
        --background: #FEF9EF;
        --red: #FE6D73;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }

        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    body {
        background-color: var(--background);
        -webkit-font-smoothing: antialiased;
        font-family: 'Poppins', sans-serif;
    }

    button {
        cursor: pointer;
    }

    h1,h2,h3,h4,h5,h6 {
        font-weight: 600;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;
