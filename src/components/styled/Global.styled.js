import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    ul {
        list-style: none;
    }
    a {
        text-decoration: none;
    }
`;